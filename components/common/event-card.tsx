import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { urlFor } from '@/lib/sanity.image'
import type { Event } from '@/sanity.types'
import type { PortableTextBlock } from '@portabletext/types'
import { toPlainText } from '@/lib/utils'

const EventCard = ({ title, slug, image, description, shortPreview }: Event) => {
  const imageUrl = image ? urlFor(image).url() : '/images/event.png'
  const previewText = toPlainText(description) || shortPreview

  return (
    <div className="w-full max-w-sm">
      <div className="relative h-46 w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title || 'event image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          loading="lazy"
        />
      </div>
      <div className="py-6 text-sm text-[#161C2D]">
        <h1 className="text-lg font-semibold">{title}</h1>
        {shortPreview && <p className="my-2 line-clamp-3">{previewText}</p>}
        <Button variant="link" className="px-0 text-[#161C2D]" asChild>
          <Link href={`/events/${slug?.current}`}>Know More</Link>
        </Button>
      </div>
    </div>
  )
}

export default EventCard
