import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import SkillGroup from "../form-components/SkillGroup";
const FormSkills = ({ description, onDelete }) => {
  return (
    <>
      <FormSection
        number={4}
        title={"Skills "}
        description={description}
        action={() => {}}
        actionText={"Add"}
      />
      <FormWrapper>
        <SkillGroup />
      </FormWrapper>
    </>
  );
};

export default FormSkills;
