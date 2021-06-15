import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import UserInfo from "../views/UserInfo.vue"

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
