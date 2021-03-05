import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [modeDark, setModeDark] = useState(false);

  const changeMode = () => {
    setModeDark(!modeDark);
  };

  const mode = () => {
    return modeDark;
  };

  return (
    <ThemeContext.Provider
      value={{  changeMode,  mode }}
      {...props}
    />
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
