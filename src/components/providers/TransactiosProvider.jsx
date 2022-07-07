import React, { Context, createContext, useReducer, useEffect } from "react";

export const LIGHT_THEME = {
  background: "#fafafa",
  color: "#000000",
  isDark: false,
};

export const DARK_THEME = {
  background: "#333333",
  color: "#fafafa",
  isDark: true,
};

const darkModeReducer = (_, isDark) => (isDark ? DARK_THEME : LIGHT_THEME);

const DarkModeContext = createContext({});

const initialState =
  JSON.parse(localStorage.getItem("DarkMode")) || LIGHT_THEME;

const DarkModeProvider = ({ children }) => {
  const [mode, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(mode));
  }, [mode]);

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };
