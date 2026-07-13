"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Approach</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Transparency and accountability at every turn
            </h2>
            <p className="text-medium">
              I believe in honest communication and measurable progress. You'll
              always know where things stand and what comes next.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
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
      </div>
    </section>
  );
}
