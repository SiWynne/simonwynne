"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Event7({
  heading = "",
  subtitle = "",
  buttonLabel = "",
  buttonHref = "#",
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
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-start">
              <a
                href={card.href || "#"}
                className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute size-full rounded-image object-cover"
                />
                {card.date && (
                  <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center rounded-card bg-scheme-foreground px-1 py-3 text-small text-scheme-text">
                    {card.date.top && <span>{card.date.top}</span>}
                    {card.date.number && (
                      <h4 className="text-h4 font-bold">{card.date.number}</h4>
                    )}
                    {card.date.bottom && <span>{card.date.bottom}</span>}
                  </div>
                )}
              </a>
              {card.badge && <Badge className="mb-3 md:mb-4">{card.badge}</Badge>}
              <a href={card.href || "#"}>
                <h2 className="text-h5 font-bold">{card.title}</h2>
              </a>
              {card.location && <p className="mb-2">{card.location}</p>}
              <p>{card.description}</p>
              <Button
                title="Register"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild
                className="mt-5 md:mt-6"
              >
                <a href={card.href || "#"}>Register</a>
              </Button>
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
