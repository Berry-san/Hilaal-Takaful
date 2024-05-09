import Button from '@/components/Button'
import Image from 'next/image'

const SuccessPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6">
        <Image
          src="/assets/icons/success.svg"
          width={250}
          height={250}
          alt="success"
        />
        <p className="text-green-400 text-2xl font-bold">Payment Successful</p>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button text="Download Certificate" />
      </div>
    </>
  )
}

export default SuccessPage
