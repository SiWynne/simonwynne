import React from "react";

export function Testimonial1({
  logo = "",
  logoAlt = "",
  quote = "",
  avatar = "",
  name = "",
  role = "",
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          {logo && (
            <div className="mb-6 inline-block md:mb-8">
              <img src={logo} alt={logoAlt} className="max-h-14" />
            </div>
          )}
          <h5 className="text-h5 font-bold">{quote}</h5>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mx-auto mb-3 size-16 min-h-16 min-w-16 overflow-hidden rounded-full md:mb-4">
              <img
                src={avatar}
                alt={name}
                className="size-full object-cover"
              />
            </div>
            <p className="font-semibold">{name}</p>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
