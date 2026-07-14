"use client";

import React from "react";
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
            <p className="mb-5 md:mb-6">Get in touch</p>
            <a className="underline" href="#">
              Hello
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <Call className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Phone</h3>
            <p className="mb-5 md:mb-6">Hello@simonwynne.com</p>
            <a className="underline" href="#">
              Sydney, New South Wales, Australia
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <LocationOn className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Office</h3>
            <p className="mb-5 md:mb-6">+61 2 8000 0000</p>
            <a className="underline" href="#">
              Sydney, New South Wales, Australia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
