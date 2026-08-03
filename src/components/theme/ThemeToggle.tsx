import useTheme from "@/hooks/useTheme";
import { themeOptions } from "./theme.constants";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
      {themeOptions.map((option) => {
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            aria-label={option.label}
            onClick={() => setTheme(option.value)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300"
          >
            {theme === option.value && (
              <motion.div
                layoutId="theme-toggle"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-full bg-white dark:bg-zinc-700"
              />
            )}

            <Icon className="relative z-10" size={18} />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
