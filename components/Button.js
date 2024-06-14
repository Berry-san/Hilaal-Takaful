import Image from 'next/image'
import LoadingAnimation from './Loading'

const Button = ({ text, onClick, image, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex items-center justify-center w-full px-2 py-3 text-white rounded text-md bg-dark md:w-40"
      disabled={disabled}
    >
      {disabled ? <LoadingAnimation /> : text}
      {image && (
        <Image src={image} width={20} height={20} alt="" className="ml-3" />
      )}
    </button>
  )
}

export default Button
