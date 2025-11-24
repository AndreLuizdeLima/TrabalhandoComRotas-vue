import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'

const vue = createApp(App) 
vue.use(VueTheMask) // adicionando mascara
vue.use(router) // adicionando a configuração 
vue.mount('#app') // montando o app
