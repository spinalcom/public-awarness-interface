import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);
// TODO check how to set env viriable like process.env.BASE_URL
export default new Router({
  base: 'html/pai',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cookie_policy',
      name: 'cookie_policy',
      component: () => import('../views/CookiePolicy.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/cgu',
      name: 'cgu',
      component: () => import('../views/CGU.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
    },
  ],
});
