import Bg from '@/components/common/bg'
import EventCard from '@/components/common/event-card'
import { urlFor } from '@/lib/sanity.image'
import { eventsPageQuery, eventsQuery, totalEvents } from '@/lib/sanity.queries'
import { Event, EventsPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import AppPagination from '@/components/common/app-pagination'

interface EventsPageProps {
  searchParams: Promise<{ page?: string }>
}

const ITEMS_PER_PAGE = 12

export default async function Events({ searchParams }: EventsPageProps) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const [{ data: eventsPage }, { data: totalCount }, { data: events }] = await Promise.all([
    sanityFetch({ query: eventsPageQuery }) as Promise<{ data: EventsPage }>,
    sanityFetch({ query: totalEvents }) as Promise<{ data: number }>,
    sanityFetch({ query: eventsQuery, params: { start, end } }) as Promise<{ data: Event[] }>,
  ])

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

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

      <div className="container mx-auto my-20 px-4 md:px-6">
        <div className="grid min-h-[180px] grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        {totalPages > 1 && (
          <div className="mt-12">
            <AppPagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        )}
      </div>
    </div>
  )
}
