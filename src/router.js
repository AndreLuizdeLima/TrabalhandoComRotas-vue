import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'
import LoginPage from './views/Login.vue'
import SitePage from './views/Site.vue'
import VendasHome from './components/Vendas/Vendas.vue'
import ServicosHome from './components/Serviços/Servicos.vue'
import LeadsVendas from './components/Vendas/Leads.vue'
import ContratosVendas from './components/Vendas/Contratos.vue'

const routes = [
    {
        path: '/home',
        component: HomePage,
        children: [
            {
                path: 'vendas',
                component: VendasHome,
                children: [
                    {path: 'leads', component: LeadsVendas },
                    {path: 'contratos', component: ContratosVendas },
                ]
            },
            {
                path: 'servicos',
                component: ServicosHome
            }
        ]
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
