import fs from "fs";
import path from "path";

export function getAllDocs(): {
  filename: string;
  content: string;
}[] {
  const dirPath = path.join(process.cwd(), "rag-data");
  const files = fs.readdirSync(dirPath);

  return files.map((file) => {
    const content = fs.readFileSync(path.join(dirPath, file), "utf-8");
    return { filename: file, content };
  });
}
