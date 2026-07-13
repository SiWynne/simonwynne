"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout237() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Why work with me</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              What sets this approach apart
            </h2>
            <p className="text-medium">
              I focus on what matters and cut through the rest. You get honest
              feedback, practical solutions, and someone who stays committed to
              your success.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/straight.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Direct and honest
              </h3>
              <p>
                No jargon, no pretence, just straight talk about what needs to
                happen.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/work.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Hands-on partnership
              </h3>
              <p>
                I'm invested in your outcomes and work with you every step of
                the way.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/add_business.svg"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Proven track record
              </h3>
              <p>
                Years of experience helping businesses and individuals reach
                their goals.
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            <Button variant="secondary">Discover</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
