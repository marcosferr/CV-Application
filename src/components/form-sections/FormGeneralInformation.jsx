import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import FormInput from "../form-components/FormInput";
import FormTextArea from "../form-components/FormTextArea";
import FormWrapper from "../form-components/FormWrapper";
import FormSection from "../form-components/FormSection";
const FormGeneralInformation = ({ description }) => {
  const { form, dispatch } = useContext(FormContext);

  return (
    <>
      <FormSection
        number={1}
        title={"General Information"}
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
        <FormInput label="Profession" name="" type="text" />
        <FormInput label="City and Country" name="" type="text" />
        <div className="flex gap-2">
          <FormInput
            label="LinkedIn username"
            name=""
            type="text"
            className="flex-1"
          />
          <FormInput
            label="Portfolio URL"
            name=""
            type="text"
            className={"flex-1"}
          />{" "}
        </div>
        <div className="flex gap-2">
          <FormInput
            label="Email"
            name="email"
            type="text"
            className="flex-1"
          />
          <FormInput
            label="Phone number"
            name="phoneNumber"
            type="text"
            className={"flex-1"}
          />
        </div>
        <FormTextArea
          label="Description (About me)"
          name="aboutMe"
          placeholder={"Tell us about yourself, your interests, and passions"}
        />
      </FormWrapper>
    </>
  );
};

export default FormGeneralInformation;
