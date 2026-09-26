// pages/index.js
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { ClipLoader } from "react-spinners";
import Navbar from "../components/Navbar";

export default function Home() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/files");
        if (res.ok) {
          let data = await res.json();
          // Sort files by chapter number
          data = data.sort((a, b) => {
            const extractChapterNumber = (fileName) => {
              const match = fileName.match(/chapter (\d+)/);
              return match ? parseInt(match[1], 10) : 0;
            };
            const numA = extractChapterNumber(a);
            const numB = extractChapterNumber(b);
            return numA - numB;
          });
          setPdfFiles(data);
        } else {
          console.error("Failed to fetch pdf files");
        }
      } catch (error) {
        console.error("Error fetching pdf files:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPdfFiles();
  }, []);

  // Helper function to format file name
  const formatFileName = (fileName) => {
    const baseName = fileName.replace(".pdf", "");
    if (!baseName) {
      return ""; // Handle empty filenames
    }
    const capitalizedName =
      baseName.charAt(0).toUpperCase() + baseName.slice(1);
    if (capitalizedName.length > 15) {
      return capitalizedName.substring(0, 15) + "...";
    }
    return capitalizedName;
  };
  return (
    <Layout>
      <Head>
        <title>Korean Book Chat</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-8 text-slate-100 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-10 shadow-2xl shadow-cyan-950/20 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Korean Book Chat</p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Learn Korean with confidence.</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">Choose a chapter to explore vocabulary, practice conversations, and ask questions about your study materials.</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2">{pdfFiles.length || 60} chapters</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2">Interactive practice</span>
              </div>
            </div>
          </section>

          <div className="mb-6 mt-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cyan-300">Your curriculum</p>
              <h2 className="mt-1 text-2xl font-bold text-white">Choose a chapter</h2>
            </div>
            <span className="hidden text-sm text-slate-400 sm:block">Start anywhere, learn at your pace</span>
          </div>

          {loading ? (
            <div className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50">
              <ClipLoader color="#67e8f9" loading={loading} size={42} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pdfFiles.map((file, index) => (
                <Link
                  key={file}
                  href={`/pdf/${file.replace(".pdf", "")}`}
                  className="group flex min-h-28 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-950/30 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg font-bold text-cyan-300 transition-colors group-hover:bg-cyan-400 group-hover:text-slate-950">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">Chapter {index + 1}</span>
                    <span className="mt-1 block truncate text-base font-semibold text-slate-100">{formatFileName(file)}</span>
                  </span>
                  <span aria-hidden="true" className="ml-auto text-xl text-slate-600 transition-colors group-hover:text-cyan-300">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
