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
      />
      <FormWrapper>
        <div className="flex gap-2">
          <FormInput
            label="First name"
            name="name"
            type="text"
            className="flex-1"
            handleChange={dispatch}
            value={form.firstName}
            action="EDIT_NAME"
          />
          <FormInput
            label="Last name"
            name="lastName"
            type="text"
            className="flex-1"
            handleChange={dispatch}
            value={form.lastName}
            action="EDIT_LAST_NAME"
          />
        </div>
        <FormInput
          label="Profession"
          name=""
          type="text"
          handleChange={dispatch}
          action="EDIT_PROFESSION"
          value={form.profession}
        />
        <FormInput
          label="City and Country"
          name=""
          type="text"
          handleChange={dispatch}
          action="EDIT_CITY"
          value={form.city}
        />
        <div className="flex gap-2">
          <FormInput
            label="LinkedIn username"
            name=""
            type="text"
            className="flex-1"
            handleChange={dispatch}
            action="EDIT_LINKEDIN"
            value={form.linkedIn}
          />
          <FormInput
            label="Portfolio URL"
            name=""
            type="text"
            className={"flex-1"}
            handleChange={dispatch}
            action="EDIT_PORTFOLIO"
            value={form.portfolioURL}
          />
        </div>
        <div className="flex gap-2">
          <FormInput
            label="Email"
            name="email"
            type="text"
            className="flex-1"
            handleChange={dispatch}
            action="EDIT_EMAIL"
            value={form.email}
          />
          <FormInput
            label="Phone number"
            name="phoneNumber"
            type="text"
            className={"flex-1"}
            handleChange={dispatch}
            action="EDIT_PHONE_NUMBER"
            value={form.phoneNumber}
          />
        </div>
        <FormTextArea
          label="Description (About me)"
          name="aboutMe"
          placeholder={"Tell us about yourself, your interests, and passions"}
          handleChange={dispatch}
          action="EDIT_DESCRIPTION"
          value={form.description}
        />
      </FormWrapper>
    </>
  );
};

export default FormGeneralInformation;
