"use client";

import React from "react";
import Link from "next/link";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact17() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <Mail className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Email</h3>
            <p className="mb-5 md:mb-6">
              <Link className="underline" href="/contact/">
                Get in Touch
              </Link>
            </p>
            <a className="underline" href="mailto:Hello@SimonWynne.com">
              Hello@SimonWynne.com
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <Call className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Phone</h3>
            <a className="underline" href="tel:+447942344001">
              +44 (0)7942 344001
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <LocationOn className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Service Areas</h3>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <Link className="underline" href="/services/service-areas/#wales">
                  Wales
                </Link>
              </li>
              <li>
                <Link className="underline" href="/services/service-areas/#london">
                  London
                </Link>
              </li>
              <li>
                <Link className="underline" href="/services/service-areas/#kent">
                  Kent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
