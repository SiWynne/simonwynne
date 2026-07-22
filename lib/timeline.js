import fs from "fs";
import path from "path";
import matter from "gray-matter";

const TIMELINE_FILE = path.join(
  process.cwd(),
  "content/meet-the-team/timeline.mdx",
);

export function getTimeline() {
  const raw = fs.readFileSync(TIMELINE_FILE, "utf8");
  const { data } = matter(raw);
  return {
    heading: data.heading,
    description: data.description,
    buttons: data.buttons || [],
    items: data.items || [],
  };
}
