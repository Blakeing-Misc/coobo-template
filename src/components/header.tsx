"use client"

import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid"
import {
  Bars3Icon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

const engagement = [
  {
    id: "1",
    name: "About",
    href: "#",
    icon: InformationCircleIcon,
    title: "Boost your conversion rate",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    description:
      "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
  },
  {
    id: "2",
    title: "How to use search engine optimization to drive sales",
    name: "Customers",
    href: "#",
    icon: UsersIcon,
    date: "Mar 10, 2023",
    datetime: "2023-03-10",
    category: { title: "Customers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et.",
  },
  {
    id: "3",
    title:
      "Eget velit aliquet sagittis id consectetur. Vitae semper quis lectus nulla at volutpat diam ut.",
    name: "Press",
    href: "#",
    icon: NewspaperIcon,
    date: "Aug 27, 2023",
    datetime: "2023-08-27",
    category: { title: "Press", href: "#" },
    imageUrl: "https://source.unsplash.com/random/?press",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    title: "In massa tempor nec feugiat nisl pretium fusce id velit.",
    name: "Careers",
    href: "#",
    icon: BriefcaseIcon,
    date: "April 9, 2023",
    datetime: "2023-04-9",
    category: { title: "Careers", href: "#" },
    imageUrl: "https://source.unsplash.com/random/?careers",
    description:
      "Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Euismod elementum nisi quis eleifend quam adipiscing.",
  },
  {
    id: "5",
    title: "Ac odio tempor orci dapibus ultrices in iaculis.",
    name: "Privacy",
    href: "#",
    icon: ShieldCheckIcon,
    date: "April 27, 2023",
    datetime: "2023-04-27",
    category: { title: "Privacy", href: "#" },
    imageUrl: "https://source.unsplash.com/random/?privacy",
    description:
      "Nisl rhoncus mattis rhoncus urna neque. Sed enim ut sem viverra.",
  },
  // { id: "3", name: "Press", href: "#", icon: NewspaperIcon },
  // { id: "4", name: "Careers", href: "#", icon: BriefcaseIcon },
  // { id: "5", name: "Privacy", href: "#", icon: ShieldCheckIcon },
]
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookOpenIcon },
  { name: "Webinars", href: "#", icon: VideoCameraIcon },
]
const recentPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    description:
      "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    date: "Mar 10, 2023",
    datetime: "2023-03-10",
    category: { title: "Sales", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et.",
  },
]

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
]

interface SiteHeaderProps {
  position?: "fixed" | "sticky" | "relative"
  className?: string
}

const placeholderImage =
  "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"

export default function Header({ position, className }: SiteHeaderProps) {
  const [hoveredItemId, setHoveredItemId] = useState(null)
  const hoveredItem = engagement.find((item) => item.id === hoveredItemId)
  const [lastHoveredItemId, setLastHoveredItemId] = useState(null)
  const lastHoveredItem = engagement.find(
    (item) => item.id === lastHoveredItemId
  )

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId)
  }

  const handleMouseLeave = (itemId) => {
    setHoveredItemId(null)
    setLastHoveredItemId(itemId)
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const headerHeight = document.querySelector("header")!.offsetHeight
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    )
    console.log(headerHeight)
  }, [])

  return (
    <header
      className={cn(
        position,
        className,
        "top-0 isolate z-20 w-full border-b border-b-accent-200 bg-white "
      )}
    >
      <nav
        className="container mx-auto flex items-center justify-between py-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            aria-label="Navigate to home."
            className="-m-1.5 p-1.5"
          >
            <Icons.logo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {siteConfig.mainNav?.length ? (
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {siteConfig.mainNav?.map(
              (item, index) =>
                item.slug && <GlobalNavItem key={index} item={item} />
            )}
            <Popover>
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-accent-600 hover:text-accent-900">
                Mega 1
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-accent-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 -z-20 bg-white pt-14 shadow-lg ring-1 ring-accent-900/5">
                  <div className="container mx-auto grid grid-cols-4 gap-x-4  py-10  xl:gap-x-8">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-accent-50"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-accent-600 group-hover:text-primary-600"
                            aria-hidden="true"
                          />
                        </div>
                        <a
                          href={item.href}
                          className="mt-6 block font-semibold text-accent-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-accent-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-accent-900/5 border-x border-accent-900/5">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-accent-900 hover:bg-accent-100"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-accent-400"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover>
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-accent-600 hover:text-accent-900">
                Mega 2
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-accent-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 -z-20 bg-white pt-14 shadow-lg ring-1 ring-accent-900/5">
                  <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-10  py-10 lg:grid-cols-2 ">
                    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                      <div>
                        <h3 className="text-sm font-medium leading-6 text-gray-500">
                          Engagement
                        </h3>
                        <div className="mt-6 flow-root">
                          <div className="-my-2">
                            {engagement.map((item) => (
                              <a
                                key={item.id}
                                href={item.href}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={() => handleMouseLeave(item.id)}
                                className=" flex cursor-pointer gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-900/20"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-none text-gray-400"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium leading-6 text-gray-500">
                          Resources
                        </h3>
                        <div className="mt-6 flow-root">
                          <div className="-my-2">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-none text-gray-400"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:gap-8 ">
                      <h3 className="sr-only">Recent posts</h3>
                      {engagement.slice(0, 1).map((post) => (
                        <article
                          key={post.id}
                          className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                        >
                          <div className="relative flex-none">
                            <div className="aspect-[2/1] w-full   sm:aspect-[16/9] sm:h-32 lg:h-auto">
                              {hoveredItem ? (
                                <Image
                                  className="rounded-lg bg-gray-100 object-cover "
                                  src={hoveredItem.imageUrl}
                                  fill
                                  alt={hoveredItem.title}
                                />
                              ) : lastHoveredItem ? (
                                <Image
                                  className="rounded-lg bg-gray-100 object-cover "
                                  src={lastHoveredItem.imageUrl}
                                  fill
                                  alt={lastHoveredItem.title}
                                />
                              ) : (
                                <Image
                                  className="rounded-lg bg-gray-100 object-cover "
                                  src={placeholderImage}
                                  fill
                                  alt="Placeholder"
                                />
                              )}
                            </div>
                            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                          </div>
                          {hoveredItem ? (
                            <div>
                              <div className="flex items-center gap-x-4">
                                <time
                                  dateTime={hoveredItem.datetime}
                                  className="text-sm leading-6 text-gray-600"
                                >
                                  {hoveredItem.date}
                                </time>
                                <a
                                  href={hoveredItem.category?.href}
                                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                                >
                                  {hoveredItem.category?.title}
                                </a>
                              </div>
                              <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                                <a href={hoveredItem.href}>
                                  <span className="absolute inset-0" />
                                  {hoveredItem.title}
                                </a>
                              </h4>
                              <p className="mt-2 line-clamp-1 text-sm leading-6 text-gray-600">
                                {hoveredItem.description}
                              </p>
                            </div>
                          ) : lastHoveredItem ? (
                            <div>
                              <div className="flex items-center gap-x-4">
                                <time
                                  dateTime={lastHoveredItem.datetime}
                                  className="text-sm leading-6 text-gray-600"
                                >
                                  {lastHoveredItem.date}
                                </time>
                                <a
                                  href={lastHoveredItem.category?.href}
                                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                                >
                                  {lastHoveredItem.category?.title}
                                </a>
                              </div>
                              <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                                <a href={lastHoveredItem.href}>
                                  <span className="absolute inset-0" />
                                  {lastHoveredItem.title}
                                </a>
                              </h4>
                              <p className="mt-2 line-clamp-1 text-sm leading-6 text-gray-600">
                                {lastHoveredItem.description}
                              </p>
                            </div>
                          ) : (
                            <div>
                              <div className="flex items-center gap-x-4">
                                <time
                                  dateTime={engagement[0].datetime}
                                  className="text-sm leading-6 text-gray-600"
                                >
                                  {engagement[0].date}
                                </time>
                                <a
                                  href={engagement[0].category?.href}
                                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                                >
                                  {engagement[0].category?.title}
                                </a>
                              </div>
                              <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                                <a href={engagement[0].href}>
                                  <span className="absolute inset-0" />
                                  {engagement[0].title}
                                </a>
                              </h4>
                              <p className="mt-2 line-clamp-1 text-sm leading-6 text-gray-600">
                                {engagement[0].description}
                              </p>
                            </div>
                          )}
                          {/* <div>

                            <div className="flex items-center gap-x-4">
                              <time
                                dateTime={post.datetime}
                                className="text-sm leading-6 text-gray-600"
                              >
                                {post.date}
                              </time>
                              <a
                                href={post.category?.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {post.category?.title}
                              </a>
                            </div>
                            <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                              <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                              </a>
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-1">
                              {post.description}
                            </p>
                          </div> */}
                        </article>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        ) : null}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={siteConfig.links.facebook || "#"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
                className: "text-accent-700 ",
              })}
            >
              <Icons.facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.linkedin || "#"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
                className: "text-accent-700 ",
              })}
            >
              <Icons.linkedin className="h-5 w-5 " />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="container fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white py-6 sm:max-w-sm sm:ring-1 sm:ring-accent-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Icons.logo className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-accent-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-accent-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/typography"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                >
                  Typography
                </Link>
                <Link
                  href="/components"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                >
                  Components
                </Link>
                <Link
                  href="/colors"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                >
                  Colors
                </Link>
                <Link
                  href="/forms"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                >
                  Forms
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                >
                  Blog
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-accent-50">
                        Product
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-accent-900 hover:bg-accent-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

function GlobalNavItem({ item }: { item: NavItem }) {
  // const segment = useSelectedLayoutSegment()
  const pathname = usePathname()

  const isActive = item.slug === pathname

  return (
    <Link
      href={item.slug!}
      className={cn(
        "text-sm font-semibold leading-6 ",
        {
          "text-accent-600 hover:text-accent-900": !isActive,
          "underline decoration-2 underline-offset-8": isActive,
        },
        item.disabled && "cursor-not-allowed opacity-80"
      )}
    >
      {item.title}
    </Link>
  )
}
