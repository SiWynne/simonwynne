import React from "react";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { ServiceAreasList } from "@/components/service-areas/service-areas-list";
import { CtaAreas } from "@/components/service-areas/cta-areas";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { getServiceAreas } from "@/lib/service-areas";

export function generateMetadata() {
  const { title, intro } = getServiceAreas();
  return { title: `${title} — SimonWynne`, description: intro };
}

export default function Page() {
  const { title, intro, backLabel, backHref, regions, cta } =
    getServiceAreas();

  return (
    <div>
      {/* Sits under Services in the hierarchy, so its back link stays put
          rather than following the visitor's history. */}
      <HeaderAreas
        title={title}
        intro={intro}
        backLabel={backLabel}
        backHref={backHref}
        historyBack={false}
      />
      <ServiceAreasList regions={regions} />
      {cta && (
        <CtaAreas
          heading={cta.heading}
          body={cta.body}
          buttonLabel={cta.buttonLabel}
          buttonHref={cta.buttonHref}
        />
      )}
      <LogoCarousel />
    </div>
  );
}
