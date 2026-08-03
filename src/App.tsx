import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation("home");

  return <h1>{t("hero.title")}</h1>;
};

export default App;