import React from "react";
import { Header64 } from "@/components/how-i-work/header-64";
import { Layout300 } from "@/components/how-i-work/layout-300";
import { Layout192 } from "@/components/how-i-work/layout-192";
import { Testimonial1 } from "@/components/how-i-work/testimonial-01";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Cta1 } from "@/components/how-i-work/cta-01";
import { getLogoCarousel } from "@/lib/home";
import { getHowIWork } from "@/lib/how-i-work";

export function generateMetadata() {
  const { header } = getHowIWork();
  return { title: `${header.title} — SimonWynne`, description: header.intro };
}

export default function Page() {
  const logoCarousel = getLogoCarousel();
  const { header, approach, transparency, testimonial, cta } = getHowIWork();

  return (
    <div>
      <Header64 title={header.title} intro={header.intro} />
      <Layout300
        heading={approach.heading}
        intro={approach.intro}
        steps={approach.steps}
        buttons={approach.buttons}
      />
      <Layout192
        heading={transparency.heading}
        intro={transparency.intro}
        image={transparency.image}
        imageAlt={transparency.imageAlt}
        buttons={transparency.buttons}
      />
      <Testimonial1 {...testimonial} />
      <LogoCarousel heading={logoCarousel.heading} logos={logoCarousel.logos} />
      <Cta1
        heading={cta.heading}
        intro={cta.intro}
        image={cta.image}
        imageAlt={cta.imageAlt}
        buttons={cta.buttons}
      />
    </div>
  );
}
