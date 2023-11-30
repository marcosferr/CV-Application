import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
const FormEducation = ({ description }) => {
  return (
    <>
      <FormSection
        number={2}
        title={"Education"}
        description={description}
        action={() => {}}
        actionText={"Add"}
      />
      <FormWrapper>
        <div className="flex gap-2">
          <FormInput
            label="First name"
            name="name"
            type="text"
            className="flex-1"
          />
          <FormInput
            label="Last name"
            name="lastName"
            type="text"
            className="flex-1"
          />
        </div>
        <div className="flex gap-2">
          <FormInput
            label="First name"
            name="name"
            type="text"
            className="flex-1"
          />
          <FormInput
            label="Last name"
            name="lastName"
            type="text"
            className="flex-1"
          />
        </div>
      </FormWrapper>
    </>
  );
};

export default FormEducation;
