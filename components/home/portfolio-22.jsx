"use client";

import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const useHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const getLinkHoverHandler = (index) => () => {
    setHoveredIndex(index);
  };
  const getOrderNumberClassNames = (index) => {
    return clsx(
      "text-h5 font-bold transition-colors duration-300",
      hoveredIndex === null || hoveredIndex === index
        ? "text-scheme-text"
        : "lg:text-scheme-text/20",
    );
  };
  const getHeadingClassNames = (index) => {
    return clsx(
      "text-h4 font-bold transition-colors duration-300",
      hoveredIndex === null || hoveredIndex === index
        ? "text-scheme-text"
        : "lg:text-scheme-text/20",
    );
  };
  const getImageOverClassNames = (index) => {
    return clsx(
      "sticky top-8 h-full max-h-[60vh] overflow-hidden",
      index === 0 ? "z-0" : "-z-10",
      hoveredIndex === index || hoveredIndex === null
        ? "opacity-100"
        : "opacity-0",
    );
  };
  return {
    handleMouseLeave,
    getLinkHoverHandler,
    getOrderNumberClassNames,
    getHeadingClassNames,
    getImageOverClassNames,
  };
};

export function Portfolio22({ caseStudies = [] }) {
  const hoverState = useHover();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="lg:grid-auto-cols-fr relative block lg:grid lg:grid-cols-2 lg:items-start">
          <div
            className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:pl-10"
            onMouseLeave={hoverState.handleMouseLeave}
          >
            {caseStudies.map((study, index) => (
              <div key={study.slug}>
                <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                  <div className={hoverState.getImageOverClassNames(index)}>
                    <img
                      className="size-full rounded-image object-cover"
                      src={study.image}
                      alt={study.title}
                    />
                  </div>
                </div>
                <Link
                  href={`/work/${study.slug}`}
                  className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                  onMouseEnter={hoverState.getLinkHoverHandler(index)}
                >
                  <div className={hoverState.getOrderNumberClassNames(index)}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className={hoverState.getHeadingClassNames(index)}>
                      {study.title}
                    </h3>
                    <Badge>{study.category}</Badge>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
