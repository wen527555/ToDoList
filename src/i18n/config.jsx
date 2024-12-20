import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "../locales/zh.json";
import en from "../locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  lng: "zh",
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
});

export default i18n;
