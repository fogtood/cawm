import Bg from '@/components/common/bg'
import GallerySection from '@/components/common/gallery-section'
import Image from 'next/image'

export default function AboutMinistries() {
  return (
    <div>
      <Bg
        title="About CAWM"
        subtitle="Discover our diverse ministries dedicated to serving faith and community"
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          About CAWM Ministries
        </h1>
        <p
          className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Lorem ipsum dolor sit amet consectetur. Leo in sed magna sapien purus augue duis. Id
          imperdiet a tristique quam ultrices tincidunt suspendisse nec mauris. Diam amet
          ullamcorper sed sed a sapien. Tincidunt tellus bibendum proin pharetra est in et sagittis.
          Ut massa est vitae eget magna id. Parturient diam ut viverra nibh lacus imperdiet cursus.
          Pellentesque elementum risus id blandit morbi elit praesent. Mattis volutpat ut risus
          blandit nulla. Praesent sapien semper at adipiscing. Eget ut in arcu orci ultrices lorem
          lobortis. Quam in amet vulputate egestas tellus id ullamcorper nam turpis. Neque feugiat
          ipsum a proin ullamcorper turpis turpis sem. Tempus quisque egestas gravida pellentesque
          maecenas. Risus dictum et porta sagittis amet ut ut purus et. In amet pellentesque in nunc
          nullam sed mattis. Facilisi dui ultrices viverra erat sit phasellus. Maecenas magna
          consequat adipiscing congue ultricies sem eget leLorem ipsum dolor sit amet consectetur.
          Leo in sed magna sapien purus augue duis. Id imperdiet a tristique quam ultrices tincidunt
          suspendisse nec mauris. Diam amet ullamcorper sed sed a sapien. Tincidunt tellus bibendum
          proin pharetra est in et sagittis. Ut massa est vitae eget magna id. Parturient diam ut
          viverra nibh lacus imperdiet cursus. Pellentesque elementum risus id blandit mor
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
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-2.5"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <Image
                  src="/images/pastor.png"
                  alt="Pastor"
                  width={320}
                  height={320}
                  className="object-contain"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4A4A4A]">Pastor Emmanuel Johnson</h3>
                  <p className="text-[#636363]">General Overseer</p>
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-duration="800">
            <GallerySection />
          </div>
        </div>
      </section>
    </div>
  )
}
