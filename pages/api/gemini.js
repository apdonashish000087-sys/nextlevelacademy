const fs = require("fs");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } = require("@google/generative-ai/server");

async function uploadToGemini(filePath, mimeType, apiKey) {
  try {
    const fileManager = new GoogleAIFileManager(apiKey);
    const uploadResult = await fileManager.uploadFile(filePath, {
      mimeType,
      displayName: path.basename(filePath),
    });
    return uploadResult.file;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function processFile(req, res) {
  try {
    const { message, pdfId, history, apiKey, selectedModel } = req.body;

    if (!pdfId) {
      return res.status(400).json({ error: "No pdfId provided" });
    }

    const pdfFilePath = path.join(process.cwd(), "public/pdfs", `${pdfId}.pdf`);

    if (!fs.existsSync(pdfFilePath)) {
      return res.status(404).json({ error: "File not found." });
    }

    if (!apiKey) {
      return res.status(400).json({ error: "No API key provided" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: selectedModel,
    });

    const file = await uploadToGemini(pdfFilePath, "application/pdf", apiKey);

    if (!file || !file.mimeType || !file.uri) {
      console.error("Invalid file object returned from uploadToGemini:", file);
      return res.status(500).json({ error: "File upload failed." });
    }

    const initialHistory = [
      {
        role: "user",
        parts: [
          {
            fileData: {
              mimeType: file.mimeType,
              fileUri: file.uri,
            },
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "What do you want to know about this chapter?" }],
      },
      ...(history || []), //Use spread operator and add fallback for empty history
    ];

    const chatSession = model.startChat({
      generationConfig,
      history: initialHistory,
    });

    const result = await chatSession.sendMessage(message); // Use message directly
    return res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error("Failed to process file:", error);
    res.status(500).json({ error: "Failed to process file." });
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    return processFile(req, res);
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
