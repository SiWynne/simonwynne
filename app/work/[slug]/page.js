import { Badge } from "@/components/ui/badge";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/work";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "relume-icons";

const FALLBACK_IMAGE =
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const study = getCaseStudyBySlug(slug);
    return { title: `${study.title} — SimonWynne`, description: study.excerpt };
  } catch {
    return {};
  }
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  let study;
  try {
    study = getCaseStudyBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light badge-alt">
        <div className="container">
          <div className="w-full max-w-lg">
            <div className="mb-3 flex w-full items-center justify-start md:mb-4">
              <Badge className="mr-4">{study.category}</Badge>
            </div>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">{study.title}</h1>
            <p className="text-medium">{study.excerpt}</p>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-12 w-full overflow-hidden md:mb-16">
              <img
                src={study.image || FALLBACK_IMAGE}
                alt={study.title}
                className="aspect-video size-full rounded-image object-cover"
              />
            </div>
            <div className="prose max-w-none">
              <MDXRemote source={study.content} />
            </div>
            <Link
              href="/"
              className="mt-12 inline-flex items-center gap-2 text-small font-semibold md:mt-16"
            >
              <ChevronLeft />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
