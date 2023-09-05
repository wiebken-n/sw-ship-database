import { createRouter, createWebHistory } from 'vue-router'
import SearchDBView from '@/views/SearchDBView.vue'
import SavedShipsView from '@/views/SavedShipsView.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchDBView
    },
    {
      path: '/ships',
      name: 'ships',
      component: SavedShipsView
    }
  ]
})

export default router
