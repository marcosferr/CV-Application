import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import SkillGroup from "../form-components/SkillGroup";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";
const FormSkills = ({ description, onDelete }) => {
  const { form, dispatch } = useContext(FormContext);
  const addSkill = () => {
    dispatch({
      type: "ADD_SKILL",
      payload: { id: uuidv4() },
    });
  };
  return (
    <>
      <FormSection
        number={4}
        title={"Skills "}
        description={description}
        action={addSkill}
        actionText={"Add"}
      />
      <FormWrapper>
        {form.skills.map((item) => (
          <SkillGroup
            key={item.id}
            id={item.id}
            handleChange={dispatch}
            values={item}
          />
        ))}
      </FormWrapper>
    </>
  );
};

export default FormSkills;
