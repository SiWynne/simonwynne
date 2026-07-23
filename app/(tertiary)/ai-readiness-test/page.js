import React from "react";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { ReadinessTest } from "@/components/ai-readiness/readiness-test";
import { getAiReadiness } from "@/lib/ai-readiness";

export function generateMetadata() {
  const { title, intro } = getAiReadiness();
  return { title: `${title} — SimonWynne`, description: intro };
}

export default function Page() {
  const readiness = getAiReadiness();

  return (
    <div>
      <HeaderAreas
        title={readiness.title}
        intro={readiness.intro}
        backLabel={readiness.backLabel}
        backHref={readiness.backHref}
      />
      <ReadinessTest
        questions={readiness.questions}
        opportunities={readiness.opportunities}
        readinessHeading={readiness.readinessHeading}
        readinessBands={readiness.readinessBands}
        resultsHeading={readiness.resultsHeading}
        resultsIntro={readiness.resultsIntro}
      />
    </div>
  );
}
