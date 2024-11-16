import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: () => import('../views/MovieView.vue'),
    },
    {
      path: '/actor/:id',
      name: 'ActorDetail',
      component: () => import('../views/ActorView.vue'),
    },
  ],
})

export default router
