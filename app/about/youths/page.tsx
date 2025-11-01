import Bg from '@/components/common/bg'
import Image from 'next/image'

export default function AboutYouths() {
  return (
    <div>
      <Bg
        title="About Our Youths"
        subtitle="Empowering the next generation through faith and community"
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold">About CAWM</h1>
        <p className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9">
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
          viverra nibh lacus imperdiet cursus. Pellentesque elementum risus id blandit morbi elit
          praesent. Mattis volutpat ut risus blandit nulla. Praesent sapien semper at adipiscing.
          Eget ut in arcu orci ultrices lorem lobortis. Quam in amet vulputate egestas tellus id
          ullamcorper nam turpis. Neque feugiat ipsum a proin ullamcorper turpis turpis sem. Tempus
          quisque egestas gravida pellentesque maecenas. Risus dictum et porta sagittis amet ut ut
          purus et. In amet pellentesque in nunc nullam sed mattis. Facilisi dui ultrices viverra
          erat sit phasellus. Maecenas magna consequat adipiscing congue ultricies sem eget lectus.
          ctus.
        </p>

        <div className="my-20">
          <h1 className="text-2xl font-semibold">Our Leadership</h1>
          <p className="mt-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9">
            Lorem ipsum dolor sit amet consectetur. Leo in sed magna sapien purus augue duis. Id
            imperdiet a tristique quam ultrices tincidunt suspendisse nec mauris. Diam amet
            ullamcorper sed sed a sapien. Tincidunt tellus bibendum proin pharetra est in et
            sagittis. Ut massa est vitae eget magna id. Parturient diam ut viverra nibh lacus
            imperdiet cursus. Pellentesque elementum risus id blandit morbi elit praesent.
          </p>

          <div className="my-12 grid grid-cols-3 gap-10 md:grid-cols-4">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="flex w-full flex-col items-center justify-center gap-2.5">
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

          <div className="my-20 grid w-full gap-4 md:grid-cols-4">
            {/* Left big image */}
            <div className="relative col-span-2 h-[400px] w-full overflow-hidden md:h-[600px]">
              <Image
                src="/images/hero.png"
                alt="Church congregation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            {/* Right 2x2 grid of same image */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="relative h-[190px] w-full overflow-hidden md:h-[290px]">
                  <Image
                    src="/images/hero.png"
                    alt={`Church congregation ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
