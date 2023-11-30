import React, { createContext, useReducer } from "react";

// Step 1: Define the initial state
const initialState = {
  profilePicUrl: "",
  firstName: "",
  lastName: "",
  profession: "",
  city: "",
  country: "",
  linkedIn: "",
  portfolioURL: "",
  email: "",
  phone: "",
  description: "",
  education: [],
  workExperience: [],
  skills: [],
  languages: [],
  interests: [],
};

// Step 2: Create the context
const FormContext = createContext();

// Step 3: Define the reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case "PROFILE_PIC_URL":
      return { ...state, profilePicUrl: action.payload };
    case "FILL_EXAMPLE":
      return {
        ...state,
        profilePicUrl: "https://i.imgur.com/9KYq7VG.jpg",
        firstName: "John",
        lastName: "Doe",
        profession: "Full Stack Developer",
        city: "Barcelona",
        country: "Spain",
        linkedIn: "https://www.linkedin.com/in/johndoe/",
        portfolioURL: "https://www.johndoe.com",
        email: "romero@gmail.com",
      };
    // handle your actions
    default:
      return state;
  }
};

// Step 4: Create the provider component
const FormProvider = ({ children }) => {
  const [form, dispatch] = useReducer(formReducer, initialState);

  // Step 5: Return the context provider
  return (
    <FormContext.Provider value={{ form, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
