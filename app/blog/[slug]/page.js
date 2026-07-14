import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "relume-icons";

const FALLBACK_IMAGE =
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — SimonWynne`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
        <div className="container">
          <div className="w-full max-w-lg">
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">{post.category}</Badge>
              <p className="inline text-small font-semibold">
                {post.readTime} min read
              </p>
            </div>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">{post.title}</h1>
            <p className="text-medium">{post.excerpt}</p>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-12 w-full overflow-hidden md:mb-16">
              <img
                src={post.image || FALLBACK_IMAGE}
                alt={post.title}
                className="aspect-video size-full rounded-image object-cover"
              />
            </div>
            <div className="prose max-w-none">
              <MDXRemote source={post.content} />
            </div>
            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-2 text-small font-semibold md:mt-16"
            >
              <ChevronLeft />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
