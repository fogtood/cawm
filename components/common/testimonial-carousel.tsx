'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { urlFor } from '@/lib/sanity.image'

interface Testimonial {
  _id: string
  name: string
  role?: string
  testimony: string
  image?: any
  order?: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-[60px]"
      >
        {testimonials.map((item) => {
          const imageUrl = item.image
            ? urlFor(item.image).width(56).height(56).url()
            : '/images/hero.png'
          return (
            <SwiperSlide key={item._id} className="h-full">
              <div className="flex h-full min-h-[350px] flex-col rounded-none bg-[#F3F3FF] p-0 shadow-none">
                <div className="flex flex-1 flex-col items-start p-6">
                  <p className="font-serif text-5xl leading-none">“</p>
                  <p className="line-clamp-6 text-sm leading-relaxed">{item.testimony}</p>
                </div>

                <div className="relative flex flex-col items-center justify-center bg-[#0b0b33] py-8">
                  <div className="absolute -top-7 size-15 overflow-hidden rounded-full">
                    <Image src={imageUrl} alt={item.name} fill className="object-cover" />
                  </div>

                  <p className="mt-4 font-medium text-white">{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default TestimonialCarousel
