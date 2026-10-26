import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

export interface BlogArticleData {
  id: string;
  categories: string[];
  title: string;
  excerpt: string;
  image: StaticImageData | string;
  imageAlt: string;
  date: string;
  readTime: string;
  slug: string;
  content: {
    heading?: string;
    paragraphs: string[];
    quote?: string;
  }[];
}

interface SingleBlogProps {
  blog: BlogArticleData;
  backUrl?: string;
}

export default function SingleBlog({
  blog,
  backUrl = "/journal",
}: SingleBlogProps) {
  return (
    <main className="bg-[#f7f5f1] text-[#292923]">
      {/* Article heading */}
      <section className="px-5 pb-8 pt-8 sm:px-5 sm:pb-8 sm:pt-8 lg:px-10 lg:pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href={backUrl}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#807c74] transition-colors hover:text-[#292923]"
          >
            <span aria-hidden="true">←</span>
            Back to journal
          </Link>

          <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[#646951]">
            {blog.categories.join(" · ")}
          </p>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
            {blog.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.12em] text-[#807c74]">
            <time>{blog.date}</time>
            <span aria-hidden="true">·</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="aspect-4/3 overflow-hidden bg-[#eeece5] sm:aspect-video lg:aspect-2/1">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Article content */}
      <article className="px-5 py-8 sm:px-6 sm:py-8 lg:py-15">
        <div className="mx-auto max-w-5xl">
          {blog.content.map((section, index) => (
            <section
              key={`${blog.id}-${index}`}
              className="mb-8 last:mb-0 sm:mb-10"
            >
              {section.heading && (
                <h2 className="mb-5 font-serif text-2xl font-normal leading-tight sm:text-3xl">
                  {section.heading}
                </h2>
              )}

              <div className="space-y-5 text-sm leading-8 text-[#5e5b54] sm:text-base sm:leading-9">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>

              {section.quote && (
                <blockquote className="my-8 border-l border-[#858873] py-2 pl-6 font-serif text-xl italic leading-relaxed text-[#646951] sm:my-10 sm:text-2xl">
                  “{section.quote}”
                </blockquote>
              )}
            </section>
          ))}

          {/* Back to journal */}
          <div className="mt-12 border-t border-[#dedbd1] pt-6 sm:mt-16">
            <Link
              href={backUrl}
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[#646951]"
            >
              <span aria-hidden="true">←</span>
              Explore more stories
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
