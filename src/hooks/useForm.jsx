import React from "react";
import createFormControl from "../utils/createFormControl";

const useForm = () => {
  const _formControl = React.useRef({
    ...createFormControl(),
  });

  return _formControl.current;
};

export default useForm;
