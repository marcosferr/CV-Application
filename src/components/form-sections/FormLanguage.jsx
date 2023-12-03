import FormSection from "../form-components/FormSection";

import FormWrapper from "../form-components/FormWrapper";

import LanguageInput from "../form-components/LanguageInput";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";
const FormLanguage = ({ description }) => {
  const options = [
    "Beginner",
    "Basic",
    "Intermediate",
    "Advanced",
    "Native or Bilingual",
  ];

  const formattedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));
  const { form, dispatch } = useContext(FormContext);
  const addLanguage = () => {
    dispatch({
      type: "ADD_LANGUAGE",
      payload: { id: uuidv4() },
    });
  };
  console.log(form.languages);
  return (
    <>
      <FormSection
        number={5}
        title={"Languages "}
        description={description}
        action={addLanguage}
        actionText={"Add"}
      />
      <FormWrapper>
        {form.languages.map((item) => (
          <LanguageInput
            key={item.id}
            id={item.id}
            handleChange={dispatch}
            values={item}
            options={formattedOptions}
          />
        ))}
      </FormWrapper>
    </>
  );
};

export default FormLanguage;
