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
          "Type1":"Full Stack Developer | Integrator",
          "Type2":"Building user-friendly web solutions for the modern world.",
          "Type3":"Transform your vision into a stunning digital experience.",
          "Type4":"Unlock the potential of your business with a tailor-made website.",
          "Type5":"Your online success starts with a website built for results.",
          
        }
      },
      fr: {
        translation: {
          "Welcome": "Salut!",
          "im":"je suis",
          "nam": "Hiba kandaoui",
          "Type1":"Développeur Full Stack | Intégrateur",
          "Type2":"Créer des solutions web conviviales pour le monde moderne.",
          "Type3":"Transformez votre vision en une expérience numérique époustouflante.",
          "Type4":"Libérez le potentiel de votre entreprise avec un site web sur mesure.",
          "Type5":"Votre succès en ligne commence par un site web conçu pour les résultats.",
        }
      },
     
    },
  });



