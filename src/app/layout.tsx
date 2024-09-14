import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/theme-context'
import { Venue } from '@/@types/api-type'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const response = await fetch(
    'https://cdn-dev.preoday.com/challenge/venue/9',
    {
      method: 'GET',
    },
  )

  const data = (await response.json()) as Venue

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider themeData={data.webSettings}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
