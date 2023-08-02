import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReverseString from '../views/ReverseString.vue'
import TipsTest from '../views/TipsTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reverse',
      name: 'reverse',
      component: ReverseString
    },
    {
      path: '/tipstest',
      name: 'tipstest',
      component: TipsTest
    },
 
  ]
})

export default router
