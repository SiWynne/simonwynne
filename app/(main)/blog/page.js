import { Blog18 } from "@/components/blog/blog-18";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { getAllCategories, getAllPosts } from "@/lib/blog";
import { getLogoCarousel } from "@/lib/home";

export default function Page() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const logoCarousel = getLogoCarousel();

  return (
    <div>
      <Blog18 posts={posts} categories={categories} />
      <LogoCarousel heading={logoCarousel.heading} logos={logoCarousel.logos} />
    </div>
  );
}
