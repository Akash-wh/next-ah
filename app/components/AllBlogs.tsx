import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

interface JournalPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: StaticImageData | string;
  imageAlt: string;
  date: string;
  readTime: string;
  slug: string;
}

interface JournalProps {
  eyebrow: string;
  title: string;
  description: string;
  featuredPost: JournalPost;
  posts: JournalPost[];
  viewAllText?: string;
  viewAllUrl?: string;
}

export default function Journal({
  eyebrow,
  title,
  description,
  featuredPost,
  posts,
  viewAllText,
  viewAllUrl,
}: JournalProps) {
  return (
    <section className="bg-[#f7f5f1] text-[#292923]">
      {/* Journal hero */}
      <div className="mx-auto px-5 py-8 sm:px-8 sm:py-8 lg:px-8 lg:py-15">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951] sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight sm:text-3xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
            {description}
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#a7a795]" />
        </div>
      </div>

      {/* Featured article */}
      <div className="mx-auto px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <Link
          href={featuredPost.slug}
          className="group grid grid-cols-1 overflow-hidden border border-[#e5e1d9] md:grid-cols-2"
        >
          <div className="aspect-4/3 overflow-hidden bg-[#e8e4db] md:aspect-auto md:min-h-105">
            <Image
              src={featuredPost.image}
              alt={featuredPost.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-[#646951]">
              <span>{featuredPost.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#a7a795]" />
              <span>{featuredPost.readTime}</span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
              {featuredPost.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
              {featuredPost.excerpt}
            </p>

            <div className="mt-8 flex items-center justify-between gap-4 border-b border-[#d7d3c9] pb-3">
              <span className="text-xs text-[#807c74]">
                {featuredPost.date}
              </span>

              <span className="text-xs uppercase tracking-[0.18em] transition-colors group-hover:text-[#646951]">
                Read story <span aria-hidden="true">↗</span>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Journal posts */}
      <div className="border-t border-[#e5e1d9]">
        <div className="mx-auto px-5 py-8 sm:px-5 sm:py-8 lg:px-12 lg:py-15">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
                THE LATEST
              </p>

              <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
                Stories to keep
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#807c74]">
              Inspiration, thoughtful details, and a closer look at the world of
              AUREL.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {posts.map((post) => (
              <article key={post.id} className="group min-w-0">
                <Link href={post.slug}
                  className="block overflow-hidden bg-[#e8e4db]"
                  aria-label={`Read ${post.title}`}
                >
                  <div className="aspect-4/5 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-[#646951]">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#a7a795]" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-normal leading-snug sm:text-3xl">
                  <Link href={post.slug}
                    className="transition-colors hover:text-[#646951]"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#807c74]">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-b border-[#dedbd1] pb-3">
                  <span className="text-xs text-[#807c74]">{post.date}</span>

                  <Link href={post.slug}
                    className="shrink-0 text-xs uppercase tracking-[0.15em] transition-colors hover:text-[#646951]"
                  >
                    Read more ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {viewAllUrl && (
            <div className="mt-12 text-center sm:mt-16">
              <Link href={viewAllUrl}
                className="inline-flex items-center justify-center border border-[#858873] px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#646951] hover:text-white sm:px-9"
              >
                {viewAllText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
