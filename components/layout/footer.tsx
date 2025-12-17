import { Mail, MapPin, Phone } from 'lucide-react'
import Brand from '../common/brand'
import Link from 'next/link'
import Image from 'next/image'
import FooterForm from '../common/footer-form'
import { client } from '@/lib/sanity.client'
import { generalSettingsQuery, servicesQuery } from '@/lib/sanity.queries'
import type { GeneralSettings, Service } from '@/sanity.types'
import { PortableText } from '@portabletext/react'

const Footer = async () => {
  let generalSettings: GeneralSettings | null = null
  let services: Service[] = []

  try {
    ;[generalSettings, services] = await Promise.all([
      client.fetch(generalSettingsQuery),
      client.fetch(servicesQuery),
    ])
  } catch (error) {
    console.error('Error fetching footer data from Sanity:', error)
  }

  const email = generalSettings?.email || 'info@example.com'
  const phone = generalSettings?.phone || '+123 456 7890'
  const address = generalSettings?.address
  const siteTitle = generalSettings?.siteTitle || 'Christ Apostolic World Revival Ministry'

  return (
    <footer className="bg-[#101010] pt-16 text-[#DADADACC] md:pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 space-y-3.5">
            <Brand />
            <h1 className="text-lg font-medium text-white">{siteTitle}</h1>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="flex-none" />
                {address ? (
                  <><PortableText value={address} /></>
                ) : (
                  <span>123 Main St, City, Country</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-none" /> <span>{phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-none" /> <span>{email}</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-3.5">
            <h1 className="text-lg font-medium text-white">Quick Links</h1>
            <ul className="space-y-5 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 space-y-3.5">
            <h1 className="text-lg font-medium text-white">Service Times</h1>
            <ul className="space-y-5 text-sm">
              {services && services.length > 0 ? (
                services.map((service) => (
                  <li key={service._id}>
                    {service.schedule?.day} ({service.schedule?.time})
                  </li>
                ))
              ) : (
                <>
                  <li>Wednesday (6:00PM)</li>
                  <li>Sunday (6:00PM)</li>
                  <li>Special Service (6:00PM)</li>
                </>
              )}
            </ul>
          </div>

          <div className="col-span-1 space-y-3.5">
            <h1 className="text-lg font-medium text-white">Stay Connected</h1>
            <p className="text-sm">Subscribe to our newsletter for updates and inspiration.</p>
            <FooterForm />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-[#5757564D] py-5 md:justify-between">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {generalSettings?.instagram && (
              <a
                href={generalSettings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xs bg-[#57575633] p-1.5 transition-colors hover:bg-[#5757564D]"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="Instagram"
                  height={18}
                  width={18}
                  className="shrink-0"
                />
              </a>
            )}
            {generalSettings?.youtube && (
              <a
                href={generalSettings.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xs bg-[#57575633] p-1.5 transition-colors hover:bg-[#5757564D]"
              >
                <Image
                  src="/images/yt.svg"
                  alt="YouTube"
                  height={18}
                  width={18}
                  className="shrink-0"
                />
              </a>
            )}
            {generalSettings?.tiktok && (
              <a
                href={generalSettings.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xs bg-[#57575633] p-1.5 transition-colors hover:bg-[#5757564D]"
              >
                <Image
                  src="/images/tiktok.svg"
                  alt="TikTok"
                  height={18}
                  width={18}
                  className="shrink-0"
                />
              </a>
            )}
            {generalSettings?.spotify && (
              <a
                href={generalSettings.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xs bg-[#57575633] p-1.5 transition-colors hover:bg-[#5757564D]"
              >
                <Image
                  src="/images/spotify.svg"
                  alt="Spotify"
                  height={18}
                  width={18}
                  className="shrink-0"
                />
              </a>
            )}
            {generalSettings?.twitter && (
              <a
                href={generalSettings.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xs bg-[#57575633] p-1.5 transition-colors hover:bg-[#5757564D]"
              >
                <Image src="/images/x.svg" alt="X" height={18} width={18} className="shrink-0" />
              </a>
            )}
            {generalSettings?.facebook && (
              <a
                href={generalSettings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-xs bg-[#57575633] p-1.5 transition-colors hover:bg-[#5757564D]"
              >
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook"
                  height={18}
                  width={18}
                  className="shrink-0"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
