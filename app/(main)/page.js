"use client";

import React from "react";
import { Header15 } from "@/components/home/header-15";
import { Cta14 } from "@/components/home/cta-14";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Event7 } from "@/components/home/event-07";
import { Portfolio11 } from "@/components/home/portfolio-11";
import { Portfolio22 } from "@/components/home/portfolio-22";
import { Blog34 } from "@/components/home/blog-34";
import { Event27 } from "@/components/home/event-27";
import { Contact17 } from "@/components/home/contact-17";

export default function Page() {
  return (
    <div>
      <Header15 />
      <Cta14 />
      <LogoCarousel />
      <Event7 />
      <Portfolio11 />
      <Portfolio22 />
      <Blog34 />
      <Event27 />
      <Contact17 />
    </div>
  );
}
