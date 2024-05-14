'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import Logout from './Logout'

const Nav = () => {
  const pathname = usePathname()
  const { isAuthenticated } = useSelector((state) => state.auth.user)

  return (
    <div className="flex items-center justify-between px-5 py-5 xl:px-48 bg-white border-b border-slate-200">
      <Link href="/homepage" className="flex gap-3 items-center">
        <Image
          src="/assets/images/logo.svg"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="text-maroon font-bold text-2xl">Hilaal Takaful</p>
      </Link>
      {isAuthenticated === false ? (
        pathname === '/login' || pathname === '/register' ? (
          ''
        ) : (
          <Link href="/login" className="underline font-semibold">
            Agent Login
          </Link>
        )
      ) : (
        ''
      )}
    </div>
  )
}

export default Nav
