import Image from 'next/image'

const MissionCard = ({ title, description }: { title?: string; description?: string }) => {
  return (
    <div className="min-h-[300px] max-w-sm rounded-sm bg-[#F3F3FF] p-6">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#0b0b33] p-3">
        <Image
          src="/images/church.svg"
          alt="Mission icon"
          width={28}
          height={28}
          className="text-white"
        />
      </div>
      <div className="space-y-3 text-[#161C2D]">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="line-clamp-5 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default MissionCard
