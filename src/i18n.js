import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/en.json"
import translationVI from "./translations/vi.json"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";



i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN
        },
        vi: {
            translation: translationVI
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: true }

})

export default i18next;