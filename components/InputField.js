const InputField = ({
  label,
  type,
  id,
  name,
  touched,
  errors,
  value,
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    <div className="">
      <label htmlFor="" className="text-sm font-medium">
        {label}:
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#f4f4f4] px-5 py-3 focus:outline-none rounded-md"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && errors ? (
        <p className="mt-1 text-xs font-medium text-red-500">{errors}</p>
      ) : null}
    </div>
  )
}

export default InputField
