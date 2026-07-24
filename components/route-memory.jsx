"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Records where the visitor has been, so a page can offer "back to the page you
// came from" rather than a fixed parent link. Kept in sessionStorage: it is
// per-tab, dies with the tab, and survives a hard page load — which matters
// because a static export mixes client navigation with real document loads.
//
// Nothing here identifies anyone. It is the visitor's own path through the
// site, readable only by this tab.

const KEY = "sw:trail";
const LIMIT = 10;
const SITE_TITLE = "SimonWynne";
const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "the",
  "to",
  "of",
  "for",
  "in",
  "on",
  "with",
]);

/** "/meet-the-team" → "Meet the Team". */
function labelFromPath(pathname) {
  const segment = (pathname || "")
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .pop();
  if (!segment) return "Home";
  return segment
    .split("-")
    .map((word, index) =>
      index > 0 && SMALL_WORDS.has(word)
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

/**
 * "Book a Discovery Call — SimonWynne" → "Book a Discovery Call".
 *
 * Several pages set no metadata of their own and so inherit the bare site
 * title. Labelling all of them "Home" would be worse than useless in a back
 * link, so those fall back to their path.
 */
function labelFor(pathname, title) {
  if (!title || title === SITE_TITLE) return labelFromPath(pathname);
  const stripped = title.replace(/\s+[—-]\s+SimonWynne\s*$/, "").trim();
  return stripped || labelFromPath(pathname);
}

export function readTrail() {
  try {
    const raw = sessionStorage.getItem(KEY);
    const trail = raw ? JSON.parse(raw) : [];
    return Array.isArray(trail) ? trail : [];
  } catch {
    return [];
  }
}

export function RouteMemory() {
  const pathname = usePathname();

  useEffect(() => {
    // The document title is set from route metadata during commit, so read it
    // a tick later — otherwise we capture the previous page's title.
    //
    // A timer rather than requestAnimationFrame: rAF never fires in a hidden
    // tab, so a page opened in a background tab would never be recorded at all.
    const timer = setTimeout(() => {
      const trail = readTrail();
      const last = trail[trail.length - 1];
      if (last?.href === pathname) return;

      trail.push({ href: pathname, label: labelFor(pathname, document.title) });
      try {
        sessionStorage.setItem(KEY, JSON.stringify(trail.slice(-LIMIT)));
      } catch {
        // Private mode, or storage full. A missing trail just means the back
        // link falls back to its default, which is fine.
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
