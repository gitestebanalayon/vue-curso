/*-------------------------PASO 1-------------------------*/
import { createRouter, createWebHistory } from 'vue-router' 
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SectionView from '../views/SectionView.vue'
import ContactView from '../views/ContactView.vue'

/*-------------------------PASO 2-------------------------*/
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/section',
      name: 'section',
      component: SectionView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
