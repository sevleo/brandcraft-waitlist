import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Privacy from '../views/PrivacyView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top when navigating to a new page
    return { top: 0 }
  }
})

export default router
