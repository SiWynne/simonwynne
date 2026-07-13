"use client"

import React from "react";
import { Header64 } from "@/components/services/header-64";
import { Layout239 } from "@/components/services/layout-239";
import { Layout237 } from "@/components/services/layout-237";
import { Logo3 } from "@/components/services/logo-03";
import { Testimonial1 } from "@/components/services/testimonial-01";
import { Pricing23 } from "@/components/services/pricing-23";
import { Cta1 } from "@/components/services/cta-01";


export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout239 />
      <Layout237 />
      <Logo3 />
      <Testimonial1 />
      <Pricing23 />
      <Cta1 />
    </div>
  );
}
