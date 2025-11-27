import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import ko from "../locales/ko.json";
import zh from "../locales/zh.json";
import ja from "../locales/ja.json";
import hi from "../locales/hi.json";

const resources = {
  en: { translation: en },
  ko: { translation: ko },
  zh: { translation: zh },
  ja: { translation: ja },
  hi: { translation: hi },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
