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
  },
  {
    path:'/Expense',
    asias:'/Expense',
    name:'Expense',
    component:()=> import('./components/Expense')
  },
  {
    path:'/ExpenseList',
    asias:'/ExpenseList',
    name:'ExpenseList',
    component:()=> import('./components/ExpenseList')
  },
  {
    path:'/ExpenseReport',
    asias:'/ExpenseReport',
    name:'ExpenseReport',
    component:()=> import('./components/ExpenseReport')
  },
  {
    path:'/account_head',
    asias:'/account_head',
    name:'account_head',
    component:()=> import('./components/AccountHead')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;