// import AppPagination from '@/components/common/app-pagination'
import Bg from '@/components/common/bg'
import SermonCard from '@/components/common/sermon-card'
import { urlFor } from '@/lib/sanity.image'
import { sermonsPageQuery, sermonsQuery, totalSermons } from '@/lib/sanity.queries'
import { Sermon, SermonsPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import { PageParams } from '../events/page'
import AppPagination from '@/components/common/app-pagination'
import Search from '@/components/common/search'

const ITEMS_PER_PAGE = 12

export default async function Sermons({ searchParams }: PageParams) {
  const { search = '', speaker, category, alphabet, page } = await searchParams
  const currentPage = Number(page) || 1
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const [{ data: sermonsPage }, { data: totalCount }, { data: sermons }] = await Promise.all([
    sanityFetch({ query: sermonsPageQuery }) as Promise<{ data: SermonsPage }>,
    sanityFetch({ query: totalSermons }) as Promise<{ data: number }>,
    sanityFetch({
      query: sermonsQuery,
      params: {
        search: search || null,
        speaker: speaker || null,
        category: category || null,
        alphabet: alphabet || null,
        start,
        end,
      },
    }) as Promise<{ data: Sermon[] }>,
  ])

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

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
        <div className="mb-8 ml-auto max-w-sm">
          <Search />
        </div>

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

        {totalPages > 1 && (
          <div className="mt-12">
            <AppPagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        )}
      </div>
    </div>
  )
}
