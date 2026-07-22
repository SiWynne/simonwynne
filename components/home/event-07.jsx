"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Event7() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-h2 font-bold">
              Online & In-Person Sessions
            </h1>
            <p className="mt-5 text-medium md:mt-6">
              Join conversations about craft and creation.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-22.jpg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center rounded-card bg-scheme-foreground px-1 py-3 text-small text-scheme-text">
                <span>60 min session</span>
                <h4 className="text-h4 font-bold">09</h4>
                <span>45 min session</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Workshop</Badge>
            <a href="#">
              <h2 className="text-h5 font-bold">
                Free Workshop with Business Wales
              </h2>
            </a>
            <p className="mb-2">Melbourne</p>
            <p>Learn how to stand out with authentic storytelling.</p>
            <Button
              title="Register"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 md:mt-6"
            >
              Register
            </Button>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-18.jpg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center rounded-card bg-scheme-foreground px-1 py-3 text-small text-scheme-text">
                <span>90 min session</span>
                <h4 className="text-h4 font-bold">10</h4>
                <span>Sydney</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Livestream</Badge>
            <a href="#">
              <h2 className="text-h5 font-bold">You & Ai LiveStream</h2>
            </a>
            <p className="mb-2">Online</p>
            <p>Understand pricing, positioning, and sustainable growth.</p>
            <Button
              title="Register"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 md:mt-6"
            >
              Register
            </Button>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center rounded-card bg-scheme-foreground px-1 py-3 text-small text-scheme-text">
                <span>Sun</span>
                <h4 className="text-h4 font-bold">11</h4>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Masterclass</Badge>
            <a href="#">
              <h2 className="text-h5 font-bold">Coffee, Cake & Ai</h2>
            </a>
            <p className="mb-2">Sydney</p>
            <p>
              Build a sustainable creative practice that reflects your values
              and vision.
            </p>
            <Button
              title="Register"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-5 md:mt-6"
            >
              Register
            </Button>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button variant="secondary" title="See schedule">
            See schedule
          </Button>
        </div>
      </div>
    </section>
  );
}
