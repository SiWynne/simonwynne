import React from "react";
import { Header64 } from "@/components/services/header-64";
import { Layout239 } from "@/components/services/layout-239";
import { Layout237 } from "@/components/services/layout-237";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Testimonial1 } from "@/components/services/testimonial-01";
import { ServiceAreasLink } from "@/components/services/service-areas-link";
import { Cta1 } from "@/components/services/cta-01";
import { getServices } from "@/lib/services";
import { getLogoCarousel } from "@/lib/home";

export function generateMetadata() {
  const { title, intro } = getServices();
  return { title: `${title} — SimonWynne`, description: intro };
}

export default function Page() {
  const services = getServices();
  const logoCarousel = getLogoCarousel();

  return (
    <div>
      <Header64 title={services.title} intro={services.intro} />
      <Layout239 />
      <Layout237 />
      <Testimonial1 />
      <ServiceAreasLink />
      <LogoCarousel heading={logoCarousel.heading} logos={logoCarousel.logos} />
      <Cta1 />
    </div>
  );
}
