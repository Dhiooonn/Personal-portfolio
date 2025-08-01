import { GoogleGenerativeAI } from "@google/generative-ai";
import { searchDocs } from "./search";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function getGeminiReply(query: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  // Ambil dokumen relevan dari RAG
  const context = searchDocs(query);

  const prompt = `Gunakan informasi berikut untuk menjawab:\n\n${context}\n\nPertanyaan: ${query}`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}
