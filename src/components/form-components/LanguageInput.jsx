import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const LanguageInput = ({ options, id, handleChange, values }) => {
  const { form } = useContext(FormContext);
  return (
    <div className="flex gap-1">
      <FormInput
        placeholder={"e.g English"}
        className={"w-100 flex-2"}
        type="text"
        value={values.language}
        handleChange={handleChange}
        action="EDIT_LANGUAGE"
        id={id}
      />
      <SelectInput
        options={options}
        className="flex-1"
        value={values.level}
        handleChange={handleChange}
        action="EDIT_LEVEL"
        id={id}
      />
      {form.workExperience.length > 1 ? ( // if there is more than one education item, show the delete button for each item
        <button
          className="btn btn--danger"
          onClick={() =>
            handleChange({
              type: "DELETE_LANGUAGE",
              payload: id,
            })
          }
        >
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default LanguageInput;
