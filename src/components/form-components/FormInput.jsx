const FormInput = ({ className, type, label, name, handleChange, value }) => {
  return (
    <>
      <div className={`input-combo ${className}`}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input type={type} name={name} onChange={handleChange} value={value} />
      </div>
    </>
  );
};

export default FormInput;
