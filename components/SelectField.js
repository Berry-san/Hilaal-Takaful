const SelectField = ({ label, id, name, value, options, onChange, onBlur }) => {
  return (
    <div className="">
      <label htmlFor="" className="text-sm font-medium">
        {label}
      </label>
      <select
        value={value}
        name={name}
        onChange={onChange}
        className="w-full p-3 text-sm font-medium bg-[#f4f4f4] rounded"
      >
        <option>--</option>
      </select>
    </div>
  )
}

export default SelectField
