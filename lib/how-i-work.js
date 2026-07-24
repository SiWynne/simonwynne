import fs from "fs";
import path from "path";
import matter from "gray-matter";

const HOW_I_WORK_FILE = path.join(
  process.cwd(),
  "content/how-i-work/index.mdx",
);

// The how-i-work page is one page of several sections; each is a keyed block in
// the frontmatter. Sections default to {} so a missing block renders empty
// rather than throwing.
export function getHowIWork() {
  const raw = fs.readFileSync(HOW_I_WORK_FILE, "utf8");
  const { data } = matter(raw);
  return {
    header: data.header || {},
    approach: data.approach || {},
    transparency: data.transparency || {},
    testimonial: data.testimonial || {},
    cta: data.cta || {},
  };
}
