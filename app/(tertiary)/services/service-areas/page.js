"use client";

import React from "react";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { ServiceAreasList } from "@/components/service-areas/service-areas-list";
import { CtaAreas } from "@/components/service-areas/cta-areas";

export default function Page() {
  return (
    <div>
      <HeaderAreas />
      <ServiceAreasList />
      <CtaAreas />
    </div>
  );
}
