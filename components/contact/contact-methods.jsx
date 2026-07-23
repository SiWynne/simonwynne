import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

const ICONS = {
  mail: Mail,
  phone: Call,
  location: LocationOn,
};

export function ContactMethods({ methods = [] }) {
  if (methods.length === 0) return null;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3 badge-alt alternate logo-alt">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {methods.map((method) => {
            const Icon = ICONS[method.icon] || Mail;
            return (
              <div key={method.label}>
                <div className="mb-5 lg:mb-6">
                  <Icon className="size-12 text-scheme-text" aria-hidden="true" />
                </div>
                <h2 className="mb-3 text-h4 font-bold lg:mb-4">{method.label}</h2>
                {method.description && (
                  <p className="mb-5 md:mb-6">{method.description}</p>
                )}
                {method.href ? (
                  <a
                    className="underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-scheme-text focus-visible:ring-offset-2 focus-visible:outline-none"
                    href={method.href}
                  >
                    {method.value}
                  </a>
                ) : (
                  <p>{method.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
