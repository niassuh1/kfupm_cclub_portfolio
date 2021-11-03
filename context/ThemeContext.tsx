import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FC,
  MouseEventHandler,
} from "react";

interface ThemeProps {
  theme?: string;
  toggleTheme?: MouseEventHandler;
}

const ThemeContext = createContext<ThemeProps | null>(null);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const getTheme = window.localStorage.getItem("theme");
    if (getTheme == "dark") {
      setTheme("dark");
      window.document.body.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    window.document.body.classList.remove(theme);

    const storedTheme = window.localStorage.getItem("theme");

    const isLight = storedTheme === "light";
    if (isLight) {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      window.document.body.classList.remove("light");
      window.document.body.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      window.document.body.classList.remove("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
