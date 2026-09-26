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
      <div className="p-4 bg-gray-900 text-gray-100 min-h-screen">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader color="#ffffff" loading={loading} size={50} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pdfFiles.map((file) => (
              <Link
                key={file}
                href={`/pdf/${file.replace(".pdf", "")}`}
                className="block p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center"
              >
                <span className="text-lg font-semibold">
                  {formatFileName(file)}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
