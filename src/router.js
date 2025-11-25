import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'
import LoginPage from './views/Login.vue'
import SitePage from './views/Site.vue'
import VendasHome from './components/vendas/Vendas.vue'
import ServicosHome from './components/servicos/Servicos.vue'
import LeadsVendas from './components/vendas/Leads.vue'
import ContratosVendas from './components/vendas/Contratos.vue'
import DashboardHome from './components/dashboard/Dashboard.vue'
import LeadVendas from './components/vendas/Lead.vue'
import VendasPadrao from './components/vendas/VendasPadrao.vue'
import ServicoHome from './components/servicos/Servico.vue'

const routes = [
    {
        path: '/home',
        component: HomePage,
        children: [
            {
                path: 'vendas',
                component: VendasHome,
                children: [
                    {path: 'leads', component: LeadsVendas, name: 'leads' },
                    {path: 'leads/:id', component: LeadVendas, name: 'lead' },
                    {path: 'contratos', component: ContratosVendas, name: 'contratos' },
                    {path: '', component: VendasPadrao },
                ]
            },
            {
                path: 'servicos',
                component: ServicosHome,
                name: 'servicosHome',
                children: [
                    {path: ':id', component: ServicoHome, name: 'servico'}
                ]
            },
            {
                path: 'dashboard',
                component: DashboardHome
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
