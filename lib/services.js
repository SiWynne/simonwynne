import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SERVICES_FILE = path.join(process.cwd(), "content/services/index.mdx");

// The services page structure is still open; for now this exposes the header
// copy. Extend the return shape as fields are added to content/services.
export function getServices() {
  const raw = fs.readFileSync(SERVICES_FILE, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title || "Services",
    intro: data.intro || "",
  };
}
