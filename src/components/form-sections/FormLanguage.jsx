import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import SelectInput from "../form-components/SelectInput";
import LanguageInput from "../form-components/LanguageInput";
const FormLanguage = ({ description, onDelete }) => {
  const options = [
    "Beginer",
    "Basic",
    "Intermediate",
    "Advanced",
    "Native or Bilingual",
  ];
  return (
    <>
      <FormSection
        number={5}
        title={"Languages "}
        description={description}
        action={() => {}}
        actionText={"Add"}
      />
      <FormWrapper>
        <LanguageInput options={options} />
      </FormWrapper>
    </>
  );
};

export default FormLanguage;
