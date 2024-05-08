import Image from 'next/image'

const Button = ({ text, onClick, image, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex items-center justify-center px-3 py-2 text-lg text-white rounded bg-dark"
      disabled={disabled}
    >
      {text}
      {image && (
        <Image src={image} width={20} height={20} alt="" className="ml-3" />
      )}
    </button>
  )
}

export default Button
