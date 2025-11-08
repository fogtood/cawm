'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.',
    name: 'Ayomide Bayo',
    image: '/images/hero.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.',
    name: 'Ayomide Bayo',
    image: '/images/hero.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.',
    name: 'Ayomide Bayo',
    image: '/images/hero.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.',
    name: 'Ayomide Bayo',
    image: '/images/hero.png',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.',
    name: 'Ayomide Bayo',
    image: '/images/hero.png',
  },
]

const TestimonialCarousel = () => {
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
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="rounded-none border-none bg-[#F3F3FF] p-0 shadow-none">
              <CardContent className="flex h-full flex-col justify-between p-0 text-[#000000]">
                <div className="flex flex-col items-start p-6">
                  <p className="mb-3 font-serif text-4xl">“</p>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center bg-[#0b0b33] pt-16 pb-4">
                  <div className="relative -mt-24 h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <p className="mt-2 font-medium text-white">{item.name}</p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialCarousel
