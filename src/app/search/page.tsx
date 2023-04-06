"use client"

import { useRouter, useSearchParams } from "next/navigation"
import useSWR from "swr"

import { PaginatedPosts } from "@/components/pagination"
import SearchInput from "@/components/search-input"
import { Separator } from "@/components/ui/separator"

const fetchPosts = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  return response.json()
}

const SearchPage = () => {
  const search = useSearchParams()
  const searchQuery = search ? search.get("q") : null
  const router = useRouter()

  const encodedSearchQuery = encodeURI(searchQuery || "")

  const { data, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPosts,

    { revalidateOnFocus: false }
  )

  if (!encodedSearchQuery) {
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <section className="flex  flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl">
            Showing results for:
          </h1>
          <p className=" text-lg text-accent-700 sm:text-xl">{searchQuery}</p>
        </section>
        <Separator className="my-4 " />
        <div className="mt-10 ">
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 ">
            Loading...
          </h2>
        </div>
      </div>
    )
  }

  if (!data?.filteredPosts || data?.filteredPosts.length < 1) {
    return (
      <div className="flex flex-col gap-6">
        <section className="flex  flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold  leading-tight tracking-tighter sm:text-3xl">
            Showing results for:
          </h1>
          <p className=" text-lg text-accent-700 sm:text-xl">{searchQuery}</p>
        </section>
        <Separator className="my-4 " />
        <div className="mt-10 ">
          <h2 className="s mt-4 text-2xl font-bold tracking-tight text-gray-900">
            Page not found
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 4)}</pre> */}

      <div className="flex flex-col gap-6">
        <section className="flex  flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold  leading-tight tracking-tighter sm:text-3xl">
            Showing results for:
          </h1>
          <p className=" text-lg text-accent-700 sm:text-xl">{searchQuery}</p>
        </section>
        <Separator className="my-4 " />
        <div className="mt-10 space-y-20 lg:space-y-20">
          <PaginatedPosts posts={data.filteredPosts} postsPerPage={2} />
        </div>
      </div>
    </>
  )
}

export default SearchPage
