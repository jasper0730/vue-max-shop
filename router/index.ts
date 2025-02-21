import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "instant" };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/questions',
          name: 'questions',
          component: () => import('../views/QuestionsView.vue'),
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/CartView.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/ProductsView.vue'),
        },
        {
          path: '/check',
          name: 'checkout',
          component: () => import('../views/CheckView.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: "orders",
          component: () => import("../views/admin/AdminOrders.vue"),
        },
        {
          path: "products",
          component: () => import("../views/admin/AdminProducts.vue"),
        },
        {
          path: "coupons",
          component: () => import("../views/admin/AdminCoupons.vue"),
        },
      ]
    },
  ],
});

export default router;
