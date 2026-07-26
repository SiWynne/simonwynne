"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

const normalizePath = (path) => (path === "/" ? path : path.replace(/\/$/, ""));

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

const scrollToNewsletter = () => {
  const target = document.getElementById("newsletter");
  if (!target) return;
  // Instant, not smooth — a smooth animation targets a position that shifts
  // as below-the-fold content settles on first load, so it stops short.
  target.scrollIntoView();
  window.history.replaceState(null, "", "#newsletter");
};

export function Navbar1() {
  const useActive = useRelume();
  const pathname = usePathname();
  const isActivePath = (href) => normalizePath(pathname) === normalizePath(href);
  // On mobile the Subscribe CTA lives inside the collapsing menu. Scrolling
  // while the menu is still open (or mid-collapse) lands short: the shrinking
  // menu shifts the footer up after the scroll position is computed. Defer the
  // scroll until the close animation finishes via onAnimationComplete below.
  const scrollAfterCloseRef = useRef(false);
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
        {/* Collapse via a CSS grid-template-rows 0fr→1fr transition: no height
            measurement, so it can't land on a stale/partial height the way
            animating to `auto` does, and unlike motion it reliably runs to
            completion. On desktop lg:flex takes over and the grid rows are
            ignored. */}
        <div
          onTransitionEnd={(event) => {
            // Only react to THIS element's own row-collapse finishing. Child
            // controls (the CTA Button uses transition-all) bubble their own
            // transitionend events up here; without this guard one of those
            // fires the scroll early — while the menu is still collapsing — so
            // it lands short, which is why it only worked on the first tap.
            if (
              event.target !== event.currentTarget ||
              event.propertyName !== "grid-template-rows"
            ) {
              return;
            }
            // scrollAfterCloseRef is only ever set right before a close, so the
            // menu has now finished collapsing and the footer has settled into
            // its final position — safe to scroll without landing short.
            if (scrollAfterCloseRef.current) {
              scrollAfterCloseRef.current = false;
              scrollToNewsletter();
            }
          }}
          className={cn(
            "grid px-[5%] transition-[grid-template-rows] duration-300 ease-in-out lg:flex lg:items-center lg:px-0",
            useActive.isMobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          {/* lg:contents dissolves this wrapper on desktop so the links and CTA
              become direct flex children of the row above. */}
          <div className="min-h-0 overflow-hidden lg:contents">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={useActive.closeMobileMenu}
                className={cn(
                  "block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2",
                  isActivePath(href) && "lg:bg-milan",
                )}
              >
                {label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
              <Button
                asChild
                title="Subscribe to my Newsletter"
                variant="secondary"
                size="sm"
                className="w-full"
              >
                <Link
                  href="#newsletter"
                  onClick={(event) => {
                    // Scroll explicitly: clicking a link to the hash the URL
                    // already has won't re-trigger the browser's own scroll.
                    event.preventDefault();
                    if (useActive.isMobileMenuOpen) {
                      // Wait for the menu to finish collapsing before scrolling,
                      // otherwise the footer shifts up and the scroll lands short.
                      scrollAfterCloseRef.current = true;
                      useActive.closeMobileMenu();
                    } else {
                      scrollToNewsletter();
                    }
                  }}
                >
                  Subscribe to my Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
