import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
})

export const metadata: Metadata = {
  title: 'Christ Apostolic World Ministries',
  description: 'Official website of Christ Apostolic World Ministries (CAWM)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
