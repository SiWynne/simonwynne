"use client";

import React from "react";

function LogoTrack({ logos, ariaHidden = false }) {
  return (
    <div
      className="flex shrink-0 animate-loop-horizontally items-center"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo, index) => (
        <div
          key={`${logo.src}-${index}`}
          className="mx-7 flex h-12 w-28 shrink-0 items-center justify-center md:mx-10 md:h-14 md:w-32"
        >
          <img
            className="max-h-full max-w-full object-contain"
            src={logo.src}
            alt={logo.alt}
          />
        </div>
      ))}
    </div>
  );
}

export function LogoCarousel({ heading = "", logos = [] }) {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 scheme-1 btn-light badge-alt">
      {heading && (
        <div className="container mb-8 max-w-lg px-[5%] md:mb-10 lg:mb-12">
          <h1 className="text-center text-h6 font-bold">{heading}</h1>
        </div>
      )}
      <div className="flex items-center pt-7 md:pt-0">
        {/* Two identical tracks so the marquee loops seamlessly with no gaps or overlap. */}
        <LogoTrack logos={logos} />
        <LogoTrack logos={logos} ariaHidden />
      </div>
    </section>
  );
}
