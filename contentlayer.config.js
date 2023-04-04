import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },

  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "Posts",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://leerob.io${doc.image}`
        : `https://leerob.io/api/og?title=${doc.title}`,
      url: `https://leerob.io/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Lee Robinson",
      },
    }),
  },
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
})
