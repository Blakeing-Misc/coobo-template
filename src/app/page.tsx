import Link from "next/link"

import { siteConfig } from "@/config/site"
import HomeSlider from "@/components/home-slider"
import { SiteHeader } from "@/components/site-header"
import { buttonVariants } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main>
      <SiteHeader position="fixed" />
      <HomeSlider />
    </main>
  )
}
