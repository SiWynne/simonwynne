import React from "react";
import Link from "next/link";
import { BackLink } from "@/components/back-link";

/**
 * `historyBack` sends the back link to wherever the visitor actually came
 * from, falling back to backLabel/backHref. Pages reached from one fixed place
 * in the hierarchy (service areas, which sits under Services) pass false and
 * keep the static link.
 */
export function HeaderAreas({
  title,
  intro,
  backLabel,
  backHref,
  historyBack = true,
}) {
  const linkClasses =
    "mb-5 inline-block font-semibold underline underline-offset-4";

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="w-full max-w-lg">
          {historyBack ? (
            <BackLink
              fallbackLabel={backLabel}
              fallbackHref={backHref}
              className={linkClasses}
            />
          ) : (
            backLabel &&
            backHref && (
              <Link href={backHref} className={linkClasses}>
                {backLabel}
              </Link>
            )
          )}
          <h1 className="mb-5 text-h1 font-bold md:mb-6">{title}</h1>
          <p className="text-medium">{intro}</p>
        </div>
      </div>
    </section>
  );
}
