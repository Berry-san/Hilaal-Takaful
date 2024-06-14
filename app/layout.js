import { Crimson_Pro } from 'next/font/google'
import './globals.css'

import ProtectedRoute from '@/components/protectedRoute'
import { ReduxProvider } from '@/redux/provider'
import Nav from '@/components/Nav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Crimson_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Hilal Takaful',
  description: 'Your one-stop shop for motor insurance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-cream">
        <ReduxProvider>
          <Nav />
          <main className="px-5 py-5 md:px-24 lg:px-48 xl:pt-16">
            {children}
            <ToastContainer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
