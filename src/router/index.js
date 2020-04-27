// 配置路由
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Vue from 'vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
export default router
