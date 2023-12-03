import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import EmojiSelector from "../aux-components/EmojiSelector";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";
const FormInterests = ({ description, onDelete }) => {
  return (
    <>
      <FormSection
        number={6}
        title={"Interests "}
        description={description}
        action={() => {}}
        actionText={"Add"}
      />
      <FormWrapper>
        <div className="flex gap-2">
          <EmojiSelector />
          <FormInput
            placeholder={"e.g Reading, Music, Sports"}
            className={"w-100 flex-2"}
            type="text"
          />
          <button className="delete-btn"></button>
        </div>
      </FormWrapper>
    </>
  );
};

export default FormInterests;
