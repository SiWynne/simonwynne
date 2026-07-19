import { Blog18 } from "@/components/blog/blog-18";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { getAllCategories, getAllPosts } from "@/lib/blog";

export default function Page() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div>
      <Blog18 posts={posts} categories={categories} />
      <LogoCarousel />
    </div>
  );
}
