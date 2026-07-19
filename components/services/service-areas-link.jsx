"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export function ServiceAreasLink() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Prefer to meet in person?
          </h2>
          <p className="text-medium">
            I offer in-person engagements across Wales, Kent and London. See the
            full list of towns and regions I can travel to.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button asChild title="Service Areas">
              <Link href="/services/service-areas">Service Areas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
