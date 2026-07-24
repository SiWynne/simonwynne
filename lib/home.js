import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Home-page section content. Each home component with editable copy has its own
// file under content/home/, read here through one getter apiece.
function readHome(name) {
  const file = path.join(process.cwd(), "content/home", `${name}.mdx`);
  return matter(fs.readFileSync(file, "utf8")).data;
}

export function getHero() {
  const data = readHome("hero");
  return {
    heading: data.heading || "",
    subtitle: data.subtitle || "",
    buttons: data.buttons || [],
  };
}

export function getEvents() {
  const data = readHome("events");
  return {
    heading: data.heading || "",
    subtitle: data.subtitle || "",
    buttonLabel: data.buttonLabel || "",
    buttonHref: data.buttonHref || "#",
    cards: data.cards || [],
  };
}

export function getToolkitsAndPlaybooks() {
  const data = readHome("toolkits-and-playbooks");
  return {
    heading: data.heading || "",
    subtitle: data.subtitle || "",
    buttonLabel: data.buttonLabel || "",
    buttonHref: data.buttonHref || "#",
    cards: data.cards || [],
  };
}

export function getVideos() {
  const data = readHome("videos");
  return {
    heading: data.heading || "",
    subtitle: data.subtitle || "",
    buttonLabel: data.buttonLabel || "",
    buttonHref: data.buttonHref || "#",
    watchLabel: data.watchLabel || "Watch",
    cards: data.cards || [],
  };
}

export function getLogoCarousel() {
  const data = readHome("logo-carousel");
  return {
    heading: data.heading || "",
    logos: data.logos || [],
  };
}

export function getBlog() {
  const data = readHome("blog");
  return {
    heading: data.heading || "",
    subtitle: data.subtitle || "",
    buttonLabel: data.buttonLabel || "",
    buttonHref: data.buttonHref || "/blog",
    // Slugs of the posts to feature; resolved to real posts by the page.
    featured: data.featured || [],
  };
}
