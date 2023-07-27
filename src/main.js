import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vue3Debounce } from 'vue-debounce'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.directive('debounce', vue3Debounce({ lock: true }))

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
