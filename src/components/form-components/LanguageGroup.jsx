import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
const SkillGroup = ({ onDelete }) => {
  return (
    <>
      <SelectInput
        options={options}
        value={value}
        handleChange={handleChange}
        name={name}
      />
      <button onClick={onDelete}></button>
    </>
  );
};

export default SkillGroup;
