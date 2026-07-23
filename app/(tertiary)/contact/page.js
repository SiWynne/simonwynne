import React from "react";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMethods } from "@/components/contact/contact-methods";
import { getContact } from "@/lib/contact";

export function generateMetadata() {
  const { title, intro } = getContact();
  return { title: `${title} — SimonWynne`, description: intro };
}

export default function Page() {
  const { title, intro, backLabel, backHref, formEndpoint, enquiryTypes, methods } =
    getContact();

  const emailMethod = methods.find((method) => method.icon === "mail");

  return (
    <div>
      <HeaderAreas
        title={title}
        intro={intro}
        backLabel={backLabel}
        backHref={backHref}
      />
      <ContactForm
        endpoint={formEndpoint}
        fallbackEmail={emailMethod?.value}
        enquiryTypes={enquiryTypes}
      />
      <ContactMethods methods={methods} />
    </div>
  );
}
