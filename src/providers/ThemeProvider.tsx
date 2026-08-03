import {
    useEffect,
    useMemo,
  useState,
  type ReactNode,
} from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "@/types/theme";



interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme ?? "system";
  });

    const resolvedTheme = useMemo(() => {
    if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return theme;
  }, [theme]);

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove("light", "dark");
        html.classList.add(resolvedTheme);

        localStorage.setItem("theme", theme);
    }, [theme, resolvedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};



export default ThemeProvider;