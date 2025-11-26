import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface GallerySectionProps {
  photos?: SanityImageSource[]
}

const GallerySection = ({ photos }: GallerySectionProps)  =>{
  if (!photos || photos.length === 0) return null

  return (
    // Layout: responsive grid with up to 4 columns on larger screens
    <div className="my-20 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {photos.map((photo, i) => (
        <div key={i} className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={photo ? urlFor(photo).url() : "/images/hero.png"}
            alt={`Church gallery image ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  )
}

export default GallerySection