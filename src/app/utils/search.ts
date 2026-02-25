import { getAllDocs } from "./embed";

export function searchDocs(query: string): string {
  const docs = getAllDocs();

  if (docs.length === 0) {
    return "Tidak ada data RAG tersedia.";
  }

  const q = query.toLowerCase();

  const results = docs
    .map((doc) => ({
      ...doc,
      score: similarityScore(q, doc.content.toLowerCase()),
    }))
    .sort((a, b) => b.score - a.score);

  return results
    .slice(0, 3)
    .map((r) => r.content)
    .join("\n\n");
}

function similarityScore(a: string, b: string): number {
  const aWords = a.split(/\W+/);
  const bWords = b.split(/\W+/);

  return aWords.filter((w) => bWords.includes(w)).length;
}
