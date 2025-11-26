import Bg from '@/components/common/bg'
import GallerySection from '@/components/common/gallery-section'
import { urlFor } from '@/lib/sanity.image'
import LeaderCard from '@/components/common/leader-card'
import { aboutYouthsPageQuery } from '@/lib/sanity.queries'
import { AboutYouthsPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'

export default async function AboutYouths() {
  const { data: aboutYouthPage } = (await sanityFetch({ query: aboutYouthsPageQuery })) as {
    data: AboutYouthsPage
  }

  return (
    <div>
      <Bg
        title={aboutYouthPage?.hero?.title || 'About Our Youths'}
        subtitle={
          aboutYouthPage?.hero?.subtitle ||
          'Empowering the next generation through faith and community'
        }
        background={
          aboutYouthPage?.hero?.backgroundImage
            ? urlFor(aboutYouthPage.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          {aboutYouthPage?.aboutSection?.title || 'About CAWM'}
        </h1>
        <p
          className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {aboutYouthPage?.aboutSection?.aboutText}
        </p>

        <div className="my-20">
          <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
            {aboutYouthPage?.leadershipSection?.title || 'Our Leadership'}
          </h1>
          <p
            className="mt-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            {aboutYouthPage?.leadershipSection?.description}
          </p>

          <div className="my-12 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aboutYouthPage?.leadershipSection?.leadership &&
            aboutYouthPage.leadershipSection.leadership.length > 0 ? (
              aboutYouthPage.leadershipSection.leadership.map((leader, index: number) => (
                <LeaderCard leader={leader} index={index} key={leader._key || index} />
              ))
            ) : (
              <p className="col-span-full text-center text-[#636363]">
                Leadership information will appear here.
              </p>
            )}
          </div>

          {/* Gallery Section */}
          <div data-aos="fade-up" data-aos-duration="800">
            <GallerySection photos={aboutYouthPage?.photos} />
          </div>
        </div>
      </section>
    </div>
  )
}
