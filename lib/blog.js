import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const WORDS_PER_MINUTE = 200;

function readingTimeFor(content) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

// A post's `category` frontmatter may list several, comma-separated
// ("Ai Opportunities, Transformation"). Split it so each renders as its own
// badge and can drive the category filter independently.
function splitCategories(value) {
  return String(value ?? "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
}

function toPostMeta(slug, data, content) {
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    categories: splitCategories(data.category),
    date: data.date,
    image: data.image || null,
    draft: Boolean(data.draft),
    readTime: readingTimeFor(content),
  };
}

export function getAllPosts({ includeDrafts = false } = {}) {
  const filenames = fs.readdirSync(BLOG_DIR).filter((name) => name.endsWith(".mdx"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return toPostMeta(slug, data, content);
  });

  return posts
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllCategories() {
  const categories = getAllPosts().flatMap((post) => post.categories);
  return Array.from(new Set(categories)).sort();
}

export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...toPostMeta(slug, data, content), content };
}

// Resolve an ordered list of slugs to post metadata, skipping any that no
// longer exist so a stale slug in the config can't break the build.
export function getPostsBySlugs(slugs = []) {
  return slugs
    .map((slug) => {
      try {
        return getPostBySlug(slug);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}
