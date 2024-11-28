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
  },
  {
    path:'/Bill',
    asias:'/Bill',
    name:'Bill',
    component:()=> import('./components/Bill')
  },
  {
    path:'/Invoice',
    asias:'/Invoice',
    name:'Invoice',
    component:()=> import('./components/Invoice')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;