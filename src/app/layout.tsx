import { Header } from '@/components/Heder'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer } from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Procure seu pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
