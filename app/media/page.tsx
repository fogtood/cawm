import Bg from '@/components/common/bg'
import { urlFor } from '@/lib/sanity.image'
import { mediaFolderQuery, mediaPageQuery } from '@/lib/sanity.queries'
import type { Media, MediaPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import Image from 'next/image'
import Link from 'next/link'

export default async function Media() {
  const { data: mediaPage } = (await sanityFetch({ query: mediaPageQuery })) as {
    data: MediaPage
  }
  const { data: media } = (await sanityFetch({ query: mediaFolderQuery })) as { data: Media[] }

  return (
    <div>
      <Bg
        title={mediaPage?.hero?.title || 'Media'}
        subtitle={mediaPage?.hero?.subtitle}
        background={
          mediaPage?.hero?.backgroundImage
            ? urlFor(mediaPage?.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />

      <div className="container mx-auto my-20 grid min-h-[180px] grid-cols-2 place-items-center gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-6 lg:grid-cols-5">
        {media.length === 0 ? (
          <div className="col-span-full py-12 text-center text-[#575756]">
            No media folders found.
          </div>
        ) : (
          media.map((folder, index) => (
            <Link
              href={folder?.driveUrl || '#'}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex cursor-pointer flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                data-aos-duration="800"
              >
                <div className="relative h-[140px] w-[140px]">
                  <Image src="/images/folder.png" alt="Folder" fill className="object-contain" />
                </div>
                <h3 className="text-sm font-medium text-[#4A4A4A]">{folder?.title}</h3>
                <p className="text-xs text-[#636363]">{folder?.date}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
