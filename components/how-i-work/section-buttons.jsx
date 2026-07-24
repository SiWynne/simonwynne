"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

// Renders a row of buttons from MDX. A "link" variant becomes the chevron text
// link; anything else is a solid button (secondary when asked, else primary).
export function SectionButtons({ buttons = [], className = "" }) {
  if (buttons.length === 0) return null;
  return (
    <div className={className}>
      {buttons.map((button, index) =>
        button.variant === "link" ? (
          <Button
            key={index}
            title={button.label}
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
            asChild
          >
            <a href={button.href || "#"}>{button.label}</a>
          </Button>
        ) : (
          <Button
            key={index}
            title={button.label}
            variant={button.variant === "secondary" ? "secondary" : undefined}
            asChild
          >
            <a href={button.href || "#"}>{button.label}</a>
          </Button>
        ),
      )}
    </div>
  );
}
