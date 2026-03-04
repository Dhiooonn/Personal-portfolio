export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";


// LOAD RAG DATA FROM rag-data/

type RagEntry = {
  topic: string;
  keywords: string[];
  content: string;
};

function loadRagData(): RagEntry[] {
  const ragDir = path.join(process.cwd(), "rag-data");
  const files = fs.readdirSync(ragDir).filter((f) => f.endsWith(".txt"));

  return files.map((file) => {
    const topic = file.replace(".txt", "");
    const content = fs.readFileSync(path.join(ragDir, file), "utf-8").trim();

    // Keywords otomatis dari nama file + kata-kata penting di konten (baris pertama tiap paragraf)
    const keywordsFromFile: Record<string, string[]> = {
      about: [
        "tentang",
        "siapa",
        "profil",
        "diri",
        "dhion",
        "perkenalan",
        "bio",
        "latar belakang",
        "cerita",
        "background",
      ],
      skills: [
        "skill",
        "kemampuan",
        "bisa",
        "teknologi",
        "tools",
        "stack",
        "keahlian",
        "bahasa pemrograman",
        "framework",
      ],
      services: [
        "layanan",
        "jasa",
        "service",
        "offering",
        "apa yang",
        "bikin",
        "buat",
        "kerjakan",
        "dikerjakan",
      ],
      harga: [
        "harga",
        "biaya",
        "tarif",
        "rate",
        "bayar",
        "cost",
        "berapa",
        "budget",
        "harga jasa",
        "fee",
      ],
      projects: [
        "proyek",
        "project",
        "portfolio",
        "karya",
        "hasil",
        "kerja",
        "aplikasi",
        "website",
        "desain",
      ],
      contact: [
        "kontak",
        "contact",
        "hubungi",
        "email",
        "linkedin",
        "github",
        "sosial",
        "reach",
        "dm",
        "pesan",
        "wa",
        "whatsapp",
      ],
    };

    const keywords = keywordsFromFile[topic] ?? [topic];
    return { topic, keywords, content };
  });
}

/* ==============================
 * CARI KONTEN PALING RELEVAN
 * ============================== */
function findBestMatch(
  userMessage: string,
  ragData: RagEntry[],
): RagEntry | null {
  const lowerMsg = userMessage.toLowerCase();

  // Hitung skor tiap entry berdasarkan jumlah keyword yang cocok
  let bestEntry: RagEntry | null = null;
  let bestScore = 0;

  for (const entry of ragData) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lowerMsg.includes(kw)) {
        score += kw.length; // keyword lebih panjang = lebih spesifik = skor lebih tinggi
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  // Hanya return jika ada minimal 1 keyword yang cocok
  return bestScore > 0 ? bestEntry : null;
}

/* ==============================
 * FORMAT JAWABAN BOT
 * ============================== */
function formatReply(entry: RagEntry, userMessage: string): string {
  const lowerMsg = userMessage.toLowerCase();

  // Sapaan
  const greetings = ["halo", "hai", "hi", "hey", "hei", "selamat"];
  if (greetings.some((g) => lowerMsg.includes(g)) && entry.topic === "about") {
    return `Halo! Selamat datang di portfolio Dhion 🦋 Ada yang bisa Butterfly bantu?\n\n${entry.content}`;
  }

  const labels: Record<string, string> = {
    about: "Tentang Dhion",
    skills: "Skills & Teknologi",
    services: "Layanan yang Tersedia",
    harga: "Informasi Harga",
    projects: "Proyek Portfolio",
    contact: "Info Kontak",
  };

  const label = labels[entry.topic] ?? entry.topic;
  return `🦋 **${label}**\n\n${entry.content}`;
}

  // POST /api/chat
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage: string = body.message?.trim() ?? "";

    if (!userMessage) {
      return NextResponse.json(
        { reply: "Pesan tidak boleh kosong." },
        { status: 400 },
      );
    }

    const lowerMsg = userMessage.toLowerCase();

    // Cek sapaan sederhana
    const simpleGreetings = [
      "halo",
      "hai",
      "hi",
      "hey",
      "hei",
      "hello",
      "p",
      "pp",
    ];
    if (simpleGreetings.some((g) => lowerMsg === g || lowerMsg.trim() === g)) {
      return NextResponse.json({
        reply:
          "Halo! Saya Butterfly, asisten virtual Dhion 🦋\n\nKamu bisa tanya tentang:\n• Profil & tentang Dhion\n• Skills & teknologi\n• Layanan & jasa\n• Harga\n• Proyek portfolio\n• Cara menghubungi Dhion",
      });
    }

    const ragData = loadRagData();
    const match = findBestMatch(userMessage, ragData);

    if (match) {
      return NextResponse.json({ reply: formatReply(match, userMessage) });
    }

    // Tidak ada yang cocok
    return NextResponse.json({
      reply:
        "Maaf 🦋, Butterfly belum bisa menjawab itu. Kamu bisa tanya tentang **profil, skills, layanan, harga, proyek, atau kontak** Dhion ya!",
    });
  } catch (err) {
    console.error("🔥 CHAT ERROR:", err);
    return NextResponse.json(
      { reply: "Maaf, Butterfly sedang mengalami gangguan. Coba lagi ya 🦋" },
      { status: 500 },
    );
  }
}
