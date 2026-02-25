export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("NO API KEY");

    const genAI = new GoogleGenerativeAI(apiKey);

    // PALING AMAN UNTUK AKUN BARU
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

    const result = await model.generateContent("Halo");
    return NextResponse.json({ reply: result.response.text() });
  } catch (err) {
    console.error("🔥 GEMINI MINIMAL ERROR:");
    console.error(err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
