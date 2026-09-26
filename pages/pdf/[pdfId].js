import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ChatInput from "../../components/ChatInput";
import ChatMessage from "../../components/ChatMessage";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { defaultPrompts } from "@/prompts";

const PdfChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { pdfId } = router.query;
  const [apiKey, setApiKey] = useState("");
  const [localApiKey, setLocalApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const chatContainerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [language, setLanguage] = useState("english");
  const [tempLanguage, setTempLanguage] = useState("english");
  const [selectedModel, setSelectedModel] = useState("gemini-2.0-flash-exp");
  const [tempModel, setTempModel] = useState("gemini-2.0-flash-exp");
  const modelOptions = [
    "gemini-2.0-flash-exp",
    "gemini-1.5-pro",
    "gemini-exp-1206",
    "gemini-2.0-flash-thinking-exp-1219",
    "learnlm-1.5-pro-experimental",
  ];

  const [suggestionPrompts, setSuggestionPrompts] = useState([]);
  const [showInitialSuggestions, setShowInitialSuggestions] = useState(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("chatLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      setTempLanguage(storedLanguage);
    } else {
      localStorage.setItem("chatLanguage", "english");
    }
    const storedModel = localStorage.getItem("selectedModel");
    if (storedModel) {
      setSelectedModel(storedModel);
      setTempModel(storedModel);
    } else {
      localStorage.setItem("selectedModel", "gemini-2.0-flash-exp");
    }
  }, []);

  useEffect(() => {
    const storedPrompts = localStorage.getItem("savedPrompts");
    let savedPrompts = storedPrompts ? JSON.parse(storedPrompts) : [];

    if (savedPrompts && savedPrompts.length > 0) {
      setSuggestionPrompts(savedPrompts);
    } else {
      setSuggestionPrompts(defaultPrompts);
    }
  }, []);

  const formattedPdfId = pdfId
    ? pdfId
        .split(" ")
        .map((word, index) =>
          index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
        )
        .join(" ")
    : "";

  const truncatedPdfId =
    windowWidth < 640
      ? formattedPdfId.length > 10
        ? formattedPdfId.slice(0, 10) + "..."
        : formattedPdfId
      : formattedPdfId;

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedApiKey = localStorage.getItem("geminiApiKey");
    if (storedApiKey) {
      setLocalApiKey(storedApiKey);
      setApiKey(storedApiKey);
    }
  }, []);

  const handleLanguageChange = (e) => {
    setTempLanguage(e.target.value);
  };

  const handleModelChange = (e) => {
    setTempModel(e.target.value);
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleSaveApiKey = () => {
    localStorage.setItem("geminiApiKey", apiKey);
    setLocalApiKey(apiKey);
    setShowApiKeyInput(false);
    setLanguage(tempLanguage);
    setSelectedModel(tempModel);
    localStorage.setItem("selectedModel", tempModel);
    localStorage.setItem("chatLanguage", tempLanguage);
  };

  const handlePromptClick = (prompt) => {
    handleSendMessage(prompt);
    setShowInitialSuggestions(false);
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) {
      console.warn("Empty message not sent to the server");
      return;
    }

    setShowInitialSuggestions(false);
    const newMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    const formattedHistory = [...messages, newMessage].map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));
    let apiMessage = message;

    if (language && language.toLowerCase() !== "english") {
      apiMessage = `give your response in ${language} .  ${message} and also try to give response in super short version`;
    } else {
      apiMessage = `${message}. try to give response in super short version.  `;
    }

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: apiMessage,
          pdfId,
          history: formattedHistory,
          apiKey: apiKey || null,
          selectedModel,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          { text: data.response, sender: "bot" },
        ]);
      } else {
        console.error("Failed to get a response from gemini api");
        setMessages((prev) => [
          ...prev,
          { text: "Failed to get a response from gemini api", sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Error sending message: ", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error sending message: ", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const apiKeyButtonText = localApiKey || apiKey ? "Setting" : "Set API Key";

  return (
    <Layout>
      <Head>
        <title>{pdfId}</title>
      </Head>
      <div className="flex flex-col w-full">
        <nav className="sticky top-0 z-10 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-200 mr-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] hover:text-blue-600 hover:scale-105 transition-all"
              title={formattedPdfId}
            >
              {truncatedPdfId}
            </Link>
            <Link
              href="/saved-prompts"
              className="text-white text-xl font-bold hover:text-blue-600 mr-4"
            >
              Prompts
            </Link>
            <a
              target="_blank"
              href={`/pdfs/${pdfId}.pdf`}
              className="text-white text-xl font-bold hover:text-blue-600"
            >
              Pdf
            </a>
          </div>
          <button
            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {showApiKeyInput ? "Cancel" : apiKeyButtonText}
          </button>
        </nav>

        {showApiKeyInput && (
          <div className="p-6 rounded-lg shadow-md bg-gray-700 m-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Gemini API Key"
                value={apiKey}
                onChange={handleApiKeyChange}
                className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-900 focus:ring focus:ring-blue-200 focus:outline-none bg-gray-100"
              />

              <select
                value={tempModel}
                onChange={handleModelChange}
                className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-900 focus:ring focus:ring-blue-200 focus:outline-none bg-gray-100"
              >
                {modelOptions.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>

              <select
                value={tempLanguage}
                onChange={handleLanguageChange}
                className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-900 focus:ring focus:ring-blue-200 focus:outline-none bg-gray-100"
              >
                <option value="english">English</option>
                <option value="nepali">Nepali</option>
              </select>

              <button
                onClick={handleSaveApiKey}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Save
              </button>
            </div>
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium self-start transition duration-200 mt-2"
            >
              Get API Key
            </a>
          </div>
        )}

        {showInitialSuggestions && messages.length <= 0 && (
          <div className="p-4 space-y-4">
            <h3 className="text-xl font-bold text-gray-300">
              Suggestions for
              <span className="text-blue-300 ml-2">
                {pdfId && pdfId.charAt(0).toUpperCase() + pdfId.slice(1)}
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {suggestionPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(prompt.prompt)}
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg shadow-md text-white text-left"
                >
                  Explain {prompt.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          className="flex-1 overflow-y-auto p-4 pb-[70px] flex flex-col"
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} sender={msg.sender} />
          ))}
          {loading && <ChatMessage message="Thinking..." sender="bot" />}
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-20 h-[70px]">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </Layout>
  );
};

export default PdfChatPage;
