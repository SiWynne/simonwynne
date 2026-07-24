"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio11({
  heading = "",
  subtitle = "",
  buttonLabel = "",
  buttonHref = "#",
  cards = [],
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4 btn-light badge-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
          <p className="text-medium">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {cards.map((card, index) => (
            <article key={index}>
              <div className="mb-5 md:mb-6">
                <a href={card.href || "#"}>
                  <img
                    src={card.image}
                    className="w-full rounded-image object-cover"
                    alt={card.title}
                  />
                </a>
              </div>
              <h3 className="mb-2 text-h5 font-bold">
                <a href={card.href || "#"}>{card.title}</a>
              </h3>
              <p>{card.description}</p>
              {card.badges?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  {card.badges.map((badge, i) => (
                    <Badge key={i}>
                      <a href={card.href || "#"}>{badge}</a>
                    </Badge>
                  ))}
                </div>
              )}
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild
                className="mt-5 md:mt-6"
              >
                <a href={card.href || "#"}>Read more</a>
              </Button>
            </article>
          ))}
        </div>
        {buttonLabel && (
          <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
            <Button asChild title={buttonLabel} variant="secondary">
              <a href={buttonHref}>{buttonLabel}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
