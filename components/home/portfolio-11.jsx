"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            ToolKits & Playbooks
          </h2>
          <p className="text-medium">
            Words from those who've worked through the process.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              <a href="#">
                "Simon cuts through the noise and gets straight to what matters.
                His approach to positioning changed how we talk about our work."
              </a>
            </h3>
            <p>Simon helped us find the story we were afraid to tell.</p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Creator</a>
              </Badge>
              <Badge>
                <a href="#">Strategist</a>
              </Badge>
              <Badge>
                <a href="#">Founder</a>
              </Badge>
            </div>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">Read more</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              <a href="#">Built momentum</a>
            </h3>
            <p>
              His clarity cut through months of confusion in a single
              conversation.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Consultant</a>
              </Badge>
              <Badge>
                <a href="#">Partner</a>
              </Badge>
              <Badge>
                <a href="#">Collaborator</a>
              </Badge>
            </div>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">Read more</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-h5 font-bold">
              <a href="#">Found clarity</a>
            </h3>
            <p>
              The work changed how we see ourselves and what we're capable of.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Creative</a>
              </Badge>
              <Badge>
                <a href="#">Founder</a>
              </Badge>
              <Badge>
                <a href="#">Leader</a>
              </Badge>
            </div>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">Read more</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="See all" variant="secondary">
            See all
          </Button>
        </div>
      </div>
    </section>
  );
}
