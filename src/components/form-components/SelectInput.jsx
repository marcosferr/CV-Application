const SelectInput = ({ options, value, handleChange, name, className }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className={className}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
