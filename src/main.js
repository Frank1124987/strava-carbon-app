import { createApp } from 'vue'
import App from './App.vue'
import CustomLink from '@/components/CustomLink.vue'
import router from '@/router/index.js'

createApp(App)
.use(router)
.component("CustomLink",CustomLink)
.mount('#app')
