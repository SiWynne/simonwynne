"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-block md:mb-8">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
              alt="Webflow logo"
              className="max-h-14"
            />
          </div>
          <h5 className="text-h5 font-bold">
            "Simon understood what we needed before we fully knew ourselves. The
            work transformed how we operate."
          </h5>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mx-auto mb-3 size-16 min-h-16 min-w-16 overflow-hidden rounded-full md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="size-full object-cover"
              />
            </div>
            <p className="font-semibold">James Mitchell</p>
            <p>Director, Tech Ventures</p>
          </div>
        </div>
      </div>
    </section>
  );
}
