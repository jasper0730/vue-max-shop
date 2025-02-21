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
          meta: { title: '關於我們 - Max Shop' },
        },
        {
          path: '/questions',
          name: 'questions',
          component: () => import('../views/QuestionsView.vue'),
          meta: { title: '常見問題 - Max Shop' },
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/CartView.vue'),
          meta: { title: '購物車 - Max Shop' },
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/ProductsView.vue'),
          meta: { title: '香氛蠟燭 - Max Shop' },
        },
        {
          path: '/check',
          name: 'checkout',
          component: () => import('../views/CheckView.vue'),
          meta: { title: '結帳 - Max Shop' },
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
          meta: { title: '登入 - Max Shop' },
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
          meta: { title: '訂單 - Max Shop' },
        },
        {
          path: "products",
          component: () => import("../views/admin/AdminProducts.vue"),
          meta: { title: '產品 - Max Shop' },
        },
        {
          path: "coupons",
          component: () => import("../views/admin/AdminCoupons.vue"),
          meta: { title: '優惠券 - Max Shop' },
        },
      ]
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Max Shop';
  next();
});
export default router;
