"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta14() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-h2 font-bold">Receive my latest updates</h1>
        </div>
        <div>
          <p className="text-medium">
            Receive thoughts on Ai, business growth, and the outcomes that
            matter.
          </p>
          <div className="mt-6 md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Your email" />
              <Button title="Join now">Join now</Button>
            </form>
            <p className="text-tiny">
              By joining you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
