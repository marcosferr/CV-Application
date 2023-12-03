const FormInput = ({
  className,
  type,
  label,
  name,
  handleChange,
  value,
  placeholder,
  action,
  id,
}) => {
  return (
    <>
      <div className={`input-combo ${className}`}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input
          type={type}
          name={name}
          onChange={(e) =>
            handleChange({
              type: action,
              payload: { value: e.target.value, id: id },
            })
          }
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormInput;
