import Image from 'next/image'

const MissionCard = () => {
  return (
    <div className="max-w-sm rounded-sm bg-[#F3F3FF] px-6 py-8">
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
        <h1 className="text-lg font-semibold">Mission Statement</h1>
        <p className="line-clamp-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Erat sapien quis aliquet in nunc lobortis
          condimentum. Id urna consectetur amet quam aliquam.
        </p>
      </div>
    </div>
  )
}

export default MissionCard
