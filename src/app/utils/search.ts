import { getAllDocs } from "./embed";

export function searchDocs(query: string): string {
  const docs = getAllDocs();
  const results = docs
    .map((doc) => ({
      ...doc,
      score: getSimilarityScore(query.toLowerCase(), doc.content.toLowerCase()),
    }))
    .sort((a, b) => b.score - a.score);

  const topResults = results.slice(0, 3);
  const combinedText = topResults.map((r) => r.content).join("\n\n");
  
  return combinedText;
}

function getSimilarityScore(a: string, b: string): number {
  const aWords = a.split(/\W+/);
  const bWords = b.split(/\W+/);
  const common = aWords.filter((word) => bWords.includes(word));
  return common.length;
}
