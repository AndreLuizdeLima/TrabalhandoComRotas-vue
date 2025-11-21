import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'
import LoginPage from './views/Login.vue'
import SitePage from './views/Site.vue'

const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: SitePage
    }
]


const router = createRouter({
    //history: createWebHashHistory(),
    history: createWebHistory(),
    routes: routes
})

export default router
