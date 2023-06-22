import "./App.css";

import FormTest01 from "./components/FormTest01";
import FormTest02 from "./components/FormTest02";
import FormTest03 from "./components/FormTest03";

import { FormContextProvider } from "./hooks/useFormContext";
import useForm from "./hooks/useForm";

function App() {
  const methods = useForm({ defaultValues: {} });
  return (
    <FormContextProvider {...methods}>
      <FormTest01></FormTest01>
      <FormTest02></FormTest02>
      <FormTest03></FormTest03>
      <button
        onClick={() => {
          console.log("submit", methods.getValues());
        }}
      >
        submit
      </button>
    </FormContextProvider>
  );
}

export default App;
