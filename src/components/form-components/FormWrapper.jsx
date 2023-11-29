const FormWrapper = ({ children, className }) => {
  return <div className={`form-wrapper ${className}`}>{children}</div>;
};

export default FormWrapper;
