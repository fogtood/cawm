// import AppPagination from '@/components/common/app-pagination'
import Bg from '@/components/common/bg'
import SermonCard from '@/components/common/sermon-card'
import { urlFor } from '@/lib/sanity.image'
import { sermonsPageQuery, sermonsQuery } from '@/lib/sanity.queries'
import { Sermon, SermonsPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'

export default async function Sermons() {
  const { data: sermonsPage } = (await sanityFetch({ query: sermonsPageQuery })) as {
    data: SermonsPage
  }
  const { data: sermons } = (await sanityFetch({ query: sermonsQuery })) as { data: Sermon[] }

  return (
    <div>
      <Bg
        title={sermonsPage?.hero?.title || 'Sermons'}
        subtitle={
          sermonsPage?.hero?.subtitle ||
          'Experience life-transforming messages that bring hope, healing, and breakthroughs'
        }
        background={
          sermonsPage?.hero?.backgroundImage
            ? urlFor(sermonsPage.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />

      <div className="container mx-auto my-20 px-4 md:px-6">
        <div className="grid min-h-[180px] grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sermons.length === 0 ? (
            <div className="col-span-full py-12 text-center text-[#575756]">
              No sermons found. Please check back soon for inspiring messages!
            </div>
          ) : (
            sermons.map((sermon, index) => (
              <div
                key={sermon._id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-duration="800"
                className="w-full max-w-sm"
              >
                <SermonCard {...sermon} />
              </div>
            ))
          )}
        </div>
        {/* <AppPagination /> */}
      </div>
    </div>
  )
}
