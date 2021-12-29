import { initReactI18next } from 'react-i18next'
import enLang from './langs/en'
import esLang from './langs/es'
import i18n from 'i18next'

// Init I18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLang
      },
      es: {
        translation: esLang
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n