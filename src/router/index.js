import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing'
import Financial from '@/views/Financial'
import Technical from '@/views/Technical'
import Mall from '@/views/Mall'
import Housing from '@/views/Housing'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/financial',
    name: 'Financial',
    component: Financial
  },
  {
    path: '/technical',
    name: 'Technical',
    component: Technical
  },
  {
    path: '/mall',
    name: 'Mall',
    component: Mall
  },
  {
    path: '/housing',
    name: 'Housing',
    component: Housing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
