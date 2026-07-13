"use client";

import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { ChevronRight } from "relume-icons";

export function Layout615() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Talented</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            OK, so it’s just Me…and Ai
          </h2>
          <p className="text-medium">
            Diverse backgrounds and shared commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 border-t border-scheme-border md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-12">
          <Fragment>
            <div className="border-b border-scheme-border py-6 last:border-b-0 md:border-b-0 md:py-8 lg:py-12">
              <div className="mb-6 w-full overflow-hidden md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h3 font-bold md:mb-6">Me+Team</h3>
              <p>Strategy and execution with a focus on what actually works</p>
            </div>
            <div className="hidden h-full w-px bg-scheme-border md:block" />
          </Fragment>
          <Fragment>
            <div className="border-b border-scheme-border py-6 last:border-b-0 md:border-b-0 md:py-8 lg:py-12">
              <div className="mb-6 w-full overflow-hidden md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h3 font-bold md:mb-6">Me+Ai</h3>
              <p>Builds frameworks that turn ideas into measurable outcomes</p>
            </div>
          </Fragment>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 md:mt-10 lg:mt-12">
          <Button title="View roles" variant="secondary">
            View roles
          </Button>
          <Button
            title="Explore"
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
