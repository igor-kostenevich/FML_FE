import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import ua from '@/lang/ua.json'

const i18n = createI18n({
  locale: 'ua',
  messages: {
    ua,
    en,
  },
})

export default i18n
