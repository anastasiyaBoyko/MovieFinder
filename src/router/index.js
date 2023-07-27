import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import('@/views/MovieView.vue')
        },
        {
            path: '/results',
            name: 'results',
            component: () => import('@/views/ResultsView.vue')
        },
    ]
})

export default router