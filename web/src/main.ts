import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Layout from './components/layout/Layout.vue'
import Home from './components/page/Home.vue'
const app = createApp(Home)

app.use(createPinia())

app.mount('#app')
