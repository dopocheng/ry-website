import './assets/main.css'
import './assets/styles/global.css'

import { createApp } from 'vue'
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueAmazingUI from 'vue-amazing-ui'
import 'vue-amazing-ui/css'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(VueAmazingUI)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
