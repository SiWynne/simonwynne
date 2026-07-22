"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

function TimelineButtons({ buttons }) {
  return buttons.map((button, index) => {
    const isLink = button.variant === "link";
    return (
      <Button
        key={index}
        variant={button.variant}
        size={isLink ? "link" : undefined}
        title={button.title}
        iconRight={isLink ? <ChevronRight className="text-scheme-text" /> : undefined}
      >
        {button.title}
      </Button>
    );
  });
}

export function Timeline5({
  heading,
  description,
  buttons = [],
  items = [],
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10 w-full max-w-lg">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
            <p className="text-medium">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <TimelineButtons buttons={buttons} />
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-lg auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center">
          <div className="relative left-0 flex h-full w-8 flex-col items-center md:left-auto">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-scheme-background to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-scheme-text" />
            <div className="h-full w-[3px] bg-scheme-text/15" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-scheme-background" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-scheme-background" />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-y-8 sm:gap-12 md:gap-20">
            {items.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  const circleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start center", "start start"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(
      scrollYProgress,
      [0, 0.5],
      ["var(--color-neutral)", "var(--color-scheme-text)"],
    ),
  };

  return (
    <div className="relative">
      <div className="absolute -ml-8 flex h-full w-8 items-start justify-center">
        <motion.div
          ref={circleRef}
          style={backgroundColor}
          className="z-20 mt-7 size-3.75 rounded-full shadow-[0_0_0_8px_var(--color-scheme-background)] md:mt-8"
        />
      </div>
      <div className="mt-4 ml-4 flex flex-col md:ml-12">
        <h3 className="mb-3 text-h3 font-bold md:mb-4">{item.date}</h3>
        <h4 className="mb-3 text-h5 font-bold md:mb-4">{item.title}</h4>
        <p>{item.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <TimelineButtons buttons={item.buttons || []} />
        </div>
      </div>
    </div>
  );
}
