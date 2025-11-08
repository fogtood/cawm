import Bg from '@/components/common/bg'
import YoutubeEmbed from '@/components/common/youtube-embed'
import Image from 'next/image'
import Link from 'next/link'

export default function SermonDetail() {
  return (
    <div>
      <Bg
        type="sermon"
        title="Don't Escape, Engage"
        preacher="Pastor Dr. Florida"
        date="25th October, 2025"
        background="/images/sermon.png"
      />

      <section className="container mx-auto my-20 px-4 md:px-6">
        <h1 className="text-2xl font-semibold" data-aos="fade-up" data-aos-duration="800">
          Don&apos;t Escape, Engage!
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
        </p>

        <p
          className="my-4 text-base leading-7 text-[#575756] md:text-lg md:leading-9"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
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
            <YoutubeEmbed />
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
