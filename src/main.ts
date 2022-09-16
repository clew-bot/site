import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/stylesheets/default.css'
import "./assets/stylesheets/red.css"
import "./assets/stylesheets/blue.css"
import "./assets/stylesheets/green.css"





import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
