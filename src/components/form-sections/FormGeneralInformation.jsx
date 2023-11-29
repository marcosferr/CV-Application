import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import FormInput from "../form-components/FormInput";
const FormGeneralInformation = () => {
  const { form, dispatch } = useContext(FormContext);
  return (
    <>
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
        />
      </div>
    </>
  );
};

export default FormGeneralInformation;
