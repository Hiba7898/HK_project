import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector).use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          "Welcome": "Hi There!" ,
          "im":"I'M",
          "nam": "Hiba kandaoui",
        }
      },
      fr: {
        translation: {
          "Welcome": "Salut!",
          "im":"je suis",
          "nam": "Hiba kandaoui",
        }
      },
      ar: {
        translation: {
          "Welcome": "أهلاً!",
          "im":"أنا",
          "nam": "هيبة قنداوي",
        }
      },
    },
  });



