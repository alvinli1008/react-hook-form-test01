import React from "react";
import { useFormContext } from "../hooks/useFormContext";

const FormTest01 = () => {
  const { register } = useFormContext();

  console.log("FormTest01");
  return (
    <div className="">
      FormText01
      <div className=" text-left mb-3">
        <label htmlFor="name" className="block text-base">
          Name
        </label>
        <input id="name" {...register("name")} className="px-2 py-1 "></input>
      </div>
      <div className=" text-left mb-3">
        <label htmlFor="title" className="block text-base">
          Title
        </label>
        <input id="title" {...register("title")} className="px-2 py-1 "></input>
      </div>
    </div>
  );
};

export default FormTest01;
