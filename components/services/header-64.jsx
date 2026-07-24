import React from "react";

export function Header64({ title = "Services", intro = "" }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-h1 font-bold md:mb-6">{title}</h1>
          <p className="text-medium">{intro}</p>
        </div>
      </div>
    </section>
  );
}
