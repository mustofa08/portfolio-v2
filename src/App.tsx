import ThemeToggle from "@/components/theme/ThemeToggle";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation("home");

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <h1>{t("hero.title")}</h1>
    </main>
  );
};

export default App;