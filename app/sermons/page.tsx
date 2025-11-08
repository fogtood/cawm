// import AppPagination from '@/components/common/app-pagination'
import Bg from '@/components/common/bg'
import SermonCard from '@/components/common/sermon-card'

export default function Sermons() {
  return (
    <div>
      <Bg
        title="Sermons"
        subtitle="Experience life-transforming messages that bring hope, healing, and breakthroughs"
      />
      <div className="container mx-auto my-20 px-4 md:px-6">
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(16)].map((_, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 50} data-aos-duration="800">
              <SermonCard />
            </div>
          ))}
        </div>
        {/* <AppPagination /> */}
      </div>
    </div>
  )
}
