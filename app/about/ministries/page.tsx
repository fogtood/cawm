import Bg from '@/components/common/bg'
import GallerySection from '@/components/common/gallery-section'
import { urlFor } from '@/lib/sanity.image'
import { aboutMinistriesPageQuery } from '@/lib/sanity.queries'
import { AboutMinistriesPage } from '@/sanity.types'
import { sanityFetch } from '@/sanity/live'
import Image from 'next/image'

export default async function AboutMinistries() {
  const { data: aboutMinistriesPage } = (await sanityFetch({
    query: aboutMinistriesPageQuery,
  })) as {
    data: AboutMinistriesPage
  }

  return (
    <div>
      <Bg
        title={aboutMinistriesPage?.hero?.title || 'About CAWM'}
        subtitle={
          aboutMinistriesPage?.hero?.subtitle ||
          'Discover our diverse ministries dedicated to serving faith and community'
        }
        background={
          aboutMinistriesPage?.hero?.backgroundImage
            ? urlFor(aboutMinistriesPage.hero.backgroundImage).url()
            : '/images/hero.png'
        }
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          {aboutMinistriesPage?.aboutSection?.title || 'About CAWM Ministries'}
        </h1>
        <p
          className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {aboutMinistriesPage?.aboutSection?.aboutText}
        </p>

        <div className="my-20">
          <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
            Our Leadership
          </h1>
          <p
            className="mt-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            Lorem ipsum dolor sit amet consectetur. Leo in sed magna sapien purus augue duis. Id
            imperdiet a tristique quam ultrices tincidunt suspendisse nec mauris. Diam amet
            ullamcorper sed sed a sapien. Tincidunt tellus bibendum proin pharetra est in et
            sagittis. Ut massa est vitae eget magna id. Parturient diam ut viverra nibh lacus
            imperdiet cursus. Pellentesque elementum risus id blandit morbi elit praesent.
          </p>

          <div className="my-12 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aboutMinistriesPage?.leadershipSection?.leadership &&
            aboutMinistriesPage.leadershipSection.leadership.length > 0 ? (
              aboutMinistriesPage.leadershipSection.leadership.map((leader, index: number) => (
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
                    className="overflow-hidden rounded-2xl object-contain"
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

          <div data-aos="fade-up" data-aos-duration="800">
            {/* <GallerySection /> */}
          </div>
        </div>
      </section>
    </div>
  )
}
