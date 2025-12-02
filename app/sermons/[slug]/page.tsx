import Bg from '@/components/common/bg'
import YoutubeEmbed from '@/components/common/youtube-embed'
import { urlFor } from '@/lib/sanity.image'
import { sermonBySlugQuery } from '@/lib/sanity.queries'
import { extractDateAndTime } from '@/lib/utils'
import { Sermon } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default async function SermonDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: sermon } = (await sanityFetch({ query: sermonBySlugQuery, params: { slug } })) as {
    data: Sermon
  }
  const { date } = extractDateAndTime(sermon.dateTime)
  const imageUrl = sermon.image ? urlFor(sermon.image).url() : '/images/sermon.png'

  return (
    <div>
      <Bg
        type="sermon"
        title={sermon.title || "Don't Escape, Engage"}
        preacher={sermon.preacher}
        date={date}
        background={imageUrl}
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          {sermon.title}
        </h1>

        <div
          className="prose prose-lg my-4 max-w-none text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {sermon.description && <PortableText value={sermon.description} />}
        </div>

        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <h3 className="mt-20 text-2xl font-semibold text-[#212120]">
            Watch via Youtube
            <span>
              <Image
                src="/images/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="ml-1 inline-block"
              />
            </span>
          </h3>

          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <YoutubeEmbed videoId={sermon?.youtubeVideoId} />
          </div>

          <p
            className="mt-1 flex flex-wrap items-center justify-center gap-5 text-lg font-medium text-[#000000]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            You can also stream audio via the following platforms
            <span className="flex items-center justify-center gap-3">
              <Link href="/">
                <Image
                  src="/images/spotif.svg"
                  alt="spotify"
                  height={42}
                  width={42}
                  className="w-full shrink-0"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/ytmusic.svg"
                  alt="spotify"
                  height={42}
                  width={42}
                  className="w-full shrink-0"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/soundcloud.svg"
                  alt="spotify"
                  height={42}
                  width={42}
                  className="w-full shrink-0"
                />
              </Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
