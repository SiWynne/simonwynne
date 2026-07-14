import { Blog18 } from "@/components/blog/blog-18";
import { Logo3 } from "@/components/blog/logo-03";
import { getAllCategories, getAllPosts } from "@/lib/blog";

export default function Page() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div>
      <Blog18 posts={posts} categories={categories} />
      <Logo3 />
    </div>
  );
}
