import { Suspense } from "react";
import { notFound } from "next/navigation";

import SingleBlog from "@/app/components/SingleBlog";
import FeaturedBlogs from "@/app/components/FeaturedBlogs";
import Newsletter from "../../components/Newsletter";

import { allBlogPosts, getBlogPostBySlug } from "../../data/blogposts";

const newsletterData = {
  eyebrow: "LETTERS FROM AUREL",
  title: "A quieter kind of inbox.",
  description:
    "New chapters, thoughtful stories and first access to our collections.",
  placeholder: "Your email address",
  privacyText:
    "By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.",
  buttonLabel: "Subscribe to newsletter",
};

interface JournalPostProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function JournalContent({ params }: JournalPostProps) {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SingleBlog blog={post} />

      <FeaturedBlogs
        posts={allBlogPosts}
        currentPostId={post.id}
        categories={[]}
        title="More stories in this category"
        limit={3}
      />

      <Newsletter {...newsletterData} />
    </>
  );
}

export default function JournalPost({ params }: JournalPostProps) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen bg-[#f7f5f1]"
          aria-label="Loading journal article"
        />
      }
    >
      <JournalContent params={params} />
    </Suspense>
  );
}
