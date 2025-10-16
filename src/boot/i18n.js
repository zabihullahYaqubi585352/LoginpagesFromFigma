import { createI18n } from 'vue-i18n'
import en from 'src/i18n/locales/en.json'
import fa from 'src/i18n/locales/fa.json'

const i18n = createI18n({
  locale: 'fa',           // Default language (Farsi)
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,  // allows $t() anywhere
  messages: { en, fa }
})

export default ({ app }) => {
  app.use(i18n)
}

export { i18n }
