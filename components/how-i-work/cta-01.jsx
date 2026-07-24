import { SectionButtons } from "@/components/how-i-work/section-buttons";
import React from "react";

export function Cta1({
  heading = "",
  intro = "",
  image = "",
  imageAlt = "",
  buttons = [],
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
            <p className="text-medium">{intro}</p>
            <SectionButtons
              buttons={buttons}
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
            />
          </div>
          <div>
            <img
              src={image}
              className="w-full rounded-image object-cover"
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
