"use client";

import React from "react";

// Real logos and grey placeholders interleaved so the placeholders are
// evenly distributed across the strip rather than clumped together.
const LOGOS = [
  { src: "/images/carousel-logos/adidas-logo.png", alt: "Adidas logo" },
  { src: "/images/carousel-logos/bt-logo.png", alt: "BT logo" },
  { src: "/images/carousel-logos/ace-logo.svg", alt: "ACE logo" },
  { src: "/images/carousel-logos/bbc-logo.svg", alt: "BBC logo" },
  { src: "/images/carousel-logos/4finLogo.svg", alt: "4Finance logo" },
  { src: "/images/carousel-logos/five-logo.png", alt: "Five logo" },
  { src: "/images/carousel-logos/lbg-logo.svg", alt: "LBG logo" },
  { src: "/images/carousel-logos/standardlife-logo.svg", alt: "Standard Life logo" },
  { src: "/images/carousel-logos/beyondsport-logo.svg", alt: "Beyond Sport logo" },
  { src: "/images/carousel-logos/ford-logo.png", alt: "Ford logo" },
  { src: "/images/carousel-logos/harrypotter-logo.png", alt: "The Wizarding World of Harry Potter logo" },
  { src: "/images/carousel-logos/rbkc-logo.svg", alt: "RBKC logo" },
  { src: "/images/carousel-logos/ch4-logo.svg", alt: "Channel 4 logo" },
  { src: "/images/carousel-logos/hmrc-logo.png", alt: "HM Revenue & Customs logo" },
  { src: "/images/carousel-logos/mands-logo.png", alt: "M&S logo" },
  { src: "/images/carousel-logos/vccp-logo.svg", alt: "VCCP logo" },
  { src: "/images/carousel-logos/royallondon-logo.svg", alt: "Royal London logo" },
  { src: "/images/carousel-logos/debeers-logo.svg", alt: "De Beers logo" },
  { src: "/images/carousel-logos/mcdonalds-logo.png", alt: "McDonald's logo" },
  { src: "/images/carousel-logos/mckinsey-logo.png", alt: "McKinsey & Company logo" },
  { src: "/images/carousel-logos/wetherspoons-logo.svg", alt: "Wetherspoons logo" },
  { src: "/images/carousel-logos/mercedes-logo.svg", alt: "Mercedes-Benz logo" },
  { src: "/images/carousel-logos/shell-logo.svg", alt: "Shell logo" },
  { src: "/images/carousel-logos/neom-logo.png", alt: "NEOM logo" },
  { src: "/images/carousel-logos/o2-logo.png", alt: "O2 logo" },
  { src: "/images/carousel-logos/vodafone-logo.svg", alt: "Vodafone logo" },
  { src: "/images/carousel-logos/pringles-logo.svg", alt: "Pringles logo" },
  { src: "/images/carousel-logos/pg-logo.png", alt: "P&G logo" },
  { src: "/images/carousel-logos/pfizer-logo.png", alt: "Pfizer logo" },
  { src: "/images/carousel-logos/paramount-logo.svg", alt: "Paramount logo" },
  { src: "/images/carousel-logos/ratedpeople-logo.svg", alt: "Rated People logo" },
  { src: "/images/carousel-logos/samsung-logo.png", alt: "Samsung logo" },
  { src: "/images/carousel-logos/sainsburys-logo.png", alt: "Sainsbury's logo" },
  { src: "/images/carousel-logos/britishgas-logo.svg", alt: "British Gas logo" },
  { src: "/images/carousel-logos/sabre-logo.svg", alt: "Sabre logo" },
];

function LogoTrack({ ariaHidden = false }) {
  return (
    <div
      className="flex shrink-0 animate-loop-horizontally items-center"
      aria-hidden={ariaHidden}
    >
      {LOGOS.map((logo) => (
        <div
          key={logo.src}
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

export function Logo3() {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 scheme-1 btn-light badge-alt">
      <div className="container mb-8 max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-h6 font-bold">
          Some of the brands I&apos;ve worked with...
        </h1>
      </div>
      <div className="flex items-center pt-7 md:pt-0">
        {/* Two identical tracks so the marquee loops seamlessly with no gaps or overlap. */}
        <LogoTrack />
        <LogoTrack ariaHidden />
      </div>
    </section>
  );
}
