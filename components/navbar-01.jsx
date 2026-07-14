"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  return {
    toggleMobileMenu,
    closeMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

export function Navbar1() {
  const useActive = useRelume();
  return (
    <section className="z-[999] flex w-full items-center bg-scheme-background lg:min-h-18 lg:px-[5%] scheme-1 btn-light badge-alt">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/">
            <img
              src="/logo/simonwynne-logo-black.svg"
              alt="SimonWynne logo"
              className="h-12 w-auto"
            />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-scheme-text"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-scheme-text"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-scheme-text"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, auto)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:overflow-visible lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <Link
            href="/"
            onClick={useActive.closeMobileMenu}
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Home
          </Link>
          <Link
            href="/meet-the-team"
            onClick={useActive.closeMobileMenu}
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Meet the Team
          </Link>
          <Link
            href="/how-i-work"
            onClick={useActive.closeMobileMenu}
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            How I Work
          </Link>
          <Link
            href="/services"
            onClick={useActive.closeMobileMenu}
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Services
          </Link>
          <Link
            href="/blog"
            onClick={useActive.closeMobileMenu}
            className="block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Blog
          </Link>
          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
            <Button
              asChild
              title="View all articles"
              variant="secondary"
              size="sm"
              className="w-full"
            >
              <Link href="/blog" onClick={useActive.closeMobileMenu}>
                View all articles
              </Link>
            </Button>
            <Button
              title="Sign up"
              size="sm"
              className="w-full"
              onClick={useActive.closeMobileMenu}
            >
              Sign up
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
