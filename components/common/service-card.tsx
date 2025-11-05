import { Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

const ServiceCard = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-sm">
      <div className="relative h-48 w-full">
        <Image
          src="/images/services.png"
          alt="service"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      <div className="bg-[#161C2D] p-5 text-[#FFFFFF]">
        <h3 className="mb-3 text-lg font-semibold">Mid-Week Service</h3>

        <div className="mb-2 flex items-center gap-2 text-sm">
          <Clock size={18} />
          <span>12:00 PM</span>
        </div>

        <div className="flex items-start gap-2 text-sm">
          <MapPin size={18} className="mt-0.5 shrink-0" />
          <p>The Great Lorem ipsum dolor sit amet consectetur. Erat sapien qu.</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
