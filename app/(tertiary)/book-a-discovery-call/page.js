import React from "react";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { BookingCalendar } from "@/components/discovery-call/booking-calendar";
import { getDiscoveryCall } from "@/lib/discovery-call";

export function generateMetadata() {
  const { title, intro } = getDiscoveryCall();
  return { title: `${title} — SimonWynne`, description: intro };
}

export default function Page() {
  const call = getDiscoveryCall();

  return (
    <div>
      <HeaderAreas
        title={call.title}
        intro={call.intro}
        backLabel={call.backLabel}
        backHref={call.backHref}
      />
      <BookingCalendar
        formHeading={call.formHeading}
        submitLabel={call.submitLabel}
        successHeading={call.successHeading}
        successMessage={call.successMessage}
        calUsername={call.calUsername}
        calEventSlug={call.calEventSlug}
        availability={call.availability}
        fallbackEmail={call.fallbackEmail}
      />
    </div>
  );
}
