import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content/work");

// A case study's `category` frontmatter may list several, comma-separated;
// split it so each renders as its own badge.
function splitCategories(value) {
  return String(value ?? "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
}

function toCaseStudyMeta(slug, data) {
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    categories: splitCategories(data.category),
    date: data.date,
    image: data.image || null,
    order: data.order,
    draft: Boolean(data.draft),
  };
}

export function getAllCaseStudies({ includeDrafts = false } = {}) {
  // Guard against a stray index.mdx; content/work holds only case studies now.
  const filenames = fs
    .readdirSync(WORK_DIR)
    .filter((name) => name.endsWith(".mdx") && name !== "index.mdx");

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

// Resolve an ordered list of slugs to case-study metadata, skipping any that no
// longer exist so a stale slug in the config can't break the build.
export function getCaseStudiesBySlugs(slugs = []) {
  return slugs
    .map((slug) => {
      try {
        return getCaseStudyBySlug(slug);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}
