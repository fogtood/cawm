// import AppPagination from '@/components/common/app-pagination'
import Bg from '@/components/common/bg'
import SermonCard from '@/components/common/sermon-card'
import { sermonsQuery } from '@/lib/sanity.queries'
import { Sermon } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'

export default async function Sermons() {
  const { data: sermons } = (await sanityFetch({ query: sermonsQuery })) as { data: Sermon[] }

  return (
    <div>
      <Bg
        title="Sermons"
        subtitle="Experience life-transforming messages that bring hope, healing, and breakthroughs"
      />
      <div className="container mx-auto my-20 px-4 md:px-6">
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sermons.map((sermon, index) => (
            <div
              key={sermon._id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-duration="800"
              className="w-full max-w-sm"
            >
              <SermonCard {...sermon} />
            </div>
          ))}
        </div>
        {/* <AppPagination /> */}
      </div>
    </div>
  )
}
