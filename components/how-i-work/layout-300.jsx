import { SectionButtons } from "@/components/how-i-work/section-buttons";
import React from "react";

export function Layout300({ heading = "", intro = "", steps = [], buttons = [] }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-center text-h2 font-bold md:mb-6">
              {heading}
            </h2>
            <p className="text-center text-medium">{intro}</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex w-full flex-col flex-nowrap justify-start text-center"
              >
                <div className="mx-auto mb-5 w-full md:mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="aspect-video size-full rounded-image object-cover"
                  />
                </div>
                <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                  {step.title}
                </h3>
                <p className="text-center">{step.description}</p>
              </div>
            ))}
          </div>
          <SectionButtons
            buttons={buttons}
            className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20"
          />
        </div>
      </div>
    </section>
  );
}
