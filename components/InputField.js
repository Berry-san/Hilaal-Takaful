const InputField = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
      <label htmlFor="" className="text-sm font-medium">
        {label}:
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default InputField
