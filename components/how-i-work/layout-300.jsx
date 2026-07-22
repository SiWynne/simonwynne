"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout300() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-center text-h2 font-bold md:mb-6">
              A straightforward approach to solving problems
            </h2>
            <p className="text-center text-medium">
              I work through a clear, methodical process designed to understand
              your situation fully and deliver results that matter. Each step
              builds on the last, moving you steadily toward your objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-5 w-full md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Do It Yourself
              </h3>
              <p className="text-center">
                We meet to discuss your goals, challenges, and what success
                looks like for you.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-5 w-full md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Do It With You
              </h3>
              <p className="text-center">
                I create a tailored plan that addresses your specific needs and
                outlines the path forward.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-5 w-full md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Do It For You
              </h3>
              <p className="text-center">
                We execute the strategy with precision, keeping everything
                aligned with your vision and timeline.
              </p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-5 w-full md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Coaching
              </h3>
              <p className="text-center">
                I remain available to refine, adjust, and ensure you're getting
                the results you need.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Learn" variant="secondary">
              Learn
            </Button>
            <Button
              title="Arrow"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Arrow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
