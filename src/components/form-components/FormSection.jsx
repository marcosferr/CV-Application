const FormSection = ({ number, title, description, action, actionText }) => {
  return (
    <div className="form-section">
      <div className="title-container">
        <div className="number"> {number}</div>
        <h2>{title}</h2>
      </div>
      <div className="description-container">
        <p>{description}</p>
        {action ? (
          <button className="btn btn-primary" onClick={action}>
            + {actionText}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default FormSection;
