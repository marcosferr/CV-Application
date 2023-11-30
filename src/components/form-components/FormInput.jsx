const FormInput = ({
  className,
  type,
  label,
  name,
  handleChange,
  value,
  placeholder,
}) => {
  return (
    <>
      <div className={`input-combo ${className}`}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input
          type={type}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormInput;
