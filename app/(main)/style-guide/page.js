import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const schemes = ["scheme-1", "scheme-2", "scheme-3", "scheme-4"];

export default function StyleGuide() {
  return (
    <div className="flex flex-col gap-16 p-16">
      <section className="flex flex-col gap-4">
        <Image src="/logo/logo-light.png" alt="SimonWynne logo" width={160} height={40} />
        <h1>Heading 1 — DM Sans 700</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p className="text-regular">
          Body text — JetBrains Mono 400. The quick brown fox jumps over the lazy dog.
        </p>
      </section>

      {schemes.map((scheme) => (
        <section key={scheme} className={`${scheme} flex flex-col gap-6 p-8`}>
          <p className="text-small uppercase tracking-wide">{scheme}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default">Default button</Button>
            <Button variant="secondary">Secondary button</Button>
            <Badge>Badge</Badge>
          </div>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description text</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-regular">Card content in this scheme.</p>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  );
}
