"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

// A stripped-back version of Navbar1 for tertiary pages: just the logo and a
// single "Get in Touch" call to action. No primary nav links, no article
// button, and no mobile hamburger (there is nothing left to collapse).
export function NavbarMinimal() {
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
        <Button asChild title="Get in Touch" size="sm">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
