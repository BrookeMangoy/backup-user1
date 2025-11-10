<template>
  <div>
    <div class="bg-gradient-to-r from-[#4626D0] to-[#231383] text-white p-8 shadow-lg">
      <h2 class="text-2xl font-semibold">Estudiante</h2>
      <p class="text-sm text-indigo-100">Inventario para préstamos: ubicación, stock y datos bibliográficos.</p>
    </div>

    <div class="bg-[#F0F2F5] p-6 md:p-8">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center md:items-start">

          <div class="relative mb-6 md:mb-0 md:mr-8 flex-shrink-0">
            <div class="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center">
              <UserIcon class="w-24 h-24 text-gray-500" />
            </div>
            <button class="absolute bottom-2 right-2 bg-[#4626D0] text-white p-2 rounded-full hover:bg-opacity-80 shadow">
              <PencilIcon class="w-5 h-5" />
            </button>
          </div>

          <div class="flex-1 w-full">
            <form @submit.prevent>
              
              <div class="mb-4">
                <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
                <input
                  id="nombre"
                  type="text"
                  value="Felipe"
                  disabled
                  class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
                />
              </div>
              
              <div class="mb-4">
                <label for="apellidos" class="block text-sm font-medium text-gray-700 mb-1">Apellidos:</label>
                <input
                  id="apellidos"
                  type="text"
                  value="Santiago Rojas"
                  disabled
                  class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
                />
              </div>
              
              <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico:</label>
                <input
                  id="email"
                  type="email"
                  value="Felipe.Santiago@gmail.com"
                  disabled
                  class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
                />
              </div>
              
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Este componente solo necesita los íconos que usa
import { UserIcon, PencilIcon } from '@heroicons/vue/24/solid';
</script>