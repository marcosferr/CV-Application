const SelectInput = ({
  options,
  value,
  handleChange,
  name,
  className,
  id,
  action,
}) => {
  console.log(value); //This console logs the value of the select input correctly like "Beginner" or "Advanced"
  return (
    <select
      value={value}
      onChange={(e) =>
        handleChange({
          type: action,
          payload: { id, value: e.target.value },
        })
      }
      className={className}
    >
      <option value="" disabled>
        {" "}
        Select language proficiency
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
