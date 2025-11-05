'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="mx-auto w-full max-w-6xl"
    >
      <CarouselContent>
        {testimonials.map((t, i) => (
          <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Card className="rounded-none border-none bg-[#F3F3FF] p-0 shadow-none">
              <CardContent className="flex h-full flex-col justify-between p-0 text-[#000000]">
                <div className="flex flex-col items-start p-6">
                  <p className="mb-3 font-serif text-4xl">“</p>
                  <p className="text-sm leading-relaxed">{t.text}</p>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center bg-[#0b0b33] pt-16 pb-4">
                  <div className="relative -mt-24 h-14 w-14 overflow-hidden rounded-full border-2 border-white">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <p className="mt-2 font-medium text-white">{t.name}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="ghost"
        size="icon-lg"
        className="top-1/2 -left-4 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white"
      />
      <CarouselNext
        variant="ghost"
        size="icon-lg"
        className="top-1/2 -right-4 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white"
      />
    </Carousel>
  )
}

export default TestimonialCarousel
