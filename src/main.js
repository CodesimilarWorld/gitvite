import { createApp } from 'vue'
import App from './App.vue'
import {createRouter} from './router/routers'

createApp(App).use(createRouter()).mount('#app')
