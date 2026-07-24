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
    // Availability lives in Cal.com; these identify which calendar to read.
    calUsername: data.calUsername || "",
    calEventSlug: data.calEventSlug || "",
    // Which of Cal's slots the page actually offers. Cal's own schedule can be
    // wider; this narrows it to set windows in a set timezone, weekdays only.
    availability: {
      timeZone: data.availability?.timeZone || "Europe/London",
      weekdaysOnly: data.availability?.weekdaysOnly !== false,
      windows: (data.availability?.windows || []).map((w) => ({
        start: String(w.start),
        end: String(w.end),
      })),
    },
    fallbackEmail: data.fallbackEmail || "",
  };
}
