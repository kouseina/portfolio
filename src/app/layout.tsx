import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics} from '@vercel/analytics/react'

import YandexMetrika from '#/Global/Analytics'
import Header from '#/Global/Header'
import Particles from '#/Global/Particles'

const SuisseIntl = localFont({
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
    },
  ],
})

const website = {
  siteName: 'Kouseina',
  title: 'Kouseina',
  description: "I have 3 years of experience in Flutter application development and I have built many Android and iOS apps with flutter framework by working on those projects, I accrued an imposing skill set, which has taught me punctuality. My motto is to provide high-quality work dedicated to work and client satisfaction delivered before the client deadline.",
  keywords: 'kouseina, daffa, daffa putera, daffa putera k, kouseina daffa, daffa putera kouseina',
  url: 'https://kouseina.vercel.app/',
  generator: 'nextjs, react, website',
}

export const metadata: Metadata = {
  title: {
    default: website.title,
    template: `%s — ${website.siteName}`,
  },

  description: website.description,
  keywords: website.keywords,

  metadataBase: new URL(website.url),
  generator: website.generator,

  openGraph: {
    type: 'website',
    url: website.url,
    title: website.title,
    description: website.description,
    siteName: website.title,
    images: `${website.url}/seo.jpg`,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {process.env.NODE_ENV === 'production' && (
        <>
          <YandexMetrika />
          <Analytics />
        </>
      )}
      <body className={`${SuisseIntl.className} bg-custom-black text-white`}>
        <Header />
        {children}
        <SpeedInsights />
        <Particles className="fixed inset-0 h-screen overflow-hidden -z-10 opacity-70" />
      </body>
    </html>
  )
}
