import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import VueDragscroll from 'vue-dragscroll'

const app = createApp(App)
app.use(createPinia())
app.use(VueDragscroll)
app.use(router)
app.mount('#app')
