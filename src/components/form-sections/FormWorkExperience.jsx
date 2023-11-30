import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import FormTextArea from "../form-components/FormTextArea";
const FormWorkExperience = ({ description }) => {
  return (
    <>
      <FormSection
        number={3}
        title={"Work Experience"}
        description={description}
        action={() => {}}
        actionText={"Add"}
      />
      <FormWrapper>
        <div className="flex gap-2">
          <FormInput
            label="Your Position"
            name="name"
            type="text"
            className="flex-1"
          />
          <FormInput
            label="Company"
            name="lastName"
            type="text"
            className="flex-1"
          />
        </div>
        <div className="flex gap-2">
          <FormInput
            label="Location"
            name="name"
            type="text"
            className="flex-1"
          />
          <div className="flex gap-2 flex-1">
            <FormInput
              label="From"
              name="lastName"
              type="text"
              className="flex-1"
            />
            <FormInput
              label="To"
              name="lastName"
              type="text"
              className="flex-1"
            />
          </div>
        </div>
        <FormTextArea label="Task / Achievements" name="" />
      </FormWrapper>
    </>
  );
};

export default FormWorkExperience;
