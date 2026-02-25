import { GoogleGenerativeAI } from "@google/generative-ai";
import { searchDocs } from "./search";

export async function getGeminiReply(query: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing");

  const genAI = new GoogleGenerativeAI(apiKey);

  // ✅ MODEL PALING STABIL SAAT INI
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });

  const context = searchDocs(query);

  const prompt = `
Kamu adalah customer service website portfolio.

KONTEKS:
${context || "Tidak ada konteks tambahan."}

PERTANYAAN:
${query}

Jawab dengan ramah dan singkat.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
