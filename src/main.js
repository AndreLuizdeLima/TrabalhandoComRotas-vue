import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const vue = createApp(App) 
vue.use(router) // adicionando a configuração 
vue.mount('#app') // montando o app
