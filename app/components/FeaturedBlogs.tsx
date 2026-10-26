import  Link from "next/link";
import Image from "next/image";

import type { BlogPost } from "../data/blogposts";

interface FeaturedBlogsProps {
  posts: BlogPost[];
  currentPostId: string;
  categories?: string[];
  title?: string;
  limit?: number;
}

export default function FeaturedBlogs({
  posts,
  currentPostId,
  categories = [],
  title = "You may also enjoy",
  limit = 3,
}: FeaturedBlogsProps) {
  // Get the current blog post
  const currentPost = posts.find((post) => post.id === currentPostId);

  // Remove empty category values
  const selectedCategories = categories.filter(
    (category) => category.trim() !== "",
  );

  // Use manually selected categories, or fall back to
  // the current blog's categories automatically
  const activeCategories =
    selectedCategories.length > 0
      ? selectedCategories
      : (currentPost?.categories ?? []);

  // Find related posts matching at least one active category
  const relatedPosts = posts
    .filter(
      (post) =>
        post.id !== currentPostId &&
        post.categories?.some((postCategory) =>
          activeCategories.some(
            (category) => category.toLowerCase() === postCategory.toLowerCase(),
          ),
        ),
    )
    .slice(0, limit);

  // Hide the section if no related posts are available
  if (relatedPosts.length === 0) return null;

  return (
    <section className="bg-[#f7f5f1] px-4 py-12 text-[#292923] sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#646951]">
              {activeCategories.join(" · ")}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
              {title}
            </h2>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 self-start border-b border-[#85817b] pb-1 text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-[#292923] sm:self-auto"
          >
            Explore the journal <span>↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
          {relatedPosts.map((post) => (
            <article key={post.id} className="group min-w-0">
              <Link href={post.slug} className="block overflow-hidden">
                <div className="aspect-4/3 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Link>

              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.14em] text-[#807c74]">
                <span>{post.categories.join(" · ")}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="mt-3 font-serif text-xl font-normal leading-snug sm:text-2xl">
                <Link href={post.slug}
                  className="transition-colors hover:text-[#646951]"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#807c74]">
                {post.excerpt}
              </p>

              <Link href={post.slug}
                className="mt-5 inline-flex items-center gap-2 border-b border-[#85817b] pb-1 text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-[#292923]"
              >
                Read the story <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
