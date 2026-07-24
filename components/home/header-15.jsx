import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function Header15({ heading = "", subtitle = "", buttons = [] }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-h1 font-cal-sans font-bold text-left leading-[0.85] lg:leading-[1.1]">
              {heading}
            </h1>
          </div>
          <div>
            <p className="text-medium">{subtitle}</p>
            {buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    asChild
                    title={button.label}
                    variant={
                      button.variant === "secondary" ? "secondary" : undefined
                    }
                  >
                    <Link href={button.href || "#"}>{button.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
