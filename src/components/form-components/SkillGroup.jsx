import FormInput from "./FormInput";

import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const SkillGroup = ({ id, handleChange, values }) => {
  const { form } = useContext(FormContext);
  return (
    <div className="flex gap-2 skills-container">
      <FormInput
        placeholder={"e.g Strong communication"}
        className={"w-100"}
        type="text"
        value={values.skill}
        handleChange={handleChange}
        action="EDIT_SKILL"
        id={id}
      />
      {form.workExperience.length > 1 ? ( // if there is more than one education item, show the delete button for each item
        <button
          className="btn btn--danger"
          onClick={() =>
            handleChange({
              type: "DELETE_SKILL",
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

export default SkillGroup;
