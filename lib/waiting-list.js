import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WAITING_LIST_DIR = path.join(process.cwd(), "content/waiting-list");

function toWaitingList(slug, data) {
  return {
    slug,
    title: data.title,
    intro: data.intro,
    backLabel: data.backLabel || null,
    backHref: data.backHref || null,
    formHeading: data.formHeading || "Join the list",
    submitLabel: data.submitLabel || "Join the waiting list",
    successMessage: data.successMessage || "You're on the list.",
    // No server exists (output: "export"), so submissions need a third-party
    // endpoint. Empty falls back to opening a pre-filled email.
    formEndpoint: data.formEndpoint || "",
    fallbackEmail: data.fallbackEmail || "",
    fields: data.fields || [],
  };
}

export function getAllWaitingLists() {
  return fs
    .readdirSync(WAITING_LIST_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(WAITING_LIST_DIR, filename), "utf8");
      return toWaitingList(slug, matter(raw).data);
    });
}

export function getWaitingListBySlug(slug) {
  const raw = fs.readFileSync(path.join(WAITING_LIST_DIR, `${slug}.mdx`), "utf8");
  return toWaitingList(slug, matter(raw).data);
}
