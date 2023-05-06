import Link from "next/link"

import { siteConfig } from "@/config/site"
import Header from "@/components/header"
import HomeSlider from "@/components/home-slider"
import { SiteHeader } from "@/components/site-header"
import SwiperSlider from "@/components/swiper-slider"
import { buttonVariants } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main>
      {/* <SiteHeader position="fixed" /> */}
      <Header position="sticky" />
      {/* <HomeSlider /> */}
      <SwiperSlider />
    </main>
  )
}
