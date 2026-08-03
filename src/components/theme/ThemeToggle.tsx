import { Monitor, Sun, Moon } from "lucide-react";

import useTheme from "@/hooks/useTheme";



const ThemeToggle = () => {
  console.log("ThemeToggle Render");

  const { theme, setTheme } = useTheme();

  return ( 
    <div>
        <button onClick={() =>{
            console.log("Setting theme to light");
            setTheme("light")}}>
            <Sun size={18}/>
        </button>

        <button onClick={() => {
            console.log("Setting theme to system");
            setTheme("system")
        }}>
            <Monitor size={18}/>
        </button>

        <button onClick={() => {
            console.log("Setting theme to dark");
            setTheme("dark")
        }}>
            <Moon size={18}/>
        </button>
    </div>
    );
};

export default ThemeToggle;