import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import tranlationEN from "./translations/en.json"
import translationVI from "./translations/vi.json"



i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: tranlationEN
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