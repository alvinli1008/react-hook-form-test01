import React from "react";
import { useFormContext } from "./useFormContext";
import useSubscribe from "./useSubscribe";

const useWatch = props => {
  const { control } = useFormContext();
  const [value, setValue] = React.useState(null);

  useSubscribe({
    subject: control._subjects.values,
    next: formState => {
      if (props.name === formState.name) {
        setValue(formState.value);
      }
    },
  });

  return value;
};

export default useWatch;
