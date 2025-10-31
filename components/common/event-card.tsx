import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const EventCard = () => {
  return (
    <div className="max-w-md cursor-pointer">
      <Image
        src="/images/event.png"
        alt="Event"
        width={400}
        height={250}
        className="h-auto w-full rounded-lg object-cover"
      />
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
