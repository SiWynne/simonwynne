"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
            <a className="font-bold underline" href="mailto:hello@simonwynne.com">
              hello@simonwynne.com
            </a>
            <div className="mt-5 md:mt-6">
              <Button asChild variant="secondary" title="Get in Touch">
                <Link href="/contact/">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <Call className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Phone</h3>
            <a className="font-bold underline" href="tel:+447942344001">
              +44 (0)7942 344001
            </a>
            <div className="mt-5 md:mt-6">
              <Button asChild variant="secondary" title="Free Discovery Call">
                <Link href="/book-a-discovery-call/">Free Discovery Call</Link>
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <LocationOn className="size-12 text-scheme-text" />
            </div>
            <h3 className="mb-3 text-h4 font-bold lg:mb-4">Service Areas</h3>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <Link className="font-bold underline" href="/services/service-areas/#wales">
                  Wales
                </Link>
              </li>
              <li>
                <Link className="font-bold underline" href="/services/service-areas/#london">
                  London
                </Link>
              </li>
              <li>
                <Link className="font-bold underline" href="/services/service-areas/#kent">
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
