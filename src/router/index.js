import { createRouter, createWebHistory } from 'vue-router'

import Main from "@/views/Main.vue"
import Login from "@/views/Login.vue"

const routes = [
    {
      path: '/user/:account',
      component: Main
    },
    {
      path: '/login',
      component: Login
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  