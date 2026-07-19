"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export function CtaAreas() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Not sure if you're in range?
          </h2>
          <p className="text-medium">
            If you're near one of these areas, get in touch — I'm often able to
            travel a little further. And wherever you are, remote engagements are
            always an option.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button asChild>
              <Link href="/services">Back to Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
