import React from "react";
import { notFound } from "next/navigation";
import { HeaderAreas } from "@/components/service-areas/header-areas";
import { SignupForm } from "@/components/forms/signup-form";
import { getAllWaitingLists, getWaitingListBySlug } from "@/lib/waiting-lists";

export function generateStaticParams() {
  return getAllWaitingLists().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { title, intro } = getWaitingListBySlug(slug);
    return { title: `${title} — SimonWynne`, description: intro };
  } catch {
    return {};
  }
}

export default async function Page({ params }) {
  const { slug } = await params;

  let list;
  try {
    list = getWaitingListBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div>
      <HeaderAreas
        title={list.title}
        intro={list.intro}
        backLabel={list.backLabel}
        backHref={list.backHref}
      />
      <SignupForm
        title={list.title}
        heading={list.formHeading}
        submitLabel={list.submitLabel}
        successMessage={list.successMessage}
        endpoint={list.formEndpoint}
        fallbackEmail={list.fallbackEmail}
        fields={list.fields}
      />
    </div>
  );
}
