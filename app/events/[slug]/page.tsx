import Bg from '@/components/common/bg'
import { Button } from '@/components/ui/button'
import { eventBySlugQuery } from '@/lib/sanity.queries'
import { extractDateAndTime } from '@/lib/utils'
import { Event } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default async function EventDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: event } = (await sanityFetch({ query: eventBySlugQuery, params: { slug } })) as {
    data: Event
  }
  const { date, time } = extractDateAndTime(event.date)

  return (
    <div>
      <Bg
        title="Events"
        subtitle="Join us for our upcoming events and experience community like never before"
      />

      <div className="container mx-auto my-20 px-4 md:px-6">
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-2xl font-semibold text-[#1A1A1A]">{event.title}</h1>
          <Button
            asChild
            className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
          >
            <Link href="/sermons">
              Add to Calendar <Calendar />
            </Link>
          </Button>
        </div>

        <div
          className="mt-4 space-y-4 text-[#575756]"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <p className="flex items-center gap-3">
            <Clock size={18} /> {time}
          </p>
          <p className="flex items-center gap-3">
            <Calendar size={18} /> {date}
          </p>
          <p className="flex items-center gap-3">
            <MapPin size={18} /> {event.location}
          </p>
        </div>

        <div
          className="prose prose-lg my-8 max-w-none text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {event.description && <PortableText value={event.description} />}
        </div>
      </div>
    </div>
  )
}
