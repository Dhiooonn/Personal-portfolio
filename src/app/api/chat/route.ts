import { NextRequest, NextResponse } from "next/server";
import { getGeminiReply } from "../../utils/gemini";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const reply = await getGeminiReply(message);
    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.log("gemini error: ", err);

    const errorMessage =
      err instanceof Error
        ? err.message
        : String(err) || "Gagal mengambil respons dari Gemni";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
