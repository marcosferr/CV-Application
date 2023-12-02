const FormTextArea = ({
  className,
  label,
  name,
  handleChange,
  action,
  value,
  placeholder,
}) => {
  return (
    <>
      <div className={`input-combo ${className}`}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <textarea
          rows={5}
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

export default FormTextArea;
