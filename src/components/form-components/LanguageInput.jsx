import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
const LanguageInput = ({ options }) => {
  return (
    <div className="flex gap-1">
      <FormInput
        placeholder={"e.g English"}
        className={"w-100 flex-2"}
        type="text"
      />
      <SelectInput options={options} className="flex-1" />
      <button className="delete-btn"></button>
    </div>
  );
};

export default LanguageInput;
