import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    meta: { layout: 'main' },
    component: () => import('@/views/Dashboard.vue'),
    alias: '/dashboard',
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: () => import('@/views/Auth/Login.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { layout: 'auth' },
    component: () => import('@/views/Auth/Registration.vue'),
  },
  {
    path: '/reset',
    name: 'reset',
    meta: { layout: 'auth' },
    component: () => import('@/views/Auth/Reset.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
