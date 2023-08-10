import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";

export const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "index",
    path: "/index",
    component: Home,
  },
];
const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }), // 路由跳转后滚动到顶部
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;
