// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
// import Login from '../views/Login.vue'; // Descomenta esto cuando lo crees

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    meta: {
      title: 'Inicio | Biblioteca' 
    }
  },
  // --- Ruta de Login (Soluciona el bucle) ---
  {
    path: '/login',
    name: 'login',
    // Asigna un componente temporal mientras creas la vista de Login
    component: { template: '<div>Página de Login</div>' }, 
    meta: {
      title: 'Iniciar Sesión | Biblioteca'
    }
  },
  // --- Ruta catch-all (Debe ir siempre al final) ---
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

// --- ESTA ES LA PARTE QUE FALTABA ---

// 1. Crea la instancia del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
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

// 2. Actualiza el título de la pestaña en cada cambio de ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Biblioteca Educativa'; 
  next(); // No olvides llamar a next()
});

// 3. Exporta el router para que main.js pueda usarlo
export default router;