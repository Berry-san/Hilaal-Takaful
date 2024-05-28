'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Logout from './Logout'

const Nav = () => {
  const pathname = usePathname()
  const { isAuthenticated, username } = useSelector((state) => state.auth.user)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex items-center justify-between px-5 py-5 md:px-24 lg:px-48 bg-white border-b border-slate-200">
      <Link href="/homepage" className="flex gap-3 items-center">
        <Image
          src="/assets/images/logo.svg"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="text-maroon font-bold text-2xl hidden md:flex">
          Hilal Takaful
        </p>
      </Link>
      {isClient ? (
        isAuthenticated === false ? (
          pathname === '/login' || pathname === '/register' ? null : (
            <Link href="/login" className="underline font-semibold">
              Agent Login
            </Link>
          )
        ) : (
          <p>
            Welcome, <span className="font-extrabold">{username}</span>
          </p>
        )
      ) : (
        <p className="hidden">Loading...</p>
      )}
    </div>
  )
}

export default Nav
