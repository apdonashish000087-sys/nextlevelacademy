import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const pdfDirectory = path.join(process.cwd(), "public", "pdfs");
      const files = fs
        .readdirSync(pdfDirectory)
        .filter((file) => file.endsWith(".pdf"));
      res.status(200).json(files);
    } catch (error) {
      console.error("Error reading directory:", error);
      res.status(500).json({ error: "Failed to read directory." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
