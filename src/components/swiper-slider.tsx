"use client"

import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { SwiperModule } from "swiper/types"

const modules: SwiperModule[] = Object.values({
  Navigation,
  Pagination,
  A11y,
})

function SwiperComponent() {
  return (
    <Swiper
      modules={modules}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className=""
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default SwiperComponent
