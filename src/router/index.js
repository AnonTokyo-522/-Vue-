import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favorite from '../views/Favorite.vue'
import Share from '../views/Share.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Favorite', component: Favorite },
  { path: '/Share', component: Share }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
