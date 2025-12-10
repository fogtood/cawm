import EventCard from '@/components/common/event-card'
import MissionCard from '@/components/common/mission-card'
import SermonCard from '@/components/common/sermon-card'
import ServiceCard from '@/components/common/service-card'
import TestimonialCarousel from '@/components/common/testimonial-carousel'
import YoutubeEmbed from '@/components/common/youtube-embed'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.image'
import { sanityFetch } from '@/sanity/live'
import { HOME_QUERY } from '@/lib/sanity.queries'
import { Event, HomePage, Sermon, Service, Testimonial, Values } from '@/sanity.types'
import AppButton from '@/components/common/app-button'

export default async function Home() {
  const result = (await sanityFetch({ query: HOME_QUERY })) as {
    data:
      | (HomePage & {
          sermons?: Sermon[]
          services?: Service[]
          events?: Event[]
          testimonials?: Testimonial[]
          values?: Values | null
        })
      | null
  }

  const homePage: HomePage | null = result.data ?? null
  const sermons: Sermon[] = (result.data && result.data.sermons) ?? []
  const services: Service[] = (result.data && result.data.services) ?? []
  const values: Values | null = (result.data && result.data.values) ?? null
  const events: Event[] = (result.data && result.data.events) ?? []
  const testimonials: Testimonial[] = (result.data && result.data.testimonials) ?? []

  const valueKeys = ['mission', 'vision', 'belief'] as const

  const items = values
    ? valueKeys.map((key) => ({
        key,
        data: values[key] || null,
      }))
    : Array.from({ length: 3 }).map(() => ({
        key: crypto.randomUUID(),
        data: null,
      }))

  return (
    <div>
      {/* Hero section */}
      <div className="relative h-screen w-full">
        {/* Background image */}
        {homePage?.hero?.backgroundImage ? (
          <Image
            src={urlFor(homePage.hero.backgroundImage)
              .width(1920)
              .height(1080)
              .auto('format')
              .quality(75)
              .url()}
            alt="Background"
            fill
            fetchPriority="high"
            loading="eager"
            className="object-cover"
          />
        ) : (
          <Image src="/images/hero.png" alt="Background" fill fetchPriority="high" loading="eager" className="object-cover" />
        )}

        {/* Gradient overlays */}
        {/* Top-to-bottom gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(33,33,32,0.6)] via-[rgba(33,33,32,0)] to-[rgba(33,33,32,0)]" />

        {/* Left-to-right gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(33,33,32,0.8)] via-[rgba(33,33,32,0.4)] to-[rgba(33,33,32,0)]" />

        {/* Content */}
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center sm:gap-8">
          <div className="text-white" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl">
              {homePage?.hero?.title || 'Christ Apostolic World Ministry'}
            </h1>
            {homePage?.hero?.subtitle && (
              <p className="mx-auto mt-3 max-w-4xl text-lg leading-relaxed font-normal sm:text-xl">
                {homePage.hero.subtitle}
              </p>
            )}
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-5"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <AppButton />
            {homePage?.hero?.secondaryButton?.text &&
              (homePage.hero.secondaryButton.link ? (
                <Button
                  variant="outline"
                  className="h-auto w-auto cursor-pointer rounded-sm border-[#FFFFFF4D] bg-[#FFFFFF1A]! px-6 py-2 text-base font-normal text-white! sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
                  asChild
                >
                  <Link href={homePage.hero.secondaryButton.link}>
                    {homePage.hero.secondaryButton.text}
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="h-auto w-auto cursor-pointer rounded-sm border-[#FFFFFF4D] bg-[#FFFFFF1A]! px-6 py-2 text-base font-normal text-white! sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
                >
                  {homePage.hero.secondaryButton.text}
                </Button>
              ))}
          </div>
        </div>
      </div>

      <section className="container mx-auto my-20 px-4 md:px-6">
        {/* Welcome section */}
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:gap-10 lg:gap-16">
          <div
            className="relative h-[250px] w-full min-w-[280px] sm:min-w-[320px] md:h-[400px] md:w-1/3"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {homePage?.welcome?.image ? (
              <Image
                src={urlFor(homePage.welcome.image)
                  .width(800)
                  .height(600)
                  .auto('format')
                  .quality(75)
                  .url()}
                alt={homePage.welcome.title || 'Welcome'}
                fill
                className="object-cover"
              />
            ) : (
              <Image src="/images/welcome.png" alt="Welcome" fill className="object-cover" />
            )}
          </div>

          <div
            className="flex-1 text-center md:text-left"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {homePage?.welcome?.heading && (
              <p className="text-xl leading-10 font-medium tracking-wide">
                {homePage.welcome.heading}
              </p>
            )}
            {homePage?.welcome?.title && (
              <h2 className="text-2xl font-semibold tracking-wide uppercase md:text-3xl">
                {homePage.welcome.title}
              </h2>
            )}
            {homePage?.welcome?.description && (
              <p className="my-4 line-clamp-6 leading-relaxed text-[#575756] md:text-lg">
                {homePage.welcome.description}
              </p>
            )}
            {homePage?.welcome?.buttonText && (
              <Button
                className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
                asChild={!!homePage.welcome.buttonLink}
              >
                {homePage.welcome.buttonLink ? (
                  <Link href={homePage.welcome.buttonLink}>{homePage.welcome.buttonText}</Link>
                ) : (
                  homePage.welcome.buttonText
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Mission section */}
        <div className="my-20 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={item.key}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              <MissionCard
                title={item.data?.title ?? 'Mission Statement'}
                description={
                  item.data?.description ??
                  'Lorem ipsum dolor sit amet consectetur. Erat sapien quis aliquet in nunc lobortis condimentum.'
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sermons section */}
      <section className="container mx-auto my-20 px-4 md:px-6">
        <div className="my-30">
          <div
            className="flex flex-wrap items-center justify-center gap-5 sm:justify-between"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="space-y-1 text-center text-[#1A1A1A] sm:text-left">
              <h1 className="text-2xl font-semibold">
                {homePage?.sermonsSection?.title || 'Our Sermons'}
              </h1>
              <p>
                {homePage?.sermonsSection?.description ||
                  'Dive into our collection of powerful sermons and series.'}
              </p>
            </div>
            {homePage?.sermonsSection?.buttonText && (
              <Button
                className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
                asChild={!!homePage.sermonsSection.buttonLink}
              >
                {homePage.sermonsSection.buttonLink ? (
                  <Link href={homePage.sermonsSection.buttonLink}>
                    {homePage.sermonsSection.buttonText}
                  </Link>
                ) : (
                  homePage.sermonsSection.buttonText
                )}
              </Button>
            )}
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sermons && sermons.length > 0 ? (
              sermons.map((sermon, idx) => (
                <div
                  key={sermon._id}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  data-aos-duration="800"
                  className="w-full max-w-sm"
                >
                  <SermonCard {...sermon} />
                </div>
              ))
            ) : (
              // Fallback if no sermons
              <p className="col-span-full text-center text-[#575756]">No sermons available yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <div className="bg-[#F6F6FF] py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="space-y-1 text-center text-[#1A1A1A] md:text-left"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="text-2xl font-semibold">
              {homePage?.servicesSection?.title || 'Our Services'}
            </h1>
            <p>
              {homePage?.servicesSection?.description ||
                'Lorem ipsum dolor sit amet consectetur. Leo in sed magna sap.'}
            </p>
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services && services.length > 0 ? (
              services.map((service, idx) => (
                <div
                  key={service._id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  data-aos-duration="800"
                  className="w-full max-w-sm"
                >
                  <ServiceCard {...service} />
                </div>
              ))
            ) : (
              // Fallback if no services
              <p className="col-span-full text-center text-[#575756]">No services available yet.</p>
            )}
          </div>
        </div>
      </div>

      <section id="watch-live" className="container mx-auto my-20 px-4 md:px-6">
        {/* Live program section */}
        <div>
          <div className="text-center" data-aos="fade-up" data-aos-duration="800">
            {homePage?.liveProgram?.title && (
              <h1 className="text-2xl font-semibold text-[#212120]">
                {homePage.liveProgram.title}
                <span>
                  <Image
                    src="/images/youtube.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                    className="ml-2 inline-block"
                  />
                </span>
              </h1>
            )}
            {homePage?.liveProgram?.description && (
              <p className="mt-1 text-[#575756]">{homePage.liveProgram.description}</p>
            )}
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <YoutubeEmbed videoId={homePage?.liveProgram?.youtubeVideoId} />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <div className="bg-[#F6F6FF] py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className="flex flex-wrap items-center justify-center gap-5 sm:justify-between"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="space-y-1 text-center text-[#1A1A1A] sm:text-left">
              <h1 className="text-2xl font-semibold">
                {homePage?.eventsSection?.title || 'Upcoming Events'}
              </h1>
              <p>
                {homePage?.eventsSection?.description ||
                  'Join us for our upcoming gatherings and activities'}
              </p>
            </div>
            {homePage?.eventsSection?.buttonText && (
              <Button
                className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
                asChild={!!homePage.eventsSection.buttonLink}
              >
                {homePage.eventsSection.buttonLink ? (
                  <Link href={homePage.eventsSection.buttonLink}>
                    {homePage.eventsSection.buttonText}
                  </Link>
                ) : (
                  homePage.eventsSection.buttonText
                )}
              </Button>
            )}
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events && events.length > 0 ? (
              events.map((event, idx) => (
                <div
                  key={event._id}
                  data-aos="flip-left"
                  data-aos-delay={idx * 100}
                  data-aos-duration="800"
                  className="w-full max-w-sm"
                >
                  <EventCard {...event} />
                </div>
              ))
            ) : (
              // Fallback if no events
              <p className="col-span-full text-center text-[#575756]">No upcoming events yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Testimonies section */}
      <section className="container mx-auto my-20 px-4 md:px-6">
        <div className="mb-30">
          <div
            className="space-y-1 text-center text-[#1A1A1A] md:text-left"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="text-2xl font-semibold">
              {homePage?.testimonialsSection?.title || 'Testimonies'}
            </h1>
            {homePage?.testimonialsSection?.description && (
              <p>{homePage.testimonialsSection.description}</p>
            )}
          </div>

          {/* Cards grid */}
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <TestimonialCarousel testimonials={testimonials ?? []} />
          </div>
        </div>
      </section>
    </div>
  )
}
