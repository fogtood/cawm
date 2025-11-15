import Bg from '@/components/common/bg'
import EventCard from '@/components/common/event-card'
import { eventsQuery } from '@/lib/sanity.queries'
import { Event } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'

export default async function Events() {
  const { data: events } = (await sanityFetch({ query: eventsQuery })) as { data: Event[] }

  return (
    <div>
      <Bg
        title="Events"
        subtitle="Join us for our upcoming events and experience community like never before"
      />

      <div className="container mx-auto my-20 grid grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event, index) => (
          <div
            key={event._id}
            data-aos="flip-left"
            data-aos-delay={index * 50}
            data-aos-duration="800"
            className="w-full max-w-sm"
          >
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  )
}
