import './assets/main.css'
import './assets/styles/global.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueAmazingUI from 'vue-amazing-ui'
import 'vue-amazing-ui/css'
import router from './router'

const app = createApp(App)

app.use(VueAmazingUI)
app.use(router)

app.mount('#app')
