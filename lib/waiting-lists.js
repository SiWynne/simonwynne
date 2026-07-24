import fs from "fs";
import path from "path";
import matter from "gray-matter";

// The waiting-list signup pages (events, toolkits & playbooks). Each is one
// forms/waiting-lists/<slug>.mdx whose frontmatter drives the header and the
// signup form. The slug is the public URL segment (/waiting-lists/<slug>).
// No server exists (output: "export"), so submissions need a third-party
// endpoint; an empty formEndpoint falls back to a pre-filled email.
const WAITING_LISTS_DIR = path.join(process.cwd(), "forms/waiting-lists");

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
    formEndpoint: data.formEndpoint || "",
    fallbackEmail: data.fallbackEmail || "",
    fields: data.fields || [],
  };
}

export function getAllWaitingLists() {
  return fs
    .readdirSync(WAITING_LISTS_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(
        path.join(WAITING_LISTS_DIR, filename),
        "utf8",
      );
      return toWaitingList(slug, matter(raw).data);
    });
}

export function getWaitingListBySlug(slug) {
  const raw = fs.readFileSync(
    path.join(WAITING_LISTS_DIR, `${slug}.mdx`),
    "utf8",
  );
  return toWaitingList(slug, matter(raw).data);
}
