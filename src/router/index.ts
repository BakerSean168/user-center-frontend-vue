import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/user/login',
      name: 'user-login',
      component: () => import('../views/user/UserLoginView.vue'),
    },
    {
      path: '/user/register',
      name: 'user-register',
      component: () => import('../views/user/UserRegisterView.vue'),
    },
    {
      path: '/admin/userManagement',
      name: 'user-management',
      component: () => import('../views/admin/UserManageView.vue'),
    },
  ],
})

export default router
