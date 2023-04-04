import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"

import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

function BlogPage() {
  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex  flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Blog
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          This is a blog demo demonstrating the use of the{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://www.contentlayer.dev/"
          >
            Contentlayer
          </a>
          .
        </p>
        <small className="italic text-gray-500">
          * This solution is meant to be used if client does not require a CMS
          yet would still like some sort of blog functionality that would be
          easy for us to update.
        </small>
      </section>
      <Separator className="my-4 " />
      <div className="space-y-20  lg:space-y-20">
        {allPosts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <article
              key={post.slug}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <Image
                  src={post.image!}
                  fill
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-slate-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedAt} className="text-slate-500">
                    {post.publishedAt}
                  </time>
                  {post.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/${slugify(tag)}`}
                      className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {post.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  )
}

export default BlogPage
