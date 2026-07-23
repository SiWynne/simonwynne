"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

// A stripped-back version of Navbar1 for tertiary pages: just the logo and a
// single call to action. No primary nav links, no article button, and no
// mobile hamburger (there is nothing left to collapse).
//
// The CTA never points at the page you are already on: from the booking page it
// offers the slower route instead.
const DEFAULT_CTA = {
  label: "Free Discovery Call",
  href: "/book-a-discovery-call",
};

const CTA_BY_PATH = {
  "/book-a-discovery-call": { label: "Get in Touch", href: "/contact" },
};

export function NavbarMinimal() {
  const pathname = usePathname();
  // The static export serves /contact/ as well as /contact.
  const cta = CTA_BY_PATH[pathname?.replace(/\/+$/, "") || "/"] || DEFAULT_CTA;

  return (
    <section className="z-[999] flex w-full items-center bg-scheme-background lg:min-h-18 lg:px-[5%] scheme-1 btn-light badge-alt">
      <div className="flex min-h-16 w-full items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
        <Link href="/">
          <img
            src="/logo/simonwynne-logo-black.svg"
            alt="SimonWynne logo"
            className="h-12 w-auto"
          />
        </Link>
        <Button asChild title={cta.label} size="sm">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </section>
  );
}
