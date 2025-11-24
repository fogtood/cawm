'use client'

import { SearchIcon } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
  const { replace } = useRouter()
  const params = useSearchParams()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((value: string) => {
    const newParams = new URLSearchParams(params)
    if (value) {
      newParams.set('search', value)
    } else {
      newParams.delete('search')
    }
    replace(`${pathname}?${newParams.toString()}`)
  }, 300)

  return (
    <InputGroup className="h-auto border-[#C5C3C6]! py-1 shadow-none ring-0!">
      <InputGroupInput
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={params.get('search')?.toString()}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  )
}
