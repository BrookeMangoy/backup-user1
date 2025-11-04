<template>
    <header class="bg-gray-800 text-gray-300 shadow-md py-4 px-6">
      <div class="container mx-auto flex justify-between items-center">
        
        <router-link to="/" class="text-xl font-bold text-white hover:text-gray-200">
          Biblioteca Educativa
        </router-link>
  
        <nav class="hidden md:flex space-x-6 items-center">
          <router-link to="/" class="hover:text-white transition-colors">Inicio</router-link>
          <a href="#" class="hover:text-white transition-colors">Explorar Libros</a>
          <a href="#" class="hover:text-white transition-colors">Nosotros</a>
          <a href="#" class="hover:text-white transition-colors">Contacto</a>
  
          <div v-if="!userStore.isLoggedIn">
            <router-link to="/login" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors">
              Iniciar Sesión
            </router-link>
          </div>
          <div v-else>
            <button @click="logout" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors">
              Cerrar Sesión
            </button>
          </div>
        </nav>
  
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-300 hover:text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
  
      </div>
  
      <div v-if="isMenuOpen" class="md:hidden mt-4 bg-gray-800 absolute left-0 w-full z-50 shadow-lg">
        <div class="flex flex-col space-y-2 px-6 py-4">
          <router-link to="/" @click="isMenuOpen = false" class="block hover:text-white transition-colors py-2">Inicio</router-link>
          <a href="#" @click="isMenuOpen = false" class="block hover:text-white transition-colors py-2">Explorar Libros</a>
          <a href="#" @click="isMenuOpen = false" class="block hover:text-white transition-colors py-2">Nosotros</a>
          <a href="#" @click="isMenuOpen = false" class="block hover:text-white transition-colors py-2">Contacto</a>
          
          <hr class="border-gray-700"/>
  
          <div v-if="!userStore.isLoggedIn" class="py-2">
            <router-link to="/login" @click="isMenuOpen = false" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors w-full text-center block">
              Iniciar Sesión
            </router-link>
          </div>
          <div v-else class="py-2">
            <button @click="logout" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors w-full text-center block">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/user'; // Importamos tu store
  
  // Estado para el menú móvil
  const isMenuOpen = ref(false);
  
  // Instancias de router y store
  const router = useRouter();
  const userStore = useUserStore();
  
  // Función de Logout
  const logout = () => {
    userStore.clearUser(); // Limpia la sesión del store
    isMenuOpen.value = false; // Cierra el menú móvil
    router.push('/login'); // Redirige al login
  };
  </script>