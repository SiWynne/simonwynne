"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "relume-icons";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Blog66() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="md:mb-18 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Archive</p>
              <h2 className="text-h2 mb-3 font-bold md:mb-4">
                More from the collection
              </h2>
              <p className="text-medium">Essays and observations on the work</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button title="View all" variant="secondary">
              View all
            </Button>
          </div>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <a href="#" className="mb-5 inline-block md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Craft</Badge>
                <p className="text-small font-semibold">7 min read</p>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 mb-2 font-bold">
                  The discipline of finishing what you start
                </h2>
              </a>
              <p>
                Most writers quit before the work gets good. Here's why that
                matters.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <a href="#" className="mb-5 inline-block md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Business</Badge>
                <p className="text-small font-semibold">6 min read</p>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 mb-2 font-bold">
                  Building a brand that lasts
                </h2>
              </a>
              <p>
                Your reputation is built slowly and lost quickly. The details
                matter most.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <a href="#" className="mb-5 inline-block md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Travel</Badge>
                <p className="text-small font-semibold">5 min read</p>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 mb-2 font-bold">
                  What I learned crossing the Atlantic
                </h2>
              </a>
              <p>
                Travel teaches you things no book ever could. Some lessons stick
                harder.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <a href="#" className="mb-5 inline-block md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Life</Badge>
                <p className="text-small font-semibold">8 min read</p>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 mb-2 font-bold">
                  The cost of saying yes to everything
                </h2>
              </a>
              <p>
                Every commitment you make is a commitment you break somewhere
                else. Choose wisely.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <a href="#" className="mb-5 inline-block md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Craft</Badge>
                <p className="text-small font-semibold">6 min read</p>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 mb-2 font-bold">
                  Writing without an audience in mind
                </h2>
              </a>
              <p>
                The best work comes when you stop thinking about who's watching
                and just write.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <a href="#" className="mb-5 inline-block md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Business</Badge>
                <p className="text-small font-semibold">4 min read</p>
              </div>
              <a href="#" className="mb-2">
                <h2 className="text-h5 mb-2 font-bold">
                  On doing the work nobody asks for
                </h2>
              </a>
              <p>
                The projects that matter most are often the ones that scare you
                first.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Read more
              </Button>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between md:mt-20">
            <div className="mt-5 flex w-full items-start justify-start">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
              <button
                onClick={carouselState.handleDotClick(2)}
                className={carouselState.dotClassName(2)}
              />
              <button
                onClick={carouselState.handleDotClick(3)}
                className={carouselState.dotClassName(3)}
              />
              <button
                onClick={carouselState.handleDotClick(4)}
                className={carouselState.dotClassName(4)}
              />
              <button
                onClick={carouselState.handleDotClick(5)}
                className={carouselState.dotClassName(5)}
              />
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
        <div className="mt-12 flex justify-end md:hidden">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
