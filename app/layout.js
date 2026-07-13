import "./globals.css";
import { Navbar1 } from "@/components/navbar-01";
import { Footer1 } from "@/components/footer-01";

export const metadata = {
  title: "SimonWynne",
  description: "SimonWynne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar1 />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}
