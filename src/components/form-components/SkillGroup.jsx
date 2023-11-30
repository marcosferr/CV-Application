import FormInput from "./FormInput";

const SkillGroup = ({ onDelete }) => {
  return (
    <div className="flex gap-2 skills-container">
      <FormInput
        placeholder={"e.g Strong communication"}
        className={"w-100"}
        type="text"
      />
      <button className="delete-btn" onClick={onDelete}></button>
    </div>
  );
};

export default SkillGroup;
