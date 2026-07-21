import React from "react";
import { Header46 } from "@/components/meet-the-team/header-46";
import { Cta1 } from "@/components/meet-the-team/cta-01";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Timeline5 } from "@/components/meet-the-team/timeline-05";
import { Layout618 } from "@/components/meet-the-team/layout-618";
import { getTimeline } from "@/lib/timeline";
import { getMeAndAi } from "@/lib/me-and-ai";

export default function Page() {
  const timeline = getTimeline();
  const meAndAi = getMeAndAi();

  return (
    <div>
      <Header46 />
      <Layout618 {...meAndAi} />
      <Timeline5 {...timeline} />
      <LogoCarousel />
      <Cta1 />
    </div>
  );
}
