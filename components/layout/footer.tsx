import { Mail, MapPin, Phone } from 'lucide-react'
import Brand from '../common/brand'
import Link from 'next/link'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#101010] pt-28.75 text-[#DADADACC]">
      <div className="container mx-auto gap-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 space-y-3.5">
            <Brand />
            <h4 className="font- text-lg text-white">Christ Apostolic World Ministry</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} /> <span>123 Main St, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} /> <span>+123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} /> <span>info@example.com</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-3.5">
            <h4 className="text-lg font-medium text-white">Quick Links</h4>
            <ul className="space-y-5 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-3.5">
            <h4 className="text-lg font-medium text-white">Service Times</h4>
            <ul className="space-y-5 text-sm">
              <li>Wednesday (6:00PM)</li>
              <li>Communion (6:00PM)</li>
              <li>Special Sunday Service (6:00PM)</li>
            </ul>
          </div>

          <div className="col-span-1 space-y-3.5">
            <h4 className="text-lg font-medium text-white">Stay Connected</h4>
            <p className="text-sm">Subscribe to our newsletter for updates and inspiration.</p>
            <form>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mb-4 h-auto w-full max-w-sm rounded-sm border-[#DADADA4D]! bg-[#57575633] px-2.5 py-3.5 ring-0!"
              />
              <Button className="h-auto w-full cursor-pointer rounded-sm bg-linear-to-r from-[#393798] to-[#131232] px-6 py-3 text-base font-normal">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#5757564D] py-5">
          <p className="text-sm">© 2025 Christ Apostolic World Ministry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Button size="icon" className="cursor-pointer rounded-xs bg-[#57575633] p-1.5">
              <Image src="/images/instagram.svg" alt="Instagram" height={18} width={18} />
            </Button>
            <Button size="icon" className="cursor-pointer rounded-xs bg-[#57575633] p-1.5">
              <Image src="/images/yt.svg" alt="YouTube" height={18} width={18} />
            </Button>
            <Button size="icon" className="cursor-pointer rounded-xs bg-[#57575633] p-1.5">
              <Image src="/images/x.svg" alt="X" height={18} width={18} />
            </Button>
            <Button size="icon" className="cursor-pointer rounded-xs bg-[#57575633] p-1.5">
              <Image src="/images/tiktok.svg" alt="TikTok" height={18} width={18} />
            </Button>
            <Button size="icon" className="cursor-pointer rounded-xs bg-[#57575633] p-1.5">
              <Image src="/images/spotify.svg" alt="Spotify" height={18} width={18} />
            </Button>
            <Button size="icon" className="cursor-pointer rounded-xs bg-[#57575633] p-1.5">
              <Image src="/images/facebook.svg" alt="Facebook" height={18} width={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
