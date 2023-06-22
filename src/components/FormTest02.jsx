import { memo } from "react";

import useWatch from "../hooks/useWatch";

const FormTest02 = () => {
  const value = useWatch({ name: "name" });

  console.log("FormTest02");
  return (
    <div>
      <div>Name value: {value}</div>
    </div>
  );
};

FormTest02.displayName = "FormTest02";

export default memo(FormTest02);
