import fs from "fs";
import path from "path";

export type RAGDoc = {
  filename: string;
  content: string;
};

export function getAllDocs(): RAGDoc[] {
  try {
    const dirPath = path.join(process.cwd(), "rag-data");

    if (!fs.existsSync(dirPath)) {
      console.warn("⚠️ rag-data folder not found:", dirPath);
      return [];
    }

    const files = fs.readdirSync(dirPath);

    if (files.length === 0) {
      console.warn("⚠️ rag-data folder is empty");
      return [];
    }

    return files
      .map((file) => {
        const filePath = path.join(dirPath, file);

        if (!fs.statSync(filePath).isFile()) return null;

        const content = fs.readFileSync(filePath, "utf-8");
        return { filename: file, content };
      })
      .filter(Boolean) as RAGDoc[];
  } catch (error) {
    console.error("🔥 RAG embed error:", error);
    return [];
  }
}
