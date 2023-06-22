import { memo } from "react";

import useWatch from "../hooks/useWatch";

const FormTest03 = () => {
  const value = useWatch({ name: "title" });

  console.log("FormTest03");
  return (
    <div className=" text-lg">
      <div>Title value: {value}</div>
    </div>
  );
};

FormTest03.displayName = "FormTest03";

export default memo(FormTest03);
