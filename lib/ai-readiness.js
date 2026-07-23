import fs from "fs";
import path from "path";
import matter from "gray-matter";

const READINESS_FILE = path.join(process.cwd(), "content/ai-readiness/index.mdx");

export function getAiReadiness() {
  const raw = fs.readFileSync(READINESS_FILE, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title,
    intro: data.intro,
    backLabel: data.backLabel || null,
    backHref: data.backHref || null,
    readinessHeading: data.readinessHeading || "Where you're starting from",
    readinessBands: data.readinessBands || [],
    resultsHeading: data.resultsHeading || "Your best opportunities",
    resultsIntro: data.resultsIntro || "",
    opportunities: data.opportunities || [],
    questions: data.questions || [],
    formEndpoint: data.formEndpoint || "",
    fallbackEmail: data.fallbackEmail || "",
  };
}
