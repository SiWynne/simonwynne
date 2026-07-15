import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content/work");

function toCaseStudyMeta(slug, data) {
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    date: data.date,
    image: data.image || null,
    order: data.order,
    draft: Boolean(data.draft),
  };
}

export function getAllCaseStudies({ includeDrafts = false } = {}) {
  const filenames = fs.readdirSync(WORK_DIR).filter((name) => name.endsWith(".mdx"));

  const caseStudies = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(WORK_DIR, filename), "utf8");
    const { data } = matter(raw);
    return toCaseStudyMeta(slug, data);
  });

  return caseStudies
    .filter((study) => includeDrafts || !study.draft)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug) {
  const filePath = path.join(WORK_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...toCaseStudyMeta(slug, data), content };
}
