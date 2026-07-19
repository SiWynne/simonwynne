import { Navbar1 } from "@/components/navbar-01";
import { Footer1 } from "@/components/footer-01";

// Chrome for the main site: the full primary navigation and footer.
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar1 />
      {children}
      <Footer1 />
    </>
  );
}
