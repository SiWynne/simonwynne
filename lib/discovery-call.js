import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DISCOVERY_FILE = path.join(
  process.cwd(),
  "content/discovery-call/index.mdx",
);

export function getDiscoveryCall() {
  const raw = fs.readFileSync(DISCOVERY_FILE, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title,
    intro: data.intro,
    backLabel: data.backLabel || null,
    backHref: data.backHref || null,
    formHeading: data.formHeading || "Confirm your slot",
    submitLabel: data.submitLabel || "Book this slot",
    successHeading: data.successHeading || "You're booked",
    successMessage: data.successMessage || "",
    slotMinutes: data.slotMinutes || 20,
    sessions: data.sessions || [],
    // Dates come out of gray-matter as Date objects when unquoted; normalise
    // everything to the "YYYY-MM-DD HH:MM" strings the calendar compares.
    booked: (data.booked || []).map((entry) =>
      entry instanceof Date ? entry.toISOString().slice(0, 16).replace("T", " ") : String(entry),
    ),
    formEndpoint: data.formEndpoint || "",
    fallbackEmail: data.fallbackEmail || "",
  };
}
