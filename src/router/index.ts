import Home from '../views/Content.vue'
import Sundays from '../views/Sundays.vue'
import Visit from '../views/Visit.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true,
  },
  {
    path: '/sundays',
    name: 'sundays',
    component: Sundays,
    // props: true,
  },
  {
    path: '/visit',
    name: 'visit',
    component: Visit,
    // props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
