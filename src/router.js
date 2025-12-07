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
import Indicadores from './components/servicos/Indicadores.vue'
import Opcoes from './components/servicos/Opcoes.vue'
import DashboardRodaPe from './components/dashboard/DashboardRodaPe.vue'
import PaginaNaoEncontrada from './views/PaginaNaoEncontrada.vue'

const routes = [
    {
        path: '/home',
        meta: { requerAutorizacao: true },
        alias: '/app',
        component: HomePage,
        children: [
            {
                path: 'vendas',
                component: VendasHome,
                children: [
                    {
                        path: 'leads', component: LeadsVendas, name: 'leads',
                        beforeEnter(to) {
                            console.log('Gaurda de rota Leads befode Enter: ' + to.meta.requerAutorizacao)
                        }
                    },
                    {
                        path: 'leads/:id',
                        //props: true,
                        // {id: 4, outro: 'outro'},
                        props: route => {
                            console.log(route)
                            return { id: route.params.id }
                        },
                        component: LeadVendas, name: 'lead', alias: ['/pessoa/:id']
                    },
                    { path: 'contratos', component: ContratosVendas, name: 'contratos' },
                    { path: '', component: VendasPadrao },
                ]
            },
            {
                path: 'servicos',
                component: ServicosHome,
                name: 'servicosHome',
                children: [
                    {
                        path: ':id', alias: '/s/:id', props: { default: true, opcoes: false, indicadores: true }, components: {
                            default: ServicoHome,
                            opcoes: Opcoes,
                            indicadores: Indicadores
                        }, name: 'servico'
                    }
                ]
            },
            {
                path: 'dashboard',
                components: {
                    default: DashboardHome,
                    rodape: DashboardRodaPe
                }
            }
        ]
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: SitePage,
        meta: { requerAutorizacao: false }
    },
    {
        //path: '/redirecionamento-1', redirect: '/home/servicos'
        //path: '/redirecionamento-1', redirect: {name: 'leads'}
        path: '/redirecionamento-1', redirect: '/home/vendas'
    },
    {
        path: '/redirecionamento-2', redirect: to => {
            //algo antes do redirecionamento
            console.log(to)

            //return '/home/'
            return { name: 'leads' }
        }
    },
    {
        path: '/:catchAll(.*)*', component: PaginaNaoEncontrada
    }
]


const router = createRouter({
    //history: createWebHashHistory(),
    history: createWebHistory(),
    scrollBehavior() {
        return {left: 0, top: 150}
    },
    routes: routes
})

//router.beforeEach((to, from) => {
router.beforeEach(() => {
    //ao navegar numa roda ele funciona
    //antes da navegação
    //console.log('Rota requer autorização: ' + to.meta.requerAutorizacao)
})

//router.afterEach((to, from) => {
router.afterEach(() => {
    //apos navegar ela executa
    //console.log('Origem '+ to)
    //console.log('destino '+ from)
})

router.beforeResolve(() => {
    //antes de navegar mas depois do after e before
})

export default router
