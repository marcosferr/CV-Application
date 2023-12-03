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
    case "EDIT_NAME":
      return { ...state, firstName: action.payload.value };
    case "EDIT_LAST_NAME":
      return { ...state, lastName: action.payload.value };
    case "EDIT_PROFESSION":
      return { ...state, profession: action.payload.value };
    case "EDIT_CITY":
      return { ...state, city: action.payload.value };
    case "EDIT_LINKEDIN":
      return { ...state, linkedIn: action.payload.value };
    case "EDIT_PORTFOLIO":
      return { ...state, portfolioURL: action.payload.value };
    case "EDIT_EMAIL":
      return { ...state, email: action.payload.value };
    case "EDIT_PHONE":
      return { ...state, phone: action.payload.value };
    case "EDIT_DESCRIPTION":
      return { ...state, description: action.payload.value };
    case "EDIT_SCHOOL_NAME":
      return {
        ...state,
        education: state.education.map((item) =>
          item.id === action.payload.id
            ? { ...item, schoolName: action.payload.value }
            : item
        ),
      };
    case "EDIT_TITLE":
      return {
        ...state,
        education: state.education.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.value }
            : item
        ),
      };
    case "EDIT_STARTING_DATE":
      return {
        ...state,
        education: state.education.map((item) =>
          item.id === action.payload.id
            ? { ...item, startingDate: action.payload.value }
            : item
        ),
      };
    case "EDIT_ENDING_DATE":
      return {
        ...state,
        education: state.education.map((item) =>
          item.id === action.payload.id
            ? { ...item, endDate: action.payload.value }
            : item
        ),
      };
    case "ADD_EDUCATION":
      return {
        ...state,
        education: [
          ...state.education,
          {
            id: action.payload.id,
            schoolName: "",
            title: "",
            startingDate: "",
            endDate: "",
          },
        ],
      };
    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter((item) => item.id !== action.payload),
      };
    case "EDIT_POSITION":
      return {
        ...state,
        workExperience: state.workExperience.map((item) =>
          item.id === action.payload.id
            ? { ...item, position: action.payload.value }
            : item
        ),
      };
    case "EDIT_COMPANY":
      return {
        ...state,
        workExperience: state.workExperience.map((item) =>
          item.id === action.payload.id
            ? { ...item, company: action.payload.value }
            : item
        ),
      };
    case "EDIT_LOCATION":
      return {
        ...state,
        workExperience: state.workExperience.map((item) =>
          item.id === action.payload.id
            ? { ...item, location: action.payload.value }
            : item
        ),
      };
    case "EDIT_FROM":
      return {
        ...state,
        workExperience: state.workExperience.map((item) =>
          item.id === action.payload.id
            ? { ...item, from: action.payload.value }
            : item
        ),
      };
    case "EDIT_TO":
      return {
        ...state,
        workExperience: state.workExperience.map((item) =>
          item.id === action.payload.id
            ? { ...item, to: action.payload.value }
            : item
        ),
      };
    case "EDIT_TASKS":
      return {
        ...state,
        workExperience: state.workExperience.map((item) =>
          item.id === action.payload.id
            ? { ...item, tasks: action.payload.value }
            : item
        ),
      };
    case "ADD_WORK_EXPERIENCE":
      return {
        ...state,
        workExperience: [
          ...state.workExperience,
          {
            id: action.payload.id,
            position: "",
            company: "",
            location: "",
            from: "",
            to: "",
            tasks: "",
          },
        ],
      };
    case "DELETE_WORK_EXPERIENCE":
      return {
        ...state,
        workExperience: state.workExperience.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "EDIT_SKILL":
      return {
        ...state,
        skills: state.skills.map((item) =>
          item.id === action.payload.id
            ? { ...item, skill: action.payload.value }
            : item
        ),
      };
    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, { id: action.payload.id, skill: "" }],
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((item) => item.id !== action.payload),
      };
    case "EDIT_LANGUAGE":
      return {
        ...state,
        languages: state.languages.map((item) =>
          item.id === action.payload.id
            ? { ...item, language: action.payload.value }
            : item
        ),
      };
    case "EDIT_LEVEL":
      return {
        ...state,
        languages: state.languages.map((item) =>
          item.id === action.payload.id
            ? { ...item, level: action.payload.value }
            : item
        ),
      };
    case "ADD_LANGUAGE":
      return {
        ...state,
        languages: [
          ...state.languages,
          { id: action.payload.id, language: "", level: "" },
        ],
      };
    case "DELETE_LANGUAGE":
      return {
        ...state,
        languages: state.languages.filter((item) => item.id !== action.payload),
      };
    case "EDIT_INTEREST":
      return {
        ...state,
        interests: state.interests.map((item) =>
          item.id === action.payload.id
            ? { ...item, interest: action.payload.value }
            : item
        ),
      };
    case "ADD_INTEREST":
      return {
        ...state,
        interests: [
          ...state.interests,
          { id: action.payload.id, interest: "" },
        ],
      };
    case "DELETE_INTEREST":
      return {
        ...state,
        interests: state.interests.filter((item) => item.id !== action.payload),
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
