"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { readTrail } from "@/components/route-memory";

/**
 * "← Back to <the page they came from>", falling back to whatever the page's
 * content file specifies when there is nowhere to go back to — a visitor who
 * landed here first, opened a new tab, or arrived from outside the site.
 *
 * Renders the fallback on the server and swaps after mount, so the static HTML
 * and the first client render agree.
 */
export function BackLink({ fallbackLabel, fallbackHref, className }) {
  const pathname = usePathname();
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    // Read the last entry that isn't this page. Order-independent: it does not
    // matter whether RouteMemory has recorded the current page yet.
    const earlier = readTrail()
      .filter((entry) => entry?.href && entry.href !== pathname)
      .pop();
    setPrevious(earlier || null);
  }, [pathname]);

  if (!fallbackLabel && !previous) return null;

  const href = previous?.href || fallbackHref;
  const label = previous ? `← Back to ${previous.label}` : fallbackLabel;

  if (!href) return null;

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
