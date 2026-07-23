import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTACT_FILE = path.join(process.cwd(), "content/contact/index.mdx");

export function getContact() {
  const raw = fs.readFileSync(CONTACT_FILE, "utf8");
  const { data } = matter(raw);
  return {
    title: data.title,
    intro: data.intro,
    backLabel: data.backLabel || null,
    backHref: data.backHref || null,
    formHeading: data.formHeading || "Send me a message",
    formEndpoint: data.formEndpoint || "",
    enquiryTypes: data.enquiryTypes || [],
    methods: data.methods || [],
  };
}
