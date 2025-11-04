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
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'

interface MenuItem {
  title: string
  href?: string
  subMenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    subMenu: [
      {
        title: 'CAWM',
        href: '/about',
      },
      {
        title: 'Youth',
        href: '/about/youths',
      },
      {
        title: 'Ministries',
        href: '/about/ministries',
      },
    ],
  },
  {
    title: 'Resources',
    subMenu: [
      {
        title: 'Media',
        href: '/media',
      },
      {
        title: 'Events',
        href: '/events',
      },
      {
        title: 'Sermons',
        href: '/sermons',
      },
    ],
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Brand />

        {/* Desktop Links */}
        <NavigationMenu className="hidden text-[#262626]! md:block">
          <NavigationMenuList className="flex gap-8">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subMenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent! p-0 text-lg font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="rounded-none border-none shadow-none">
                      <ul className="grid w-[135px] gap-4 p-3">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink className="bg-transparent!" asChild>
                              <Link href={subItem.href ?? '/'}>{subItem.title}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} bg-transparent! p-0 text-lg font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#393798] after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    <Link href={item.href ?? '/'}>{item.title}</Link>
                  </NavigationMenuLink>
                )}
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

          <SheetContent side="left" className="w-64 px-5 py-10 text-[#262626] md:hidden">
            <SheetTitle className="sr-only" />
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <MenuItemComponent key={item.title} item={item} setParentOpen={setOpen} />
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

  const handleLinkClick = () => setParentOpen(false)

  if (item.subMenu) {
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
          {item.subMenu.map((subItem) => (
            <MenuItemComponent
              key={subItem.title}
              item={subItem}
              depth={depth + 1}
              setParentOpen={setParentOpen}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link
      href={item.href ?? '/'}
      className={cn('block py-2 text-lg font-medium', depth > 0 && 'pl-4 text-base')}
      onClick={handleLinkClick}
    >
      {item.title}
    </Link>
  )
}

export default Navbar
