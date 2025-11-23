import { SlidersHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const Filter = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <SlidersHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>Date</DropdownMenuItem>
        <DropdownMenuItem>Speaker</DropdownMenuItem>
        <DropdownMenuItem>Alphabet</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Filter
