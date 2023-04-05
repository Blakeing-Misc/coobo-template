import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { pick } from "@contentlayer/client"
import { allPosts } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { slugify } from "@/lib/slugify"
import { Mdx } from "@/components/ui/mdx"
import { Separator } from "@/components/ui/separator"

interface Params {
  slug: string
}

export async function generateStaticParams() {
  const categories = new Set(allPosts.flatMap((p) => p.categories))
  // console.log("categories:", categories)
  const paths = Array.from(categories).map((category) => ({
    params: { category },
  }))
  // console.log("paths:", paths)
  return paths
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Params
// }): Promise<Metadata | undefined> {
//   const post = allPosts.find((post) => post.slug === params.slug)
//   if (!post) {
//     return
//   }

//   const {
//     title,
//     publishedAt: publishedTime,
//     excerpt: description,
//     image,
//     slug,
//   } = post
//   const ogImage = image
//     ? `${siteConfig.url}${image}`
//     : `${siteConfig.url}/api/og?title=${title}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${siteConfig.url}/blog/${slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

// interface BlogProps {
//   params: {
//     slug: string
//   }
// }

export default async function CategoryPage({ params }) {
  const posts = allPosts.map((post) =>
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

  const filteredPosts = posts.filter((post) => {
    const matchingCategories = post.categories.filter((cat) => {
      const slugifiedCat = slugify(cat.title!)
      return slugifiedCat === params.category
    })
    return matchingCategories.length > 0
  })

  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex  flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold capitalize leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Category: {params.category}
        </h1>
      </section>
      <Separator className="my-4 " />
      <div className="space-y-20  lg:space-y-20">
        {filteredPosts
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
                  {post.categories?.map((tag) => (
                    <Link
                      key={tag.title}
                      href={`/blog/category/${slugify(tag.title!)}`}
                      className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"
                    >
                      {tag.title}
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
      </div>
    </div>
  )
}
