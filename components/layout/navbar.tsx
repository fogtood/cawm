'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Brand from '@/components/common/brand'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Brand />

        {/* Desktop Links */}
        <div className="hidden space-x-8 text-lg font-medium md:flex">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center gap-1 transition hover:text-blue-600"
            >
              About Us <ChevronDown size={14} />
            </button>
            {openDropdown === 'about' && (
              <div className="absolute mt-2 w-40 rounded-md bg-white p-2 shadow-md">
                <Link
                  href="/about/history"
                  className="block rounded-md px-3 py-2 hover:bg-gray-100"
                >
                  History
                </Link>
                <Link href="/about/team" className="block rounded-md px-3 py-2 hover:bg-gray-100">
                  Our Team
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown('resources')}
              className="flex items-center gap-1 transition hover:text-blue-600"
            >
              Resources <ChevronDown size={14} />
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute mt-2 w-40 rounded-md bg-white p-2 shadow-md">
                <Link
                  href="/resources/blog"
                  className="block rounded-md px-3 py-2 hover:bg-gray-100"
                >
                  Blog
                </Link>
                <Link
                  href="/resources/gallery"
                  className="block rounded-md px-3 py-2 hover:bg-gray-100"
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="transition hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 text-gray-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="border-t bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>

            <details>
              <summary className="flex cursor-pointer items-center justify-between">
                About Us
              </summary>
              <div className="mt-2 flex flex-col space-y-2 pl-4">
                <Link href="/about/history" className="hover:text-blue-600">
                  History
                </Link>
                <Link href="/about/team" className="hover:text-blue-600">
                  Our Team
                </Link>
              </div>
            </details>

            <details>
              <summary className="flex cursor-pointer items-center justify-between">
                Resources
              </summary>
              <div className="mt-2 flex flex-col space-y-2 pl-4">
                <Link href="/resources/blog" className="hover:text-blue-600">
                  Blog
                </Link>
                <Link href="/resources/gallery" className="hover:text-blue-600">
                  Gallery
                </Link>
              </div>
            </details>

            <Link href="/contact" className="transition hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
