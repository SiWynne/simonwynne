"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "relume-icons";

const FALLBACK_IMAGE =
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";

export function Blog34({
  heading = "",
  subtitle = "",
  buttonLabel = "",
  buttonHref = "/blog",
  posts = [],
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
            <p className="text-medium">{subtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {posts.map((post) => {
            const href = `/blog/${post.slug}`;
            return (
              <div
                key={post.slug}
                className="flex size-full flex-col items-start justify-start text-start"
              >
                <Link href={href} className="mb-5 w-full md:mb-6">
                  <img
                    src={post.image || FALLBACK_IMAGE}
                    alt={post.title}
                    className="aspect-[3/2] size-full rounded-image object-cover"
                  />
                </Link>
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  {post.category && <Badge className="mr-4">{post.category}</Badge>}
                  <p className="inline text-small font-semibold">
                    {post.readTime} min read
                  </p>
                </div>
                <Link className="mb-2 flex justify-start text-start" href={href}>
                  <h2 className="text-h5 font-bold">{post.title}</h2>
                </Link>
                <p>{post.excerpt}</p>
                <Button
                  title="Read"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                  asChild
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  <Link href={href}>Read</Link>
                </Button>
              </div>
            );
          })}
        </div>
        {buttonLabel && (
          <div className="flex items-center justify-center">
            <Button
              title={buttonLabel}
              variant="secondary"
              asChild
              className="mt-12 md:mt-18 lg:mt-20"
            >
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
