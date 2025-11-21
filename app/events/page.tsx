import Bg from '@/components/common/bg'
import EventCard from '@/components/common/event-card'
import { urlFor } from '@/lib/sanity.image'
import { eventsPageQuery, eventsQuery } from '@/lib/sanity.queries'
import { Event, EventsPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'

export default async function Events() {
  const { data: eventsPage } = (await sanityFetch({ query: eventsPageQuery })) as {
    data: EventsPage
  }
  const { data: events } = (await sanityFetch({ query: eventsQuery })) as { data: Event[] }

  return (
    <div>
      <Bg
        title={eventsPage?.hero?.title || 'Events'}
        subtitle={
          eventsPage?.hero?.subtitle ||
          'Join us for our upcoming events and experience community like never before'
        }
        background={
          eventsPage?.hero?.backgroundImage
            ? urlFor(eventsPage.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />

      <div className="container mx-auto my-20 grid min-h-[180px] grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {events.length === 0 ? (
          <div className="col-span-full py-12 text-center text-[#575756]">
            No events found. Please check back soon for upcoming events!
          </div>
        ) : (
          events.map((event, index) => (
            <div
              key={event._id}
              data-aos="flip-left"
              data-aos-delay={index * 50}
              data-aos-duration="800"
              className="w-full max-w-sm"
            >
              <EventCard {...event} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
