import Bg from '@/components/common/bg'
import SermonCard from '@/components/common/sermon-card'

export default function Sermons() {
  return (
    <div>
      <Bg
        title="Sermons"
        subtitle="Experience life-transforming messages that bring hope, healing, and breakthroughs"
      />
      <div className="container mx-auto my-20 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        {[...Array(16)].map((_, index) => (
          <SermonCard key={index} />
        ))}
      </div>
    </div>
  )
}
