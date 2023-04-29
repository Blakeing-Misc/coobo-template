"use client"

import { SetStateAction, useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { RegistrationForm } from "@/components/ui/form/registration-form"
import image1 from "../../../public/images/blog-image-1.jpg"
import image2 from "../../../public/images/blog-image-2.jpg"
import image3 from "../../../public/images/blog-image-3.jpg"

// const placeholderImage = "https://source.unsplash.com/random/512x512/?news"

const listItems = [
  {
    id: 1,
    title: "Item 1",
    image: image1,
  },
  {
    id: 2,
    title: "Item 2",
    image: image2,
  },
  {
    id: 3,
    title: "Item 3",
    image: image3,
  },

  // add more items as needed
]

function TestPage() {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)
  const hoveredItem = listItems.find((item) => item.id === hoveredItemId)
  const [lastHoveredItemId, setLastHoveredItemId] = useState<number | null>(
    null
  )
  const lastHoveredItem = listItems.find(
    (item) => item.id === lastHoveredItemId
  )

  const handleMouseEnter = (itemId: SetStateAction<number | null>) => {
    setHoveredItemId(itemId)
  }

  const handleMouseLeave = (itemId: SetStateAction<number | null>) => {
    setHoveredItemId(null)
    setLastHoveredItemId(itemId)
  }

  useEffect(() => {
    if (hoveredItem && hoveredItem.id !== lastHoveredItemId) {
      const lastImage = document.getElementById(`image-${lastHoveredItemId}`)
      const currentImage = document.getElementById(`image-${hoveredItem.id}`)

      lastImage?.classList.replace("fade-in", "fade-out")
      currentImage?.classList.replace("fade-out", "fade-in")

      setLastHoveredItemId(hoveredItem.id)
    }
  }, [hoveredItem, lastHoveredItemId])

  return (
    <div className="container mx-auto py-16">
      <div className="body ">
        <h2>Resusable Form</h2>
      </div>
      <RegistrationForm />
      <div className="body mt-10 ">
        <h2>Dynamic Image on Hover with Fade In/Out Animation</h2>
      </div>
      <div className="mt-10 grid max-w-fit grid-cols-2 justify-between gap-x-12">
        <ul className="max-w-fit space-y-4">
          {listItems.map((item) => (
            <li
              key={item.id}
              className=" cursor-pointer bg-primary-500 p-4 text-white"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div className="relative ml-auto flex aspect-square h-full">
          {hoveredItem ? (
            <Image
              id={`image-${hoveredItem.id}`}
              className={cn("rounded-lg bg-gray-100 object-cover", {
                "fade-in": hoveredItem,
                "fade-out":
                  lastHoveredItem && lastHoveredItem.id !== hoveredItemId,
              })}
              src={hoveredItem!.image}
              fill
              alt={hoveredItem!.title}
            />
          ) : lastHoveredItem ? (
            <Image
              id={`image-${lastHoveredItem.id}`}
              className="rounded-lg bg-gray-100 object-cover"
              src={lastHoveredItem.image}
              fill
              alt={lastHoveredItem.title}
            />
          ) : (
            <Image
              className="rounded-lg bg-gray-100 object-cover"
              // src={placeholderImage}
              src="https://source.unsplash.com/random/512x512/?news"
              fill
              alt="Placeholder"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TestPage
