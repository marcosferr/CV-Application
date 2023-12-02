const FormInput = ({
  className,
  type,
  label,
  name,
  handleChange,
  value,
  placeholder,
  action,
}) => {
  return (
    <>
      <div className={`input-combo ${className}`}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input
          type={type}
          name={name}
          onChange={(e) =>
            handleChange({ type: action, payload: e.target.value })
          }
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormInput;
