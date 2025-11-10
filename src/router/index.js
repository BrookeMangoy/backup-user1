import { createRouter, createWebHistory } from 'vue-router';

// 1. Importa el NUEVO Layout
import StudentLayout from '@/views/StudentLayout.vue';

// 2. Importa tus vistas (páginas)
import Perfil from '@/views/Perfil.vue';
import MarketDashboard from '@/views/MarketDashboard.vue';
import DetalleLibro from '@/views/DetalleLibro.vue';
import Alquiler from '@/views/Alquiler.vue';

// Componentes placeholder para los otros links
const Dashboard = { template: '<div><h1>Dashboard de Inicio</h1></div>' }; // Para el HomeIcon
const Alquileres = { template: '<div><h1>Mis Alquileres</h1></div>' };
const Descargas = { template: '<div><h1>Mis Descargas</h1></div>' };

const routes = [
  {
    path: '/',
    component: StudentLayout,
    redirect: '/market', // La página principal sigue siendo /market
    
    children: [
      // RUTA PARA EL NUEVO BOTÓN "HOME"
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          title: 'Inicio',
          subtitleHeader: 'Bienvenido',
          subtitle: 'Resumen de tu actividad'
        }
      },
      {
        path: 'market',
        name: 'market',
        component: MarketDashboard,
        meta: {
          title: 'Market',
          subtitleHeader: 'Mercado de Libros',
          subtitle: 'Búsqueda de libros por título, autor, categorías, etc.'
        }
      },
      {
        path: 'market/:id',
        name: 'detalle-libro',
        component: DetalleLibro,
        meta: {
          title: 'Libros/Detalles Libro',
          subtitleHeader: 'Mercado de Libros',
          subtitle: 'Detalle de libro seleccionado'
        }
      },
      {
        path: 'market/:id/alquilar',
        name: 'alquilar-libro',
        component: Alquiler,
        meta: {
          title: 'Market/Detalles Libro/Alquiler',
          subtitleHeader: 'Alquiler de Libro',
          subtitle: 'Inventario para préstamos: ubicación, stock y datos bibliográficos.'
        }
      },
      {
        path: 'perfil',
        name: 'perfil',
        component: Perfil,
        meta: {
          title: 'Perfil Estudiante',
          subtitleHeader: 'Estudiante',
          subtitle: 'Inventario para préstamos: ubicación, stock y datos bibliográficos.'
        }
      },
      {
        path: 'alquileres',
        name: 'alquileres',
        component: Alquileres,
        meta: { title: 'Mis Alquileres', subtitleHeader: 'Mis Alquileres', subtitle: 'Revisa tus libros alquilados' }
      },
      {
        path: 'descargas',
        name: 'descargas',
        component: Descargas,
        meta: { title: 'Descargas', subtitleHeader: 'Descargas', subtitle: 'Revisa tus descargas' }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Esta función hace que el resaltado del link funcione correctamente
  linkActiveClass: 'active-link', // Puedes cambiar 'active-link' por lo que quieras
  linkExactActiveClass: 'exact-active-link', // O usar la clase de Tailwind
});

// Esto cambia el título de la pestaña del navegador
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Biblioteca Educativa'; 
  next(); 
});

export default router;