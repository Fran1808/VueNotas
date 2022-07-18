import FooterVue from '@/components/Footer.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '../components/AboutView.vue'
import View from '../components/AboutView.vue'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/AboutView',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/Footer',
      name: 'footer',
      component: FooterVue
    },
  ]
})

export default router
