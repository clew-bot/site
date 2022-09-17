import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vSelect from 'vue-select'

import App from './App.vue'
import router from './router'

import './assets/stylesheets/default.css'
import "./assets/stylesheets/red.css"
import "./assets/stylesheets/blue.css"
import "./assets/stylesheets/green.css"
import 'vue-select/dist/vue-select.css';




import './assets/main.css'
const app = createApp(App)


app.component('v-select', vSelect)
app.use(createPinia())
app.use(router)

app.mount('#app')
