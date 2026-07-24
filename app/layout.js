import "./globals.css";
import { RouteMemory } from "@/components/route-memory";

export const metadata = {
  title: "SimonWynne",
  description: "SimonWynne",
};

// Root layout: the universal document shell only. Page chrome (navbar, footer)
// lives in per-group layouts so different page types can present different
// headers — see app/(main)/layout.js and app/(tertiary)/layout.js.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <RouteMemory />
        {children}
      </body>
    </html>
  );
}
