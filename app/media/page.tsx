import Bg from '@/components/common/bg'
import Image from 'next/image'
import Link from 'next/link'

export default function Media() {
  return (
    <div>
      <Bg
        title="Media"
        subtitle="Lorem ipsum dolor sit amet consectetur. Dictum vestibulum ui ornare neque facilisis."
      />

      <div className="container mx-auto my-20 grid grid-cols-2 place-items-center gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-6 lg:grid-cols-5">
        {[...Array(16)].map((_, index) => (
          <Link href="/media" key={index}>
            <div
              className="flex cursor-pointer flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              data-aos-duration="800"
            >
              <div className="relative h-[140px] w-[140px]">
                <Image src="/images/folder.png" alt="Folder" fill className="object-contain" />
              </div>
              <h3 className="text-sm font-medium text-[#4A4A4A]">Mid-Week Service Shots</h3>
              <p className="text-xs text-[#636363]">(11 - 01 - 2025)</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
