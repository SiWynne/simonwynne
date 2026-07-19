import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export function CtaAreas({ heading, body, buttonLabel, buttonHref }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
          <p className="text-medium">{body}</p>
          {buttonLabel && buttonHref && (
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button asChild>
                <Link href={buttonHref}>{buttonLabel}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
