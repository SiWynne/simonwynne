import React from "react";
import { Header15 } from "@/components/home/header-15";
import { Cta14 } from "@/components/home/cta-14";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { Event7 } from "@/components/home/event-07";
import { Portfolio11 } from "@/components/home/portfolio-11";
import { Outcomes } from "@/components/home/outcomes";
import { Blog34 } from "@/components/home/blog-34";
import { Event27 } from "@/components/home/event-27";
import { Contact17 } from "@/components/home/contact-17";
import { getAllCaseStudies, getWorkSection } from "@/lib/work";
import { getPostsBySlugs } from "@/lib/blog";
import {
  getHero,
  getEvents,
  getToolkitsAndPlaybooks,
  getVideos,
  getLogoCarousel,
  getBlog,
} from "@/lib/home";

export default function Page() {
  const hero = getHero();
  const events = getEvents();
  const toolkits = getToolkitsAndPlaybooks();
  const videos = getVideos();
  const logoCarousel = getLogoCarousel();
  const workSection = getWorkSection();
  const caseStudies = getAllCaseStudies();
  const blog = getBlog();
  const blogPosts = getPostsBySlugs(blog.featured);

  return (
    <div>
      <Header15
        heading={hero.heading}
        subtitle={hero.subtitle}
        buttons={hero.buttons}
      />
      <Cta14 />
      <LogoCarousel heading={logoCarousel.heading} logos={logoCarousel.logos} />
      <Event7
        heading={events.heading}
        subtitle={events.subtitle}
        buttonLabel={events.buttonLabel}
        buttonHref={events.buttonHref}
        cards={events.cards}
      />
      <Portfolio11
        heading={toolkits.heading}
        subtitle={toolkits.subtitle}
        buttonLabel={toolkits.buttonLabel}
        buttonHref={toolkits.buttonHref}
        cards={toolkits.cards}
      />
      <Outcomes heading={workSection.heading} caseStudies={caseStudies} />
      <Blog34
        heading={blog.heading}
        subtitle={blog.subtitle}
        buttonLabel={blog.buttonLabel}
        buttonHref={blog.buttonHref}
        posts={blogPosts}
      />
      <Event27
        heading={videos.heading}
        subtitle={videos.subtitle}
        buttonLabel={videos.buttonLabel}
        buttonHref={videos.buttonHref}
        watchLabel={videos.watchLabel}
        cards={videos.cards}
      />
      <Contact17 />
    </div>
  );
}
