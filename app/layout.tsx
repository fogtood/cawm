import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import AOSInit from '@/components/common/aos-init'
import { SanityLive } from '@/sanity/live'
import { sanityFetch } from '@/sanity/live'
import { generalSettingsQuery, navigationQuery } from '@/lib/sanity.queries'

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({ query: generalSettingsQuery })

  return {
    title: {
      default: settings?.siteTitle || 'Christ Apostolic World Revival Ministry',
      template: '%s | CAWRM', // Page title | CAWRM
    },
    description:
      settings?.siteDescription ||
      'Official website of Christ Apostolic World Revival Ministry (CAWRM)',
    keywords: settings?.seo?.keywords || [],
    authors: [{ name: 'Christ Apostolic World Revival Ministry' }],
    creator: 'Christ Apostolic World Revival Ministry',
    publisher: 'Christ Apostolic World Revival Ministry',
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: navigation } = await sanityFetch({ query: navigationQuery })

  return (
    <html lang="en">
      <body className={`${clashDisplay.className} font-sans antialiased`}>
        <AOSInit />
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar menuItems={navigation?.menuItems || []} />
          <section className="flex-1">{children}</section>
          <Footer />
        </div>
        <SanityLive />
      </body>
    </html>
  )
}
