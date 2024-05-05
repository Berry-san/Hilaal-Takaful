import { Crimson_Pro } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Crimson_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Hilal Takaful',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-cream">
        <Nav />
        <main className="px-5 py-5 md:px-24 lg:px-48">{children}</main>
      </body>
    </html>
  )
}
