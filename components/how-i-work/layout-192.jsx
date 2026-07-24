import { SectionButtons } from "@/components/how-i-work/section-buttons";
import React from "react";

export function Layout192({
  heading = "",
  intro = "",
  image = "",
  imageAlt = "",
  buttons = [],
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={image}
              className="w-full rounded-image object-cover"
              alt={imageAlt}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
            <p className="text-medium">{intro}</p>
            <SectionButtons
              buttons={buttons}
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
