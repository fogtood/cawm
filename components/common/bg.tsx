import Image from 'next/image'

const Bg = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="relative h-[505px] w-full text-white">
      {/* Background image */}
      <Image src="/images/hero.png" alt="Background" fill priority className="object-cover" />

      {/* Gradient overlays */}
      {/* Top-to-bottom gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(33,33,32,0.6)] via-[rgba(33,33,32,0)] to-[rgba(33,33,32,0)]" />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[rgba(33,33,32,0.8)] via-[rgba(33,33,32,0.4)] to-[rgba(33,33,32,0)]" />

      {/* Content */}
      <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-6xl">{title}</h1>
        <p className="text-xl sm:text-2xl">{subtitle}</p>
      </div>
    </div>
  )
}

export default Bg
