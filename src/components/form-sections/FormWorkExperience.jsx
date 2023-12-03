import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import FormTextArea from "../form-components/FormTextArea";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";
import WorkExperienceItem from "../form-components/WorkExperienceItem";
const FormWorkExperience = ({ description }) => {
  const { form, dispatch } = useContext(FormContext);
  const addWorkExperience = () => {
    dispatch({
      type: "ADD_WORK_EXPERIENCE",
      payload: { id: uuidv4() },
    });
  };
  return (
    <>
      <FormSection
        number={3}
        title={"Work Experience"}
        description={description}
        action={addWorkExperience}
        actionText={"Add"}
      />
      <FormWrapper>
        {form.workExperience.map((item) => (
          <WorkExperienceItem
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

export default FormWorkExperience;
