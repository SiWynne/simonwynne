"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog34() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Blog</h2>
            <p className="text-medium">
              Essays and reflections on the craft of building.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-5 w-full md:mb-6">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-3.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Essay</Badge>
              <p className="inline text-small font-semibold">7 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-h5 font-bold">
                Why clarity comes before confidence
              </h2>
            </a>
            <p>The path to certainty starts with honest self-assessment.</p>
            <Button
              title="Read"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
            >
              Read
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-5 w-full md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Case</Badge>
              <p className="inline text-small font-semibold">6 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-h5 font-bold">
                From scattered to systematic
              </h2>
            </a>
            <p>How one creator doubled their output with better structure.</p>
            <Button
              title="View work"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
            >
              View work
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-5 w-full md:mb-6">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-34.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Insight</Badge>
              <p className="inline text-small font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-h5 font-bold">The work shapes the person</h2>
            </a>
            <p>What you build today becomes who you are tomorrow.</p>
            <Button
              title="See more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
            >
              See more
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="Browse all"
            variant="secondary"
            className="mt-12 md:mt-18 lg:mt-20"
          >
            Browse all
          </Button>
        </div>
      </div>
    </section>
  );
}
