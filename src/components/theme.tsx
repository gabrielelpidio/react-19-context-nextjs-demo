"use client";
import * as React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("light");

  return (
    // <ThemeContext // doesn't work yet
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
    // </ThemeContext> // doesn't work yet
  );
};

export const useTheme = () => React.use(ThemeContext);

export const ThemeLabel = () => {
  const { theme } = useTheme();

  return <span>{theme}</span>;
};

export const ThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className="bg-blue-800 px-2 py-1 rounded-md" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default Theme;
