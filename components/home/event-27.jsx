"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { ChevronRight, PlayCircle, Schedule } from "relume-icons";

export function Event27({
  heading = "",
  subtitle = "",
  buttonLabel = "",
  buttonHref = "#",
  watchLabel = "Watch",
  cards = [],
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-h2 font-bold">{heading}</h1>
            <p className="mt-5 text-medium md:mt-6">{subtitle}</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              <Dialog>
                <DialogTrigger asChild={true}>
                  <button className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="aspect-[3/2] size-full object-cover"
                    />
                    <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                    <PlayCircle className="absolute z-20 size-20 text-white" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video={card.video} />
                </DialogContent>
              </Dialog>
              <div className="mt-5 md:mt-6">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-small md:mb-4">
                  <Schedule className="size-6 flex-none text-scheme-text" />
                  {card.duration}
                </div>
                <a className="mb-2 block" href={card.href || "#"}>
                  <h3 className="text-h5 font-bold">{card.title}</h3>
                </a>
                <p className="mb-2">{card.description}</p>
                <div className="flex items-center gap-2 md:mb-4">
                  <h4 className="font-semibold">{watchLabel}</h4>
                  {card.speakers?.length > 0 && (
                    <div className="flex items-center">
                      {card.speakers.map((speaker, i) => (
                        <div
                          key={i}
                          className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0"
                        >
                          <img
                            src={speaker}
                            alt={`Speaker ${i + 1}`}
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Button
                  title={watchLabel}
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                  asChild
                  className="mt-3 flex items-center justify-center gap-x-2 text-regular md:mt-4"
                >
                  <a href={card.href || "#"}>{watchLabel}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {buttonLabel && (
          <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
            <Button asChild variant="secondary" title={buttonLabel}>
              <a href={buttonHref}>{buttonLabel}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
