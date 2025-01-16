import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import ViewHome from '@/views/ViewHome.vue'
import ViewLogin from '@/views/ViewLogin.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: ViewHome,
    },
    {
        path: '/login',
        name: 'login',
        component: ViewLogin,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
