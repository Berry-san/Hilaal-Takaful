import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="px-5 py-5 xl:px-48 bg-white border-b border-slate-200">
      <Link href="/homepage" className="flex gap-3 items-center">
        <Image
          src="/assets/images/logo.svg"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="text-maroon font-bold text-2xl">Hilaal Takaful</p>
      </Link>
    </div>
  )
}

export default Nav
