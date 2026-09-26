// pages/add-prompt.js
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const AddPromptPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !prompt) {
      setError("Please fill all fields");
      return;
    }

    const storedPrompts = localStorage.getItem("savedPrompts");
    const existingPrompts = storedPrompts ? JSON.parse(storedPrompts) : [];

    const newPrompt = { title, prompt, dateCreated: new Date().toISOString() };
    const updatedPrompts = [...existingPrompts, newPrompt];

    localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));

    toast.success("New Prompt Created!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    router.push("/saved-prompts");
  };

  return (
    <Layout>
      <Head>
        <title>Add New Prompt</title>
      </Head>
      <Navbar />
      <div className="p-4 bg-gray-900 text-gray-100 min-h-screen">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">
              Prompt:
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Prompt
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddPromptPage;
