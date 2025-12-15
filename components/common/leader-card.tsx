import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Leader {
  _key?: string
  name?: string
  position?: string
  image?: SanityImageSource
}

const LeaderCard = ({ leader, index }: { leader: Leader; index?: number }) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-2.5"
      data-aos="zoom-in"
      data-aos-delay={(index || 0) * 100}
      data-aos-duration="800"
    >
      <Image
        src={leader?.image && urlFor(leader.image).url() ? urlFor(leader.image).url() : '/images/pastor.png'}
        alt={leader?.name || 'Leader'}
        width={320}
        height={320}
        className="overflow-hidden rounded-2xl object-contain w-auto h-80"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#4A4A4A]">{leader?.name || 'Leader Name'}</h3>
        <p className="text-[#636363]">{leader?.position || ''}</p>
      </div>
    </div>
  )
}

export default LeaderCard
