import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:()=>import('home/home')
  },

]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
