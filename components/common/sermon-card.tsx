import { Calendar, Clock, UserIcon } from 'lucide-react'
import Image from 'next/image'

const SermonCard = () => {
  return (
    <div className="max-w-sm cursor-pointer rounded-md shadow-md blur-out-md">
      <Image
        src="/images/sermon.png"
        alt="Sermon"
        width={400}
        height={250}
        className="h-auto w-full object-cover"
      />
      <div className="px-4 py-6 text-sm text-[#1A1A1A]">
        <h3 className="text-lg font-semibold">Don&apos;t Escape, Engage</h3>
        <p className="my-4 line-clamp-3">
          In this revelatory teaching, Dr. Flourish Peters challenges the escapist mindset often
          associate
        </p>
        <p className="mb-2 flex items-center gap-2">
          <UserIcon size={18} /> Dr. Flourish Peters
        </p>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2">
            <Clock size={18} /> 90:41
          </p>
          <p className="flex items-center gap-2">
            <Calendar size={18} /> Jun 23, 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default SermonCard
