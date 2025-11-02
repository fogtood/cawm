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

      <div className="container mx-auto my-20 grid grid-cols-1 place-items-center gap-10 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(16)].map((_, index) => (
          <Link href="/media" key={index}>
            <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-2.5">
              <Image
                src="/images/folder.png"
                alt="Folder"
                width={250}
                height={250}
                className="w-full object-contain"
              />
              <div className="text-center">
                <h3 className="text-sm font-semibold text-[#4A4A4A]">Mid-Week Service Shots</h3>
                <p className="text-xs text-[#636363]">(11 - 01 - 2025)</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
