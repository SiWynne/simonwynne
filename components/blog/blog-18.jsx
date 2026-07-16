"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "relume-icons";

const FALLBACK_IMAGE =
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";

function PostCard({ post, featured = false }) {
  return (
    <div>
      <Link
        href={`/blog/${post.slug}`}
        className="mb-6 inline-block w-full max-w-full"
      >
        <div className="w-full overflow-hidden">
          <img
            src={post.image || FALLBACK_IMAGE}
            alt={post.title}
            className="aspect-video size-full rounded-image object-cover"
          />
        </div>
      </Link>
      <div className="mb-3 flex w-full items-center justify-start md:mb-4">
        <Badge className="mr-4">{post.category}</Badge>
        <p className="inline text-small font-semibold">
          {post.readTime} min read
        </p>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className={
          featured
            ? "mb-4 block max-w-full text-h4 font-bold"
            : "mb-2 block max-w-full text-h5 font-bold"
        }
      >
        {post.title}
      </Link>
      <p>{post.excerpt}</p>
      <Button
        asChild
        variant="link"
        size="link"
        className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
      >
        <Link href={`/blog/${post.slug}`}>
          Read more <ChevronRight className="text-scheme-text" />
        </Link>
      </Button>
    </div>
  );
}

function CategoryPosts({ posts }) {
  if (posts.length === 0) {
    return <p className="text-medium">No posts in this category yet.</p>;
  }

  const [featuredPost, ...restPosts] = posts;

  return (
    <>
      <PostCard post={featuredPost} featured />
      {restPosts.length > 0 && (
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
          {restPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

export function Blog18({ posts = [], categories = [] }) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 badge-alt alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Stories worth reading
            </h1>
            <p className="text-medium">
              Thoughts on craft, life, and the work that matters
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="view-all"
          className="grid grid-cols-1 gap-x-12 gap-y-8 text-left md:grid-cols-[0.25fr_1fr] md:gap-x-12 md:gap-y-12 lg:grid-cols-[15rem_1fr] lg:gap-x-16"
        >
          <TabsList className="flex w-full flex-col">
            <div className="mb-6 text-h6 font-bold">Categories</div>
            <TabsTrigger
              value="view-all"
              className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
            >
              View all
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="items-start justify-start rounded-button px-4 py-3 data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <CategoryPosts posts={posts} />
          </TabsContent>
          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="data-[state=active]:animate-tabs"
            >
              <CategoryPosts
                posts={posts.filter((post) => post.category === category)}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
