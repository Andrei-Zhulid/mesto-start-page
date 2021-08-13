import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navigator',
    component: () => import('@/views/Navigator'),
  },
  {
    path: '/university',
    name: 'University',
    component: () => import('@/views/UniversityStub'),
  },
  {
    path: '/handbook/:id?',
    name: 'Handbook',
    component: () => import('@/views/NotImplemented'),
  },
  {
    path: '/news/:id?',
    name: 'News',
    component: () => import('@/views/NotImplemented'),
  },
  {
    path: '/user/:id?',
    name: 'User',
    component: () => import('@/views/NotImplemented'),
  },
  {
    path: '/event/:id?',
    name: 'Event',
    component: () => import('@/views/NotImplemented'),
  },
  {
    path: '/event/:id?',
    name: 'Help',
    component: () => import('@/views/NotImplemented'),
  },
  {
    path: '*',
    name: 'NotImplemented',
    component: () => import('@/views/NotImplemented'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
