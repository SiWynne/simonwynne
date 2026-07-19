import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SERVICE_AREAS_FILE = path.join(
  process.cwd(),
  "content/service-areas/index.mdx",
);

export function getServiceAreas() {
  const raw = fs.readFileSync(SERVICE_AREAS_FILE, "utf8");
  const { data, content } = matter(raw);
  return {
    title: data.title,
    backLabel: data.backLabel,
    backHref: data.backHref,
    intro: data.intro,
    regions: data.regions || [],
    cta: data.cta || null,
    content,
  };
}
