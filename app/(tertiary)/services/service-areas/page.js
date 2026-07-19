import React from "react";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { ServiceAreasList } from "@/components/service-areas/service-areas-list";
import { CtaAreas } from "@/components/service-areas/cta-areas";
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
      <HeaderAreas
        title={title}
        intro={intro}
        backLabel={backLabel}
        backHref={backHref}
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
    </div>
  );
}
