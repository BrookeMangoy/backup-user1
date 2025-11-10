<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    
    <aside class="flex-shrink-0 w-20 bg-[#000037] text-gray-400 flex flex-col items-center py-4">
      
      <div class="py-4">
        <AcademicCapIcon class="h-8 w-8 text-white" />
      </div>

      <button class="py-4 my-2 text-gray-500 hover:text-white transition-colors pl-2 pr-0 mr-auto">
        <ChevronRightIcon class="h-6 w-6" />
      </button>

      <nav class="flex flex-col items-center space-y-4 mt-4">
        
        <router-link
          to="/dashboard"
          class="p-3 rounded-lg hover:bg-[#4626D0] hover:text-white transition-colors"
          active-class="bg-[#4626D0] text-white"
        >
          <HomeIcon class="h-6 w-6" />
        </router-link>
        
        <router-link
          to="/market"
          class="p-3 rounded-lg hover:bg-[#4626D0] hover:text-white transition-colors"
          active-class="bg-[#4626D0] text-white"
        >
          <BuildingStorefrontIcon class="h-6 w-6" />
        </router-link>

        <router-link
          to="/alquileres"
          class="p-3 rounded-lg hover:bg-[#4626D0] hover:text-white transition-colors"
          active-class="bg-[#4626D0] text-white"
        >
          <BookmarkIcon class="h-6 w-6" />
        </router-link>

        <router-link
          to="/descargas"
          class="p-3 rounded-lg hover:bg-[#4626D0] hover:text-white transition-colors"
          active-class="bg-[#4626D0] text-white"
        >
          <ArrowDownTrayIcon class="h-6 w-6" />
        </router-link>

        <router-link
          to="/perfil"
          class="p-3 rounded-lg hover:bg-[#4626D0] hover:text-white transition-colors"
          active-class="bg-[#4626D0] text-white rounded-full"
        >
          <UserIcon class="h-6 w-6" />
        </router-link>
      </nav>

      <div class="mt-auto"></div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      
      <header class="bg-white text-gray-700 shadow-md p-4 flex justify-between items-center flex-shrink-0 z-10">
        
        <div>
          <h1 class="text-xl md:text-2xl font-semibold">{{ $route.meta.title || 'Biblioteca' }}</h1>
        </div>

        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-[#4626D0] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 mr-3">
            FR
          </div>
          <div class="text-left">
            <p class="font-semibold text-sm md:text-base text-gray-900">Felipe Santiago Rojas</p>
            <p class="text-xs text-gray-500">Estudiante - I.E. José Faustino Sánchez Carrión</p>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <router-view />
      </main>
      
    </div>
  </div>
</template>

<script setup>
// Importamos todos los íconos necesarios para el layout
import {
  AcademicCapIcon,
  ChevronRightIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  BookmarkIcon,
  ArrowDownTrayIcon,
  UserIcon,
} from '@heroicons/vue/24/solid';
</script>