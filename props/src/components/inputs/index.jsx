const Inputs = ({
  label,
  className,
  type,
  onChange,
  name,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-md font-thin">
        {label}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        name={name}
        className={`px-3 bg-white text-black py-2 border border-slate-700 rounded-md ${className}`}
      />
    </div>
  );
};

export default Inputs;
