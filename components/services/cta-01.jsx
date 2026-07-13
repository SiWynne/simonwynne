"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Ready to get started
            </h2>
            <p className="text-medium">
              Let's talk about what you need and how I can help you achieve it.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Consult">Consult</Button>
              <Button title="Email" variant="secondary">
                Email
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
