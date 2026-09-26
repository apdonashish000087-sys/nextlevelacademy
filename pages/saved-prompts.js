// pages/saved-prompts.js
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import { defaultPrompts } from "@/prompts";

const SavedPromptsPage = () => {
  const router = useRouter();
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const storedPrompts = localStorage.getItem("savedPrompts");
    let savedPrompts = storedPrompts ? JSON.parse(storedPrompts) : [];

    //If localstorage does not have anything then load it with default prompt
    if (savedPrompts && savedPrompts.length <= 0) {
      localStorage.setItem("savedPrompts", JSON.stringify(defaultPrompts));
      savedPrompts = defaultPrompts;
    }

    // Combine saved prompts and set a default dateCreated for new prompts
    const savedPromptsWithDate = savedPrompts.map((savedPrompt) => ({
      ...savedPrompt,
      dateCreated: savedPrompt.dateCreated
        ? new Date(savedPrompt.dateCreated)
        : null,
    }));

    // Sort saved prompts by date created, most recent first
    savedPromptsWithDate.sort((a, b) => {
      if (a.dateCreated && b.dateCreated) {
        return b.dateCreated - a.dateCreated;
      } else if (a.dateCreated) {
        return -1;
      } else {
        return 1;
      }
    });

    //Filter default prompt if already there in saved prompt
    const filteredDefaultPrompts = defaultPrompts.filter(
      (defaultPrompt) =>
        !savedPrompts.some(
          (savedPrompt) => savedPrompt.title === defaultPrompt.title
        )
    );

    // Combine saved and default prompts and update it in state
    const combinedPrompts = [
      ...savedPromptsWithDate,
      ...filteredDefaultPrompts,
    ];
    setPrompts(combinedPrompts);
  }, []);

  const handleCopyToClipboard = async (prompt) => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast.success("Prompt copied to clipboard!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      console.error("Failed to copy prompt: ", err);
      toast.error("Failed to copy prompt!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleDeletePrompt = (promptToDelete) => {
    const storedPrompts = localStorage.getItem("savedPrompts");
    let savedPrompts = storedPrompts ? JSON.parse(storedPrompts) : [];

    const updatedPrompts = savedPrompts.filter(
      (prompt) => prompt.title !== promptToDelete.title
    );
    localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));
    setPrompts((prevPrompts) => {
      return prevPrompts.filter(
        (prompt) => prompt.title !== promptToDelete.title
      );
    });
    toast.success("Prompt deleted!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Layout>
      <Head>
        <title>Saved Prompts</title>
      </Head>
      <Navbar />
      <ToastContainer />
      <div className="p-4 bg-gray-900 text-gray-100 min-h-screen">
        {prompts && prompts.length > 0 ? (
          <ul className="space-y-4">
            {prompts.map((prompt, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-white">
                  {prompt.title}
                </span>
                <div className="flex gap-4">
                  {prompt.dateCreated instanceof Date && (
                    <button
                      onClick={() => handleDeletePrompt(prompt)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  )}

                  <button
                    onClick={() => handleCopyToClipboard(prompt.prompt)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Copy
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-white">No saved prompts yet.</p>
        )}
      </div>
    </Layout>
  );
};

export default SavedPromptsPage;
