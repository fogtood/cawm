import Image from 'next/image'

const GallerySection = () => {
  return (
    <div className="my-20 grid w-full gap-4 md:grid-cols-2">
      {/* Left half - large image */}
      <div className="relative aspect-16/10 w-full overflow-hidden md:h-[600px]">
        <Image
          src="/images/hero.png"
          alt="Church congregation"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right half - 2x2 grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative aspect-16/10 w-full overflow-hidden sm:h-[290px]">
            <Image
              src="/images/hero.png"
              alt={`Church congregation ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection
