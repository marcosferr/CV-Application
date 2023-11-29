import Header from "./components/Header";
import Main from "./components/Main";
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <Header />
      <Main />
    </FormProvider>
  );
};

export default App;
