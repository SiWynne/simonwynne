"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Writing</p>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Stories worth reading
            </h1>
            <p className="text-medium">
              Thoughts on craft, life, and the work that matters
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="view-all"
          className="grid grid-cols-1 gap-x-12 gap-y-8 text-left md:grid-cols-[0.25fr_1fr] md:gap-x-12 md:gap-y-12 lg:grid-cols-[15rem_1fr] lg:gap-x-16"
        >
          <TabsList className="flex w-full flex-col">
            <div className="mb-6 text-h6 font-bold">Categories</div>
            <TabsTrigger
              value="view-all"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Craft
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Business
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Travel
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              Life
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Craft</Badge>
              <p className="inline text-small font-semibold">7 min read</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              The discipline of finishing what you start
            </a>
            <p>
              Most writers quit before the work gets good. Here's why that
              matters.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Business</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Building a brand that lasts
                </a>
                <p>
                  Your reputation is built slowly and lost quickly. The details
                  matter most.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Travel</Badge>
                  <p className="inline text-small font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  What I learned crossing the Atlantic
                </a>
                <p>
                  Travel teaches you things no book ever could. Some lessons
                  stick harder.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Life</Badge>
                  <p className="inline text-small font-semibold">8 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  The cost of saying yes to everything
                </a>
                <p>
                  Every commitment you make is a commitment you break somewhere
                  else. Choose wisely.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Craft</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Writing without an audience in mind
                </a>
                <p>
                  The best work comes when you stop thinking about who's
                  watching and just write.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Craft</Badge>
              <p className="inline text-small font-semibold">7 min read</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              The discipline of finishing what you start
            </a>
            <p>
              Most writers quit before the work gets good. Here's why that
              matters.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Business</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Building a brand that lasts
                </a>
                <p>
                  Your reputation is built slowly and lost quickly. The details
                  matter most.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Travel</Badge>
                  <p className="inline text-small font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  What I learned crossing the Atlantic
                </a>
                <p>
                  Travel teaches you things no book ever could. Some lessons
                  stick harder.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Life</Badge>
                  <p className="inline text-small font-semibold">8 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  The cost of saying yes to everything
                </a>
                <p>
                  Every commitment you make is a commitment you break somewhere
                  else. Choose wisely.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Craft</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Writing without an audience in mind
                </a>
                <p>
                  The best work comes when you stop thinking about who's
                  watching and just write.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Craft</Badge>
              <p className="inline text-small font-semibold">7 min read</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              The discipline of finishing what you start
            </a>
            <p>
              Most writers quit before the work gets good. Here's why that
              matters.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Business</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Building a brand that lasts
                </a>
                <p>
                  Your reputation is built slowly and lost quickly. The details
                  matter most.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Travel</Badge>
                  <p className="inline text-small font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  What I learned crossing the Atlantic
                </a>
                <p>
                  Travel teaches you things no book ever could. Some lessons
                  stick harder.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Life</Badge>
                  <p className="inline text-small font-semibold">8 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  The cost of saying yes to everything
                </a>
                <p>
                  Every commitment you make is a commitment you break somewhere
                  else. Choose wisely.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Craft</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Writing without an audience in mind
                </a>
                <p>
                  The best work comes when you stop thinking about who's
                  watching and just write.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Craft</Badge>
              <p className="inline text-small font-semibold">7 min read</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              The discipline of finishing what you start
            </a>
            <p>
              Most writers quit before the work gets good. Here's why that
              matters.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Business</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Building a brand that lasts
                </a>
                <p>
                  Your reputation is built slowly and lost quickly. The details
                  matter most.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Travel</Badge>
                  <p className="inline text-small font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  What I learned crossing the Atlantic
                </a>
                <p>
                  Travel teaches you things no book ever could. Some lessons
                  stick harder.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Life</Badge>
                  <p className="inline text-small font-semibold">8 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  The cost of saying yes to everything
                </a>
                <p>
                  Every commitment you make is a commitment you break somewhere
                  else. Choose wisely.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Craft</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Writing without an audience in mind
                </a>
                <p>
                  The best work comes when you stop thinking about who's
                  watching and just write.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
            </a>
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">Craft</Badge>
              <p className="inline text-small font-semibold">7 min read</p>
            </div>
            <a href="#" className="mb-4 block max-w-full text-h4 font-bold">
              The discipline of finishing what you start
            </a>
            <p>
              Most writers quit before the work gets good. Here's why that
              matters.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Business</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Building a brand that lasts
                </a>
                <p>
                  Your reputation is built slowly and lost quickly. The details
                  matter most.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Travel</Badge>
                  <p className="inline text-small font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  What I learned crossing the Atlantic
                </a>
                <p>
                  Travel teaches you things no book ever could. Some lessons
                  stick harder.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Life</Badge>
                  <p className="inline text-small font-semibold">8 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  The cost of saying yes to everything
                </a>
                <p>
                  Every commitment you make is a commitment you break somewhere
                  else. Choose wisely.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full rounded-image object-cover"
                    />
                  </div>
                </a>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Craft</Badge>
                  <p className="inline text-small font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2 block max-w-full text-h5 font-bold">
                  Writing without an audience in mind
                </a>
                <p>
                  The best work comes when you stop thinking about who's
                  watching and just write.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  Read more <ChevronRight className="text-scheme-text" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
