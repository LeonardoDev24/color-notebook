import { createApp } from 'vue'
import './styles/style.css'
import './styles/form.css'
import App from './App.vue'
import { router } from './utils/router'

createApp(App).use(router).mount('#app')
