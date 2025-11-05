import EventCard from '@/components/common/event-card'
import MissionCard from '@/components/common/mission-card'
import SermonCard from '@/components/common/sermon-card'
import ServiceCard from '@/components/common/service-card'
import TestimonialCarousel from '@/components/common/testimonial-carousel'
import YoutubeEmbed from '@/components/common/youtube-embed'
import { Button } from '@/components/ui/button'
import { PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative h-screen w-full">
        {/* Background image */}
        <Image src="/images/hero.png" alt="Background" fill priority className="object-cover" />

        {/* Gradient overlays */}
        {/* Top-to-bottom gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(33,33,32,0.6)] via-[rgba(33,33,32,0)] to-[rgba(33,33,32,0)]" />

        {/* Left-to-right gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(33,33,32,0.8)] via-[rgba(33,33,32,0.4)] to-[rgba(33,33,32,0)]" />

        {/* Content */}
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl">
              Christ Apostolic World Ministry
            </h1>
            <p className="mx-auto mt-3 max-w-4xl text-lg leading-relaxed font-normal sm:text-xl">
              Lorem ipsum dolor sit amet consectetur. Leo in sed magna sapien purus augue duis. Id
              imperdiet a tristique quam ultrices ti
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button
              size="icon"
              className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-2 text-base font-normal sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
            >
              <PlayIcon fill="white" />
              Watch Live
            </Button>
            <Button
              variant="outline"
              className="h-auto w-auto cursor-pointer rounded-sm border-[#FFFFFF4D] bg-[#FFFFFF1A]! px-6 py-2 text-base font-normal text-white! sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
            >
              I&apos;m New Here
            </Button>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-20 px-4 md:px-6">
        {/* Welcome section */}
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:gap-10 lg:gap-16">
          <div className="relative h-[250px] w-full min-w-[280px] sm:min-w-[320px] md:h-[400px] md:w-1/3">
            <Image src="/images/welcome.png" alt="Welcome" fill className="object-cover" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-xl leading-10 font-medium tracking-wide">You are welcome to</p>
            <h2 className="text-2xl font-semibold tracking-wide uppercase md:text-3xl">
              Christ Apostolic World Ministry
            </h2>
            <p className="my-4 line-clamp-6 leading-relaxed text-[#575756] md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Leo in sed magna sapien purus augue duis. Id
              imperdiet a tristique quam ultrices tincidunt suspendisse nec mauris. Diam amet
              ullamcorper sed sed a sapien. Tincidunt tellus bibendum proin pharetra est in et
              sagittis. Ut massa est vitae eget magna id. Parturient diam ut viverra nibh lacus
              imperdiet cursus. Pellentesque elementum risus id blandit morbi elit praesent. Mattis
              volutpat ut risus blandit nulla. Praesent sapien semper at adipiscing
            </p>
            <Button
              className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
              asChild
            >
              <Link href="/about">Know More</Link>
            </Button>
          </div>
        </div>

        {/* Mission section */}
        <div className="my-20 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, idx) => (
            <MissionCard key={idx} />
          ))}
        </div>
      </section>

      {/* Sermons section */}
      <section className="container mx-auto my-20 px-4 md:px-6">
        <div className="my-30">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="space-y-1 text-center text-[#1A1A1A] md:text-left">
              <h1 className="text-2xl font-semibold">Our Sermons</h1>
              <p>Dive into our collection of powerful sermons and series.</p>
            </div>
            <Button
              className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
              asChild
            >
              <Link href="/sermons">Explore Sermons</Link>
            </Button>
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* SermonCard components would be mapped here */}
            <SermonCard />
            <SermonCard />
            <SermonCard />
            <SermonCard />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <div className="bg-[#F6F6FF] py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-1 text-center text-[#1A1A1A] md:text-left">
            <h1 className="text-2xl font-semibold">Our Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Leo in sed magna sap.</p>
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* EventCard components would be mapped here */}
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>

      <section className="container mx-auto my-20 px-4 md:px-6">
        {/* Live program section */}
        <div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#212120]">
              Tune in to our
              <span>
                <Image
                  src="/images/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="ml-2 inline-block"
                />
              </span>
              LIVE program
            </h3>
            <p className="mt-1 text-[#575756]">Stay connected to our live streams</p>
          </div>
          <YoutubeEmbed />
        </div>
      </section>

      {/* Upcoming Events */}
      <div className="bg-[#F6F6FF] py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="space-y-1 text-center text-[#1A1A1A] md:text-left">
              <h1 className="text-2xl font-semibold">Upcoming Events</h1>
              <p>Join us for our upcoming gatherings and activities</p>
            </div>
            <Button
              className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
              asChild
            >
              <Link href="/sermons">View All Events</Link>
            </Button>
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* EventCard components would be mapped here */}
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>

      {/* Testimonies section */}
      <section className="container mx-auto my-20 px-4 md:px-6">
        <div className="mb-30">
          <div className="space-y-1 text-center text-[#1A1A1A] md:text-left">
            <h1 className="text-2xl font-semibold">Testimonies</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          {/* Cards grid */}
          <div className="mt-8">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Join Community */}
      {/* <div className="bg-[#F6F6FF] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-semibold uppercase md:text-4xl">
              Ready to Join Our Community?
            </h1>
            <p className="mb-4 text-center text-base leading-7 text-[#575756] md:text-lg">
              We&apos;d love to welcome you to Christ Apostolic World Ministry. Come as you are and
              discover a place where you belong, grow, and make a difference.
            </p>
            <Button
              className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
              asChild
            >
              <Link href="/contact">Plan to visit</Link>
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
