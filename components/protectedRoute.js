'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Nav from '@/components/Nav'
import { useRouter } from 'next/navigation'
import { ReduxProvider } from '@/redux/provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const { isAuthenticated } = useSelector((state) => state.auth.user)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])
  return (
    <body className="bg-cream">
      <Nav />
      <main className="px-5 py-5 md:px-24 lg:px-48">
        <ReduxProvider>{children}</ReduxProvider>
        <ToastContainer />
      </main>
    </body>
  )
}

export default ProtectedRoute
