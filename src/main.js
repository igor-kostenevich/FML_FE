import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseButton from '@/components/Shared/BaseButton.vue'
import BaseInput from '@/components/Shared/BaseInput.vue'
import Icon from '@/components/Icon.vue'
import i18n from './i18n'

const app = createApp(App)
app.use(router).use(store).use(i18n)

app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('Icon', Icon)

app.mount('#app')
