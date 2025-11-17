import Bg from '@/components/common/bg'
import { urlFor } from '@/lib/sanity.image'
import { aboutPageQuery } from '@/lib/sanity.queries'
import { AboutPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import Image from 'next/image'

export default async function About() {
  const { data: aboutPage } = (await sanityFetch({ query: aboutPageQuery })) as { data: AboutPage }

  return (
    <div>
      <Bg
        title={aboutPage?.hero?.title || 'About CAWM'}
        subtitle={
          aboutPage?.hero?.subtitle ||
          'Explore our story, mission, and the community that makes us who we are'
        }
        background={
          aboutPage?.hero?.backgroundImage
            ? urlFor(aboutPage.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />
      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          {aboutPage?.aboutSection?.title || 'About CAWM'}
        </h1>
        <p
          className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {aboutPage?.aboutSection?.aboutText}
          {/* <PortableText value={aboutPage.aboutSection.aboutText} /> */}
        </p>

        <div className="my-20 flex flex-wrap items-center justify-center gap-10 md:gap-20">
          <div className="max-w-md sm:text-center" data-aos="fade-right" data-aos-duration="800">
            <h2 className="mb-4 text-2xl font-semibold">Mission</h2>
            <p className="text-base leading-7 text-[#575756] md:text-lg md:leading-9">
              {aboutPage?.mission || ''}
            </p>
          </div>
          <div className="max-w-md sm:text-center" data-aos="fade-left" data-aos-duration="800">
            <h2 className="mb-4 text-2xl font-semibold">Vision</h2>
            <p className="text-base leading-7 text-[#575756] md:text-lg md:leading-9">
              {aboutPage?.vision || ''}
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
            {aboutPage?.leadershipSection?.title || 'Our Leadership'}
          </h1>
          <p
            className="mt-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            {aboutPage?.leadershipSection?.description}
          </p>

          <div className="my-12 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aboutPage?.leadershipSection?.leadership &&
            aboutPage.leadershipSection.leadership.length > 0 ? (
              aboutPage.leadershipSection.leadership.map((leader, index: number) => (
                <div
                  key={leader._key || index}
                  className="flex w-full flex-col items-center justify-center gap-2.5"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <Image
                    src={
                      leader?.image && urlFor(leader.image).url()
                        ? urlFor(leader.image).url()
                        : '/images/pastor.png'
                    }
                    alt={leader?.name || 'Leader'}
                    width={320}
                    height={320}
                    className="object-contain"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#4A4A4A]">
                      {leader?.name || 'Leader Name'}
                    </h3>
                    <p className="text-[#636363]">{leader?.position || ''}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-[#636363]">
                Leadership information will appear here.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
