'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, ChevronUp } from 'lucide-react'
import Brand from '@/components/common/brand'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '../ui/sheet'

interface SubMenuItem {
  title: string
  slug: string
}

interface MenuItem {
  title: string
  slug?: string
  subMenu?: SubMenuItem[]
  order?: number
}

interface NavbarProps {
  menuItems?: MenuItem[]
}

const Navbar = ({ menuItems = [] }: NavbarProps) => {
  const [open, setOpen] = useState(false)

  // Sort menu items by order
  const sortedMenuItems = [...menuItems].sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Brand />

        {/* Desktop Links */}
        <NavigationMenu className="hidden text-[#262626]! md:block">
          <NavigationMenuList className="flex gap-8">
            {sortedMenuItems.map((item, idx) => (
              <NavigationMenuItem key={idx}>
                {item.subMenu && item.subMenu.length > 0 ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent! p-0 text-lg font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="rounded-none border-none shadow-none">
                      <ul className="grid w-[135px] gap-2 p-3">
                        {item.subMenu.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <NavigationMenuLink className="bg-transparent! text-lg" asChild>
                              <Link href={subItem.slug}>{subItem.title}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : item.slug ? (
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} bg-transparent! p-0 text-lg font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#393798] after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    <Link href={item.slug}>{item.title}</Link>
                  </NavigationMenuLink>
                ) : null}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[240px] px-5 py-10 text-[#262626] sm:w-[300px] md:hidden"
          >
            <SheetTitle className="sr-only" />
            <SheetDescription className="sr-only" />
            <nav className="flex flex-col space-y-4">
              {sortedMenuItems.map((item, idx) => (
                <MenuItemComponent key={idx} item={item} setParentOpen={setOpen} />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

interface MenuItemComponentProps {
  item: MenuItem
  depth?: number
  setParentOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuItemComponent = ({ item, depth = 0, setParentOpen }: MenuItemComponentProps) => {
  const [isOpen, setIsOpen] = useState(false)

  if (item.subMenu && item.subMenu.length > 0) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              'flex w-full items-center justify-between py-2 text-lg font-medium',
              depth > 0 && 'pl-4'
            )}
          >
            {item.title}
            {isOpen ? <ChevronUp className="size-6" /> : <ChevronDown className="size-6" />}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.subMenu.map((subItem, subIdx) => (
            <a
              key={subIdx}
              href={subItem.slug}
              className={cn(
                'block py-2 text-base font-medium transition-colors hover:text-primary',
                'pl-4'
              )}
              onClick={() => setParentOpen(false)}
            >
              {subItem.title}
            </a>
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  if (item.slug) {
    return (
      <a
        href={item.slug}
        className={cn(
          'block py-2 text-lg font-medium transition-colors hover:text-primary',
          depth > 0 && 'pl-4'
        )}
        onClick={() => setParentOpen(false)}
      >
        {item.title}
      </a>
    )
  }

  return null
}

export default Navbar
