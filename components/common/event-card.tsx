import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const EventCard = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="relative h-46 w-full overflow-hidden rounded-lg">
        <Image
          src="/images/event.png"
          alt="Event"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="py-6 text-sm text-[#161C2D]">
        <h3 className="text-lg font-semibold">Mid-Week Service</h3>
        <p className="my-2 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur. Erat sapien quis aliquet in nunc lobortis
          condimentum. Id urna consectetur amet quam aliquam.
        </p>
        <Button variant="link" className="px-0 text-[#161C2D]" asChild>
          <Link href="/events/mid-week-service">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

export default EventCard
