'use client'

import { PlayIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const AppButton = () => {
  const handleScroll = () => {
    const element = document.getElementById('watch-live')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button
      size="icon"
      className="h-auto w-auto cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-2 text-base font-normal sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
      asChild
    >
      <Link href="#watch-live" onClick={handleScroll}>
        <PlayIcon fill="white" />
        Watch Live
      </Link>
    </Button>
  )
}

export default AppButton
