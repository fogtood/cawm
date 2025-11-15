import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { urlFor } from '@/lib/sanity.image'
import { Event } from '@/sanity.types'

const EventCard = ({ title, slug, description, image }: Event) => {
  const imageUrl = image ? urlFor(image).url() : '/images/event.png'

  return (
    <div className="w-full max-w-sm">
      <div className="relative h-46 w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title || 'event image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>
      <div className="py-6 text-sm text-[#161C2D]">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="my-2 line-clamp-3">{description}</p>}
        <Button variant="link" className="px-0 text-[#161C2D]" asChild>
          <Link href={`/events/${slug?.current}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

export default EventCard
