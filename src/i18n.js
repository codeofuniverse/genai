import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationHI from "./locales/hi/translation.json";
import translationKS from "./locales/kos/translation.json";
import translationDOI from "./locales/di/translation.json";
import translationUR from "./locales/ur/translation.json";

const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
  kos: { translation: translationKS },
  di: { translation: translationDOI },
  ur: { translation: translationUR },
};

i18n
  .use(LanguageDetector) // Detect user language automatically
  .use(initReactI18next) // Connect with React
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
