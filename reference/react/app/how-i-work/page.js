"use client"

import React from "react";
import { Header64 } from "@/components/how-i-work/header-64";
import { Layout300 } from "@/components/how-i-work/layout-300";
import { Layout192 } from "@/components/how-i-work/layout-192";
import { Testimonial1 } from "@/components/how-i-work/testimonial-01";
import { Logo3 } from "@/components/how-i-work/logo-03";
import { Cta1 } from "@/components/how-i-work/cta-01";


export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout300 />
      <Layout192 />
      <Testimonial1 />
      <Logo3 />
      <Cta1 />
    </div>
  );
}
