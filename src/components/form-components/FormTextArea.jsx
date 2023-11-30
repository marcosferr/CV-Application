const FormTextArea = ({
  className,
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
        <textarea
          rows={5}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormTextArea;
