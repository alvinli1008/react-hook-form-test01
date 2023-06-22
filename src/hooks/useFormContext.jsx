import React from "react";

const HookFormContext = React.createContext(null);

export const useFormContext = () => React.useContext(HookFormContext);

export const FormContextProvider = ({ children, ...data }) => {
  return <HookFormContext.Provider value={data}>{children}</HookFormContext.Provider>;
};
