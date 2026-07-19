"use client";

import React from "react";
import Link from "next/link";

export function HeaderAreas() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="w-full max-w-lg">
          <Link
            href="/services"
            className="mb-5 inline-block font-semibold underline underline-offset-4"
          >
            ← Back to Services
          </Link>
          <h1 className="mb-5 text-h1 font-bold md:mb-6">Service Areas</h1>
          <p className="text-medium">
            Where I can meet you in person. In-person engagements are available
            across three regions — Wales, Kent and London. Anywhere else, I work
            remotely.
          </p>
        </div>
      </div>
    </section>
  );
}
