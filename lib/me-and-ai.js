import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ME_AND_AI_FILE = path.join(
  process.cwd(),
  "content/meet-the-team/me-and-ai.mdx",
);

export function getMeAndAi() {
  const raw = fs.readFileSync(ME_AND_AI_FILE, "utf8");
  const { data } = matter(raw);
  return {
    heading: data.heading,
    summary: data.summary,
    items: data.items || [],
  };
}
