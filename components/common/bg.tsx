import Image from 'next/image'
import { Separator } from '../ui/separator'

const Bg = ({
  title,
  subtitle,
  type,
  preacher,
  date,
  background,
}: {
  title: string
  subtitle?: string
  type?: string
  preacher?: string
  date?: string
  background?: string
}) => {
  return (
    <div className="relative h-[505px] w-full text-white">
      {/* Background image */}
      <Image
        src={background || '/images/hero.png'}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlays */}
      {/* Top-to-bottom gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(33,33,32,0.6)] via-[rgba(33,33,32,0)] to-[rgba(33,33,32,0)]" />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(33,33,32,0.8)] via-[rgba(33,33,32,0.4)] to-[rgba(33,33,32,0)]" />

      {/* Content */}
      {type === 'sermon' ? (
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center px-4 text-center">
          <h1
            className="text-4xl font-semibold sm:text-5xl md:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {title}
          </h1>
          <Separator
            className="my-5"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          />
          <div
            className="flex w-full flex-wrap items-center justify-evenly gap-3 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <p className="text-xl sm:text-2xl">{preacher}</p>
            <p className="text-xl sm:text-2xl">{date}</p>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 px-4 text-center">
          <h1
            className="text-4xl font-semibold tracking-wider sm:text-5xl md:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {title}
          </h1>
          <p
            className="text-xl sm:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  )
}

export default Bg
