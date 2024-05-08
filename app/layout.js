import { Crimson_Pro } from 'next/font/google'
import './globals.css'

import ProtectedRoute from '@/components/protectedRoute'
import { ReduxProvider } from '@/redux/provider'
const inter = Crimson_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Hilal Takaful',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <ReduxProvider>
        <ProtectedRoute>{children}</ProtectedRoute>
      </ReduxProvider>
    </html>
  )
}
