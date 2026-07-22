import React from "react";

export function Layout618({ heading, summary, items = [] }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="text-h2 font-bold">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 border-t border-scheme-border md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="border-b border-scheme-border py-6 last:border-b-0 md:border-b-0 md:py-8 lg:py-12">
                <div className="mb-6 w-full overflow-hidden md:mb-8">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="aspect-video size-full rounded-image object-cover"
                  />
                </div>
                <h3 className="mb-5 text-h3 font-bold md:mb-6">{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              {index < items.length - 1 && (
                <div className="hidden h-full w-px bg-scheme-border md:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 border-t border-scheme-border pt-8 md:mt-10 md:pt-10 lg:mt-12 lg:pt-12">
          <p className="text-medium max-w-lg">{summary}</p>
        </div>
      </div>
    </section>
  );
}
