import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/locales/en/common.json";
import enHome from "@/locales/en/home.json";

import idCommon from "@/locales/id/common.json";
import idHome from "@/locales/id/home.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
    },
    id: {
      common: idCommon,
      home: idHome,
    },
  },

  lng: "id",
  fallbackLng: "en",

  defaultNS: "common",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;