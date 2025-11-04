import { createRouter, createWebHistory } from 'vue-router';

// Única vista importada
import MainPage from '../views/MainPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    meta: {
 
      title: 'Inicio | Biblioteca' 
    }
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Comportamiento de scroll simple
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      };
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Biblioteca Educativa'; 
});

export default router;