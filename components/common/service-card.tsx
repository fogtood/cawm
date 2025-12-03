import { Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import { Service } from '@/sanity.types'

const ServiceCard = ({ title, location, image, schedule }: Service) => {
  const imageUrl = image ? urlFor(image).width(400).height(200).url() : '/images/services.png'

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-sm">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title || 'service card'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          loading="lazy"
        />
      </div>

      <div className="bg-[#161C2D] p-6 text-[#FFFFFF]">
        <h1 className="mb-5 text-lg font-semibold">{title}</h1>

        {schedule?.time && (
          <div className="mb-3 flex items-center gap-2 text-sm">
            <Clock size={18} />
            <span>
              {schedule.day ? `${schedule.day}, ` : ''}
              {schedule.time}
            </span>
          </div>
        )}

        {location && (
          <div className="flex items-start gap-2 text-sm">
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <p className="line-clamp-2">{location}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
