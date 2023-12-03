import FormSection from "../form-components/FormSection";
import FormInput from "../form-components/FormInput";
import FormWrapper from "../form-components/FormWrapper";
import EmojiSelector from "../aux-components/EmojiSelector";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";
import InterestItem from "../form-components/InterestItem";
const FormInterests = ({ description, onDelete }) => {
  const { form, dispatch } = useContext(FormContext);
  const addInterest = () => {
    dispatch({
      type: "ADD_INTEREST",
      payload: { id: uuidv4() },
    });
  };
  return (
    <>
      <FormSection
        number={6}
        title={"Interests "}
        description={description}
        action={addInterest}
        actionText={"Add"}
      />
      <FormWrapper>
        {form.interests.map((item) => (
          <InterestItem
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

export default FormInterests;
