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
  education: [{}],
  workExperience: [{}],
  skills: [""],
  languages: [{}],
  interests: [{ emoji: "😀" }],
};
const exampleState = {
  profilePicUrl: "https://i.imgur.com/9KYq7VG.jpg",
  firstName: "John",
  lastName: "Doe",
  profession: "Full Stack Developer",
  city: "Barcelona",
  country: "Spain",
  linkedIn: "https://www.linkedin.com/in/johndoe/",
  portfolioURL: "https://www.johndoe.com",
  email: "johndoe@gmail.com",
  phone: "+34 123 456 789",
  description:
    "I am a full stack developer with 5 years of experience. Some of my skills include React, JavaScript, HTML, CSS, Python and Django. I am a full stack developer with 5 years of experience. Some of my skills include React, JavaScript, HTML, CSS, Python and Django.",
  education: [
    {
      id: "1",
      schoolName: "University of Barcelona",
      title: "Master in Computer Science",
      startingDate: "2015",
      endDate: "2017",
    },
    {
      id: "2",
      schoolName: "University of Barcelona",
      title: "Bachelor in Computer Science",
      startingDate: "2010",
      endDate: "2014",
    },
  ],
  workExperience: [
    {
      id: "1",
      position: "Full Stack Developer",
      company: "Google",
      location: "Barcelona",
      from: "2018",
      to: "Present",
      tasks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi vitae aliquam ultricies, nunc nisl ultricies nunc, vitae al",
    },
    {
      id: "2",
      position: "Frontend Developer",
      company: "Facebook",
      location: "Barcelona",
      from: "2016",
      to: "2018",
      tasks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi vitae aliquam ultricies, nunc nisl ultricies nunc, vitae al",
    },
  ],
  skills: ["React", "JavaScript", "HTML", "CSS", "Python", "Django"],
  languages: [
    { id: "1", language: "English", level: "Native" },
    { id: "2", language: "Spanish", level: "Native" },
    { id: "3", language: "French", level: "B2" },
  ],
  interests: [
    { id: "1", interest: "Reading", emoji: "📚" },
    { id: "2", interest: "Music", emoji: "🎵" },
    { id: "3", interest: "Sports", emoji: "⚽" },
  ],
};

// Step 2: Create the context
const FormContext = createContext();

// Step 3: Define the reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case "PROFILE_PIC_URL":
      return { ...state, profilePicUrl: action.payload };
    case "FILL_EXAMPLE":
      return { ...state, ...exampleState };
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
    case "EDIT_EMOJI":
      return {
        ...state,
        interests: state.interests.map((item) =>
          item.id === action.payload.id
            ? { ...item, emoji: action.payload.value }
            : item
        ),
      };
    case "ADD_INTEREST":
      return {
        ...state,
        interests: [
          ...state.interests,
          { id: action.payload.id, interest: "", emoji: "😀" },
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
