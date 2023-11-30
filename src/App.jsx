import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <Header />
      <Outlet />
    </FormProvider>
  );
};

export default App;
