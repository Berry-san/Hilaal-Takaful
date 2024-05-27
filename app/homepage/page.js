'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const pages = [
  {
    link: '/buy-policy',
    title: 'Buy a new Policy',
    text: 'You haven’t purchased a policy with Hilal in the past, start here.',
    image: '/assets/images/18108.jpg',
  },
  {
    link: '/renew-policy',
    title: 'Renew your Policy',
    text: 'Retrieve your details and generate a certificate instantly',
    image: '/assets/images/125165.jpg',
  },
]

export default function HomePage() {
  const { user } = useSelector((state) => state.auth)
  const { email } = user

  return (
    <main className="">
      <p className="text-xl font-semibold">
        Welcome to Hilal’s Motor takaful. Drive your car while we protect you
        maximally.
      </p>
      <div className="flex flex-col gap-5 mt-5 md:flex-row">
        {pages.map((page, index) => {
          return (
            <Link
              href={page.link}
              key={index}
              className="w-full border rounded-md shadow-lg border-slate-200"
            >
              <div className="rounded-md">
                <Image
                  src={page.image}
                  width={600}
                  height={400}
                  sizes=""
                  alt=""
                  // layout="responsive" // Set layout to responsive
                  className="object-cover rounded-t-md h-56"
                />
              </div>

              <section className="flex justify-between p-5">
                <div className="flex flex-col gap-3">
                  <h2 className="font-bold">{page.title}</h2>
                  <p>{page.text}</p>
                </div>
                <Image
                  src="/assets/icons/right-arrow.svg"
                  width={25}
                  height={25}
                  alt="logo"
                />
              </section>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
