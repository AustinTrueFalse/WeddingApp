import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import YmapPlugin from 'vue-yandex-maps'

// YandexMap //
const settings = {
  apiKey: '5ffff158-a6f7-4967-99ff-b8f8cfdb290f', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1' // Версия Я.Карт
}


const vuetify = createVuetify({
  components,
  directives,
})



const app = createApp(App)


app.use(router)
app.use(vuetify)
app.use(store)
app.use(YmapPlugin, settings)
app.mount('#app')

