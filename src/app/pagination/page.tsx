"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pick } from "@contentlayer/client"
import { allPosts } from "contentlayer/generated"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ReactPaginate from "react-paginate"

import { slugify } from "@/lib/slugify"
import { Separator } from "@/components/ui/separator"

const posts = allPosts
  .map((post) =>
    pick(post, [
      "title",
      "slug",
      "publishedAt",
      "excerpt",
      "draft",
      "image",
      "tags",
      "categories",
    ])
  )
  .sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })

function Posts({ currentPosts }) {
  return (
    <>
      {currentPosts &&
        currentPosts.map((post) => (
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
                {post.categories?.map((category: { title }) => (
                  <Link
                    key={category.title}
                    href={`/blog/category/${slugify(category.title!)}`}
                    className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
                  >
                    {category.title}
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
                  {post.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
    </>
  )
}

function PaginatedPosts({ postsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [postOffset, setPostOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = postOffset + postsPerPage
  console.log(`Loading items from ${postOffset} to ${endOffset}`)
  const currentPosts = posts.slice(postOffset, endOffset)
  const pageCount = Math.ceil(posts.length / postsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * postsPerPage) % posts.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setPostOffset(newOffset)
  }

  return (
    <>
      <Posts currentPosts={currentPosts} />

      <ReactPaginate
        activeLinkClassName="bg-gray-100"
        pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        className="  hidden max-w-fit gap-4 sm:flex sm:flex-1 sm:items-center sm:justify-between"
        breakLabel="..."
        nextLabel={
          <div className="flex items-center text-sm">
            <span>Next</span>
            <ArrowRight className="ml-2 h-5 w-5  text-gray-400" />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div className="flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5  text-gray-400" />
            <span className="text-sm">Previous</span>
          </div>
        }
        renderOnZeroPageCount={null}
      />
    </>
  )
}

function PaginationPage() {
  return (
    <div className="container mx-auto grid  items-center gap-6 pb-8 pt-6 md:py-10">
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
          </a>{" "}
          and it&apos;s{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://mdxjs.com/"
          >
            MDX
          </a>{" "}
          support via this{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href=" https://github.com/kentcdodds/mdx-bundler"
          >
            MDX Bundler
          </a>{" "}
          package.
        </p>
        <small className="italic text-gray-500">
          * This solution is meant to be used if client does not require a CMS
          yet would still like some sort of blog functionality.
        </small>
      </section>
      <Separator className="my-4 " />
      <div className="relative flex  flex-col gap-10">
        <PaginatedPosts postsPerPage={2} />
      </div>
    </div>
  )
}

export default PaginationPage
