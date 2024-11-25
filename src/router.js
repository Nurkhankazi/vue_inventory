import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path:'/',
    asias:'/login',
    name:'login',
    component:()=> import('./components/LoginForm')
},
  {
    path: "/home",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;