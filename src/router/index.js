import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Start'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotImplemented'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
