import { Calendar, Clock, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.image'
import { extractDateAndTime, toPlainText } from '@/lib/utils'
import type { Sermon } from '@/sanity.types'

const SermonCard = ({
  title,
  slug,
  preacher,
  dateTime,
  image,
  description,
  shortPreview,
}: Sermon) => {
  const imageUrl = image ? urlFor(image).url() : '/images/sermon.png'
  const previewText = toPlainText(description) ?? shortPreview
  const { date, time } = extractDateAndTime(dateTime)

  return (
    <Link href={`/sermons/${slug?.current}`}>
      <div className="w-full max-w-sm overflow-hidden rounded-md shadow-md blur-out-md">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title || 'sermon image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
          />
        </div>
        <div className="px-4 py-6 text-sm text-[#1A1A1A]">
          <h1 className="text-lg font-semibold">{title}</h1>
          {previewText && <p className="my-4 line-clamp-3">{previewText}</p>}
          {preacher && (
            <p className="mb-2 flex items-center gap-2">
              <UserIcon size={18} /> {preacher}
            </p>
          )}
          <div className="flex items-center justify-between">
            {time && (
              <p className="flex items-center gap-2">
                <Clock size={18} /> {time}
              </p>
            )}
            {date && (
              <p className="flex items-center gap-2">
                <Calendar size={18} /> {date}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SermonCard
