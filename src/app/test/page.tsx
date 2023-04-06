"use client"

import { useSelectedLayoutSegments } from "next/navigation"
import { ChevronRightIcon, HomeIcon } from "lucide-react"

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments()

  return (
    <ul className="">
      {segments.map((segment, index) => (
        <li key={index}>{segment}</li>
      ))}
    </ul>

    // <nav className="flex" aria-label="Breadcrumb">
    //   <ol role="list" className="flex items-center space-x-4">
    //     <li>
    //       <div>
    //         <a href="#" className="text-gray-400 hover:text-gray-500">
    //           <HomeIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
    //           <span className="sr-only">Home</span>
    //         </a>
    //       </div>
    //     </li>
    //     {segments.map((segment, index) => (
    //       <li key={index}>
    //         <div className="flex items-center">
    //           <ChevronRightIcon
    //             className="h-5 w-5 shrink-0 text-gray-400"
    //             aria-hidden="true"
    //           />
    //           <a
    //             href="#"
    //             className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
    //             // aria-current={segment.current ? "page" : undefined}
    //           >
    //             {segment}
    //           </a>
    //         </div>
    //       </li>
    //     ))}
    //   </ol>
    // </nav>
  )
}
