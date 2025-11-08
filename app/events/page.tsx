import Bg from '@/components/common/bg'
import EventCard from '@/components/common/event-card'

export default function Events() {
  return (
    <div>
      <Bg
        title="Events"
        subtitle="Join us for our upcoming events and experience community like never before"
      />

      <div className="container mx-auto my-20 grid grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(16)].map((_, index) => (
          <div key={index} data-aos="flip-left" data-aos-delay={index * 50} data-aos-duration="800">
            <EventCard />
          </div>
        ))}
      </div>
    </div>
  )
}
