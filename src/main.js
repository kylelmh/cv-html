import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import {messages} from './locales/app.js'
import router from './router'
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ja',
  messages
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')