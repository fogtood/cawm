import Bg from '@/components/common/bg'
import SermonCard from '@/components/common/sermon-card'

export default function Sermons() {
  return (
    <div>
      <Bg
        title="Sermons"
        subtitle="Experience life-transforming messages that bring hope, healing, and breakthroughs"
      />
      <div className="container mx-auto my-20 grid grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(16)].map((_, index) => (
          <SermonCard key={index} />
        ))}
      </div>
    </div>
  )
}
