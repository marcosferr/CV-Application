const FormTextArea = ({
  className,
  label,
  name,
  handleChange,
  action,
  value,
  placeholder,
  id,
}) => {
  return (
    <>
      <div className={`input-combo ${className}`}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <textarea
          rows={5}
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

export default FormTextArea;
