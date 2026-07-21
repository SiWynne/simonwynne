"use client";

import React from "react";
import { Header64 } from "@/components/services/header-64";
import { Layout239 } from "@/components/services/layout-239";
import { Layout237 } from "@/components/services/layout-237";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Testimonial1 } from "@/components/services/testimonial-01";
import { ServiceAreasLink } from "@/components/services/service-areas-link";
import { Cta1 } from "@/components/services/cta-01";

export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout239 />
      <Layout237 />
      <Testimonial1 />
      <ServiceAreasLink />
      <LogoCarousel />
      <Cta1 />
    </div>
  );
}
