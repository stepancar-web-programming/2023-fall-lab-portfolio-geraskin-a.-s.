import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-xhr-backend";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        debug: true,
        detection: {
            order: ['cookie', 'localStorage'],
            caches: ['cookie'],
        },
        react: {
            useSuspense: true,
        }
    })

export default i18n;