import Image from 'next/image'
import Link from 'next/link'

const pages = [
  {
    link: '/buy-policy',
    title: 'Buy a new Policy',
    text: 'You haven’t purchased a policy with Hilal in the past, start here.',
    image: '',
  },
  {
    link: '/renew-policy',
    title: 'Renew your Policy',
    text: 'Retrieve your details and generate a certificate instantly',
    image: '',
  },
]

export default function Home() {
  return (
    <main className="">
      <p className="font-semibold text-xl">
        Welcome to Hilal’s Motor takaful. Drive your car while we protect you
        maximally.
      </p>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        {pages.map((page) => {
          return (
            <Link
              href={page.link}
              key="1"
              className="w-full rounded-md shadow-lg border border-slate-200"
            >
              <div className="h-48 bg-slate-300"></div>
              <section className="p-5 flex justify-between">
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