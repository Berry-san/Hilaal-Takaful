'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const BackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button onClick={goBack} className="px-4 py-3 rounded-full bg-dark">
      <Image
        alt=""
        src="/assets/icons/back-button.svg"
        width={10}
        height={10}
      />
    </button>
  )
}

export default BackButton
