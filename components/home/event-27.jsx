"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { ChevronRight, PlayCircle, Schedule } from "relume-icons";

export function Event27() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Video</h4>
            <h1 className="mt-3 text-h2 font-bold md:mt-4">Videos</h1>
            <p className="mt-5 text-medium md:mt-6">
              Quick ideas worth your attention.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger asChild={true}>
                <button className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                  <PlayCircle className="absolute z-20 size-20 text-white" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
            <div className="mt-5 md:mt-6">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-small md:mb-4">
                <Schedule className="size-6 flex-none text-scheme-text" />3 min
              </div>
              <a className="mb-2 block" href="#">
                <h3 className="text-h5 font-bold">Craft beats trends</h3>
              </a>
              <p className="mb-2">
                Why consistency in your work matters more than chasing what's
                popular.
              </p>
              <div className="flex items-center gap-2 md:mb-4">
                <h4 className="font-semibold">Watch</h4>
                <div className="flex items-center">
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 2"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 3"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 4"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <Button
                title="Watch"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-3 flex items-center justify-center gap-x-2 text-regular md:mt-4"
              >
                Watch
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger asChild={true}>
                <button className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                  <PlayCircle className="absolute z-20 size-20 text-white" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
            <div className="mt-5 md:mt-6">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-small md:mb-4">
                <Schedule className="size-6 flex-none text-scheme-text" />4 min
              </div>
              <a className="mb-2 block" href="#">
                <h3 className="text-h5 font-bold">The pricing question</h3>
              </a>
              <p className="mb-2">
                How to charge what your work is actually worth without
                second-guessing yourself.
              </p>
              <div className="flex items-center gap-2 md:mb-4">
                <h4 className="font-semibold">Watch</h4>
                <div className="flex items-center">
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 2"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 3"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 4"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <Button
                title="Watch"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-3 flex items-center justify-center gap-x-2 text-regular md:mt-4"
              >
                Watch
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <Dialog>
              <DialogTrigger asChild={true}>
                <button className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                  <PlayCircle className="absolute z-20 size-20 text-white" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
            <div className="mt-5 md:mt-6">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-small md:mb-4">
                <Schedule className="size-6 flex-none text-scheme-text" />2 min
              </div>
              <a className="mb-2 block" href="#">
                <h3 className="text-h5 font-bold">Starting is the hard part</h3>
              </a>
              <p className="mb-2">
                The truth about beginning something that matters and how to move
                past the fear.
              </p>
              <div className="flex items-center gap-2 md:mb-4">
                <h4 className="font-semibold">Watch</h4>
                <div className="flex items-center">
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 1"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 2"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 3"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="-ml-2 block size-10 min-h-10 min-w-10 overflow-hidden rounded-full border-2 border-scheme-foreground first-of-type:ml-0">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-small.svg"
                      alt="Speaker 4"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <Button
                title="Watch"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-3 flex items-center justify-center gap-x-2 text-regular md:mt-4"
              >
                Watch
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button variant="secondary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
