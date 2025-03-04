import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/FrontHome.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/FrontAbout.vue'),
        meta: { title: '關於我們 - Max Shop' },
      },
      {
        path: '/questions',
        name: 'questions',
        component: () => import('../views/FrontQuestions.vue'),
        meta: { title: '常見問題 - Max Shop' },
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/FrontCarts.vue'),
        meta: { title: '購物車 - Max Shop' },
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/FrontProducts.vue'),
        meta: { title: '香氛蠟燭 - Max Shop' },
      },
      {
        path: '/check',
        name: 'checkout',
        component: () => import('../views/FrontCheckout.vue'),
        meta: { title: '結帳 - Max Shop' },
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/FrontLogin.vue'),
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
];
const router = createRouter({
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "instant" };
  },
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Max Shop';
  next();
});
export default router;
