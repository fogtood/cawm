import Bg from '@/components/common/bg'
import GallerySection from '@/components/common/gallery-section'
import { urlFor } from '@/lib/sanity.image'
import LeaderCard from '@/components/common/leader-card'
import { DynamicPage } from '@/sanity.types'

interface YouthTemplateProps {
  page: DynamicPage
}

export default function YouthTemplate({ page }: YouthTemplateProps) {
  return (
    <div>
      <Bg
        title={page.hero?.title || page.title || ''}
        subtitle={page.hero?.subtitle || ''}
        background={
          page.hero?.backgroundImage ? urlFor(page.hero.backgroundImage).url() : '/images/hero.png'
        }
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          {page.aboutSection?.title || page.title}
        </h1>
        <p
          className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {page.aboutSection?.aboutText}
        </p>

        <div className="my-20">
          {page.leadershipSection && (
            <>
              <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
                {page.leadershipSection.title || 'Our Leadership'}
              </h1>
              <p
                className="mt-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                {page.leadershipSection.description}
              </p>

              <div className="my-12 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {page.leadershipSection.leadership &&
                page.leadershipSection.leadership.length > 0 ? (
                  page.leadershipSection.leadership.map((leader, index: number) => (
                    <LeaderCard leader={leader} index={index} key={leader._key || index} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-[#636363]">
                    Leadership information will appear here.
                  </p>
                )}
              </div>
            </>
          )}

          <div data-aos="fade-up" data-aos-duration="800">
            <GallerySection photos={page.photos} />
          </div>
        </div>
      </section>
    </div>
  )
}
