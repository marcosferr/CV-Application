import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const FormProfilePicture = () => {
  const { form, dispatch } = useContext(FormContext);

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({ type: "PROFILE_PIC_URL", payload: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="profile-picture-container">
        {form.profilePicUrl ? (
          <img className="profile-pic" src={form.profilePicUrl} alt="Profile" />
        ) : (
          <div className="profile-picture-placeholder"></div>
        )}
      </div>
      <div className="profile-picture-text-area">
        <h2>Profile Picture</h2>
        <p>
          Adding a photo to your CV can be a great way to personalize your
          application and make a positive first impression. When uploading your
          photo, make sure it is a clear and recent headshot that shows your
        </p>
        <input type="file" onChange={handleProfilePicUpload} />
      </div>
    </>
  );
};

export default FormProfilePicture;
