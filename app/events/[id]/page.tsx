import Bg from '@/components/common/bg'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function EventDetails() {
  return (
    <div>
      <Bg
        title="Events"
        subtitle="Join us for our upcoming events and experience community like never before"
      />

      <div className="container mx-auto my-20 px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-[#1A1A1A]">Mid-Week Service</h1>
          <Button
            className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal"
            asChild
          >
            <Link href="/sermons">
              Add to Calendar <Calendar />
            </Link>
          </Button>
        </div>

        <div className="mt-4 space-y-4 text-[#575756]">
          <p className="flex items-center gap-3">
            <Clock size={18} /> 6:00PM
          </p>
          <p className="flex items-center gap-3">
            <Calendar size={18} /> 25th October, 2025
          </p>
          <p className="flex items-center gap-3">
            <MapPin size={18} /> Main Church Auditorium
          </p>
        </div>

        <p className="my-8 text-base leading-7 text-[#575756] md:text-lg md:leading-9">
          Lorem ipsum dolor sit amet consectetur. Leo in sed magna sapien purus augue duis. Id
          imperdiet a tristique quam ultrices tincidunt suspendisse nec mauris. Diam amet
          ullamcorper sed sed a sapien. Tincidunt tellus bibendum proin pharetra est in et sagittis.
          Ut massa est vitae eget magna id. Parturient diam ut viverra nibh lacus imperdiet cursus.
          Pellentesque elementum risus id blandit morbi elit praesent. Mattis volutpat ut risus
          blandit nulla. Praesent sapien semper at adipiscing. Eget ut in arcu orci ultrices lorem
          lobortis. Quam in amet vulputate egestas tellus id ullamcorper nam turpis. Neque feugiat
          ipsum a proin ullamcorper turpis turpis sem. Tempus quisque egestas gravida pellentesque
          maecenas. Risus dictum et porta sagittis amet ut ut purus et. In amet pellentesque in nunc
          nullam sed mattis. Facilisi dui ultrices viverra erat sit phasellus. Maecenas magna
          consequat adipiscing congue ultricies sem eget leLorem ipsum dolor sit amet consectetur.
          Leo in sed magna sapien purus augue duis. Id imperdiet a tristique quam ultrices tincidunt
          suspendisse nec mauris. Diam amet ullamcorper sed sed a sapien. Tincidunt tellus bibendum
          proin pharetra est in et sagittis. Ut massa est vitae eget magna id. Parturient diam ut
          viverra nibh lacus imperdiet cursus. Pellentesque elementum risus id blandit morbi elit
          praesent. Mattis volutpat ut risus blandit nulla. Praesent sapien semper at adipiscing.
          Eget ut in arcu orci ultrices lorem lobortis. Quam in amet vulputate egestas tellus id
          ullamcorper nam turpis. Neque feugiat ipsum a proin ullamcorper turpis turpis sem. Tempus
          quisque egestas gravida pellentesque maecenas. Risus dictum et porta sagittis amet ut ut
          purus et. In amet pellentesque in nunc nullam sed mattis. Facilisi dui ultrices viverra
          erat sit phasellus. Maecenas magna consequat adipiscing congue ultricies sem eget lectus.
          ctus.
        </p>
      </div>
    </div>
  )
}
