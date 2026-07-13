"use client";

import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";

const useHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const getLinkHoverHandler = () => () => {
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
  const getImageOverClassNames = () => {
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

export function Portfolio22() {
  const hoverState = useHover();
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="lg:grid-auto-cols-fr relative block lg:grid lg:grid-cols-2 lg:items-start">
          <div
            className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:pl-10"
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(0)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d1p38huyj6upaa.cloudfront.net/default-32.jpg"
                    alt="Relume placeholder image 1"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(0)}
              >
                <div className={hoverState.getOrderNumberClassNames(0)}>01</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(0)}>
                    Clarity found
                  </h3>
                  <Badge>Strategy</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(1)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                    alt="Relume placeholder image 2"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(1)}
              >
                <div className={hoverState.getOrderNumberClassNames(1)}>02</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(1)}>
                    Growth built
                  </h3>
                  <Badge>Positioning</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(2)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                    alt="Relume placeholder image 3"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(2)}
              >
                <div className={hoverState.getOrderNumberClassNames(2)}>03</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(2)}>
                    Momentum gained
                  </h3>
                  <Badge>Storytelling</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(3)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                    alt="Relume placeholder image 4"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(3)}
              >
                <div className={hoverState.getOrderNumberClassNames(3)}>04</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(3)}>
                    Systems created
                  </h3>
                  <Badge>Operations</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(4)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-5.svg"
                    alt="Relume placeholder image 5"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(4)}
              >
                <div className={hoverState.getOrderNumberClassNames(4)}>05</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(4)}>
                    Voice developed
                  </h3>
                  <Badge>Brand</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(5)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                    alt="Relume placeholder image 6"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-scheme-border py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(5)}
              >
                <div className={hoverState.getOrderNumberClassNames(5)}>06</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(5)}>
                    Confidence earned
                  </h3>
                  <Badge>Leadership</Badge>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
