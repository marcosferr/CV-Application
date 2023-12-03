import FormInput from "./FormInput";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const EducationItem = ({ id, handleChange, values }) => {
  const { form } = useContext(FormContext);
  return (
    <>
      <div className="flex gap-2">
        <FormInput
          label="School name"
          type="text"
          className="flex-1"
          value={values.schoolName}
          handleChange={handleChange}
          action="EDIT_SCHOOL_NAME"
          id={id}
        />
        <FormInput
          label="Degree, certification or title"
          type="text"
          className="flex-1"
          value={values.title}
          handleChange={handleChange}
          action="EDIT_TITLE"
          id={id}
        />
      </div>
      <div className="flex gap-2">
        <FormInput
          label="Starting date"
          type="text"
          className="flex-1"
          value={values.startingDate}
          handleChange={handleChange}
          action="EDIT_STARTING_DATE"
          id={id}
        />
        <FormInput
          label="Ending date"
          type="text"
          className="flex-1"
          value={values.endDate}
          handleChange={handleChange}
          action="EDIT_ENDING_DATE"
          id={id}
        />
        {form.education.length > 1 ? ( // if there is more than one education item, show the delete button for each item
          <button
            className="btn btn--danger"
            onClick={() =>
              handleChange({
                type: "DELETE_EDUCATION",
                payload: id,
              })
            }
          >
            Delete
          </button>
        ) : null}
      </div>
      <br />
    </>
  );
};

export default EducationItem;
