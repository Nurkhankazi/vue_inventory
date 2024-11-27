import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path:'/login',
    asias:'/login',
    name:'login',
    component:()=> import('./components/LoginForm')
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;