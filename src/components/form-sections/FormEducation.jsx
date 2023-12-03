import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";
import EducationItem from "../form-components/EducationItem";
const FormEducation = ({ description }) => {
  const { form, dispatch } = useContext(FormContext);

  const addEducation = () => {
    dispatch({
      type: "ADD_EDUCATION",
      payload: { id: uuidv4() },
    });
  };
  return (
    <>
      <FormSection
        number={2}
        title={"Education"}
        description={description}
        action={addEducation}
        actionText={"Add"}
      />
      <FormWrapper>
        {form.education.map((item) => (
          <EducationItem
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

export default FormEducation;
