'use client'

import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { urlFor } from '@/lib/sanity.image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface GallerySectionProps {
  photos?: SanityImageSource[]
}

const breakpointColumns = {
  default: 4,
  1280: 3,
  1024: 2,
  640: 1,
}

export default function GallerySection({ photos }: GallerySectionProps) {
  if (!photos || photos.length === 0) return null

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="-ml-4 flex w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {photos.map((photo, index) => (
        <div
          key={index}
          className="mb-4 overflow-hidden rounded-lg"
          data-aos="fade-up"
          data-aos-delay={index * 50}
          data-aos-duration="800"
        >
          <div className="relative w-full">
            <Image
              src={urlFor(photo).width(800).url()}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          </div>
        </div>
      ))}
    </Masonry>
  )
}
