import { NavbarMinimal } from "@/components/navbar-minimal";
import { Footer1 } from "@/components/footer-01";

// Chrome for tertiary pages (e.g. /services/service-areas): a stripped-back
// navbar with just the logo and a "Get in Touch" CTA, plus the standard footer.
export default function TertiaryLayout({ children }) {
  return (
    <>
      <NavbarMinimal />
      {children}
      <Footer1 />
    </>
  );
}
