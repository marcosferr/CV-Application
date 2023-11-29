import FormSection from "./form-components/FormSection";
import FormWrapper from "./form-components/FormWrapper";
import FormGeneralInformation from "./form-sections/FormGeneralInformation";
import FormProfilePicture from "./form-sections/FormProfilePicture";
const Main = () => {
  const desc = [
    "This is a critical part of your CV as it gives the potential employer a glimpse of who you are. This is an opportunity for you to introduce yourself, highlight your skills, and provide a brief summary of your career goals.",
    ,
    "The education demonstrates your commitment to learning and your willingness to acquire new skills. If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any formal education, consider including any relevant certifications or training you may have received.",
    ,
    "Showcase your professional accomplishments and demonstrate your ability to contribute to an organization. In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it.",
    ,
    "Here is an opportunity to showcase your relevant abilities and qualifications for the job. Be specific about your skills and match them with the requirements of the job you're applying for. Include technical skills, communication skills, and problem-solving abilities.",
  ];
  return (
    <main>
      <FormWrapper className={"form-picture"}>
        <FormProfilePicture />
      </FormWrapper>
      <FormSection
        number={1}
        title={"General Information"}
        description={desc[0]}
        action={() => {}}
        actionText={"Add"}
      />
      <FormWrapper>
        <FormGeneralInformation />
      </FormWrapper>
    </main>
  );
};

export default Main;
