import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const WorkExperienceItem = ({ id, handleChange, values }) => {
  const { form } = useContext(FormContext);
  return (
    <>
      <div className="flex gap-2">
        <FormInput
          label="Your Position"
          name="name"
          type="text"
          className="flex-1"
          value={values.position}
          handleChange={handleChange}
          action="EDIT_POSITION"
          id={id}
        />
        <FormInput
          label="Company"
          name="lastName"
          type="text"
          className="flex-1"
          value={values.company}
          handleChange={handleChange}
          action="EDIT_COMPANY"
          id={id}
        />
      </div>
      <div className="flex gap-2">
        <FormInput
          label="Location"
          name="name"
          type="text"
          className="flex-1"
          value={values.location}
          handleChange={handleChange}
          action="EDIT_LOCATION"
          id={id}
        />
        <div className="flex gap-2 flex-1">
          <FormInput
            label="From"
            name="lastName"
            type="text"
            className="flex-1"
            value={values.from}
            handleChange={handleChange}
            action="EDIT_FROM"
            id={id}
          />
          <FormInput
            label="To"
            name="lastName"
            type="text"
            className="flex-1"
            value={values.to}
            handleChange={handleChange}
            action="EDIT_TO"
            id={id}
          />
        </div>
      </div>
      <FormTextArea
        label="Task / Achievements"
        name=""
        value={values.tasks}
        handleChange={handleChange}
        action="EDIT_TASKS"
        id={id}
      />
      {form.workExperience.length > 1 ? ( // if there is more than one education item, show the delete button for each item
        <button
          className="btn btn--danger"
          onClick={() =>
            handleChange({
              type: "DELETE_WORK_EXPERIENCE",
              payload: id,
            })
          }
        >
          Delete
        </button>
      ) : null}
      <br />
    </>
  );
};

export default WorkExperienceItem;
