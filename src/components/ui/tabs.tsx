"use client"

import { Tab } from "@headlessui/react"

import { cn } from "@/lib/utils"

const tabs = [
  { name: "My Account", href: "#", current: true },
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: false },
  { name: "Billing", href: "#", current: false },
]

export default function Tabs() {
  return (
    // <Tab.Group>
    //   <div className="sm:hidden">
    //     <label htmlFor="tabs" className="sr-only">
    //       Select a tab
    //     </label>

    //     <select
    //       id="tabs"
    //       name="tabs"
    //       className="block w-full rounded-md border-gray-300  focus:ring-0 "
    //     >
    //       {tabs.map((tab) => (
    //         <option key={tab.name}>{tab.name}</option>
    //       ))}
    //     </select>
    //   </div>
    //   <div className="hidden sm:block">
    //     <Tab.List
    //       className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
    //       aria-label="Tabs"
    //     >
    //       {Object.keys(categories).map((category, catIdx) => (
    //         <Tab
    //           key={category}
    //           className={({ selected }) =>
    //             cn(
    //               "group relative min-w-0 flex-1 overflow-hidden bg-white p-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10",
    //               catIdx === 0 ? "rounded-l-lg" : "",
    //               catIdx === tabs.length - 1 ? "rounded-r-lg" : "",
    //               selected
    //                 ? "text-gray-900"
    //                 : "text-gray-500 hover:text-gray-700"
    //             )
    //           }
    //         >
    //           <span>{category}</span>
    //           <span
    //             aria-hidden="true"
    //             className="absolute inset-x-0 bottom-0 h-0.5 ui-selected:bg-indigo-500  ui-not-selected:bg-transparent "
    //           />
    //         </Tab>
    //       ))}
    //     </Tab.List>
    //   </div>
    //   <Tab.Panels className="mt-2">
    //     {Object.values(categories).map((posts, idx) => (
    //       <Tab.Panel
    //         key={idx}
    //         className={cn(
    //           "rounded-xl bg-white p-3",
    //           "ring-opacity/60 ring-white ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2"
    //         )}
    //       >
    //         <ul>
    //           {posts.map((post) => (
    //             <li
    //               key={post.id}
    //               className="relative rounded-md p-3 hover:bg-gray-100"
    //             >
    //               <h3 className="text-sm font-medium leading-5">
    //                 {post.title}
    //               </h3>

    //               <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
    //                 <li>{post.date}</li>
    //                 <li>&middot;</li>
    //                 <li>{post.commentCount} comments</li>
    //                 <li>&middot;</li>
    //                 <li>{post.shareCount} shares</li>
    //               </ul>

    //               <a
    //                 href="#"
    //                 className={cn(
    //                   "absolute inset-0 rounded-md",
    //                   "ring-indigo-400 focus:z-10 focus:outline-none focus:ring-2"
    //                 )}
    //               />
    //             </li>
    //           ))}
    //         </ul>
    //       </Tab.Panel>
    //     ))}
    //   </Tab.Panels>
    // </Tab.Group>
    <Tab.Group as="div">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          // defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <Tab.List
          as="nav"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <Tab
              key={tab.name}
              className={cn(
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white p-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 ui-selected:text-gray-900 ui-selected:hover:text-gray-700 ui-not-selected:text-gray-500"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 ui-selected:bg-indigo-500 ui-not-selected:bg-transparent"
              />
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="mt-10">
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
