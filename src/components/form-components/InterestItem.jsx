import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import EmojiSelector from "../aux-components/EmojiSelector";
import FormInput from "./FormInput";
const InterestItem = ({ id, handleChange, values }) => {
  const { form } = useContext(FormContext);
  return (
    <div className="flex gap-2">
      <EmojiSelector handleChange={handleChange} id={id} value={values.emoji} />
      <FormInput
        placeholder={"e.g Reading, Music, Sports"}
        className={"w-100 flex-2"}
        type="text"
        name="interest"
        value={values.interest}
        handleChange={handleChange}
        action="EDIT_INTEREST"
        id={id}
      />
      {form.interests.length > 1 ? (
        <button
          className="btn btn--danger"
          onClick={() =>
            handleChange({
              type: "DELETE_INTEREST",
              payload: id,
            })
          }
        >
          Delete
        </button>
      ) : null}
    </div>
  );
};

export default InterestItem;
