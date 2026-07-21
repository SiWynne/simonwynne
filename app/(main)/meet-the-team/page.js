import React from "react";
import { Header46 } from "@/components/meet-the-team/header-46";
import { Cta1 } from "@/components/meet-the-team/cta-01";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Timeline5 } from "@/components/meet-the-team/timeline-05";
import { getTimeline } from "@/lib/timeline";

export default function Page() {
  const timeline = getTimeline();

  return (
    <div>
      <Header46 />
      <Timeline5 {...timeline} />
      <Cta1 />
      <LogoCarousel />
    </div>
  );
}
