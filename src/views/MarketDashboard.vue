<template>
  <div>
    <div class="bg-gradient-to-r from-[#4626D0] to-[#231383] text-white p-8 shadow-lg">
      <h2 class="text-2xl font-semibold">Mercado de Libros</h2>
      <p class="text-sm text-indigo-100 mb-6">Búsqueda de libros por título, autor, categorías, etc.</p>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        
        <div class="md:col-span-2">
          <div class="relative">
            <input
              type="text"
              placeholder="Buscar por título, autor o editorial"
              class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#4626D0] text-gray-800"
            />
            <MagnifyingGlassIcon class="w-6 h-6 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <select class="w-full py-3 px-4 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#4626D0] text-gray-800">
          <option disabled selected>Categoría</option>
          <option>Filosofía</option>
        </select>

        <select class="w-full py-3 px-4 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#4626D0] text-gray-800">
          <option disabled selected>Disponibilidad</option>
          <option>Disponible</option>
        </select>

        <div class="bg-white rounded-full py-2 px-4 flex items-center space-x-2 text-gray-800">
          <label for="min-year" class="text-sm text-gray-700 whitespace-nowrap">Rango de año:</label>
          <input
            id="min-year"
            type="number"
            placeholder="min"
            class="w-full py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4626D0] text-gray-800"
          />
          <span class="text-gray-700">-</span>
          <input
            id="max-year"
            type="number"
            placeholder="max"
            class="w-full py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4626D0] text-gray-800"
          />
        </div>
      </div>
    </div>

    <div class="bg-[#F0F2F5] p-6 md:p-8">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">
        N° Libros Encontrados (4)
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> 
        
        <router-link to="/market/1" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col">
          <img src="/img/kant.png" alt="Critica de la razon pura" class="w-full h-72 object-contain p-4 bg-gray-50 flex-shrink-0" />
          
          <div class="p-4 flex flex-row justify-between items-center">
            
            <div class="text-left flex-1 min-w-0"> <h3 class="text-md font-semibold text-gray-800 truncate">Crítica de la razón pura</h3> 
              <p class="text-sm text-gray-600 truncate">Immanuel Kant</p>
            </div>
            
            <div class="flex-shrink-0 ml-2"> 
              <span class_comment="Padding ajustado a px-3 py-1" class="inline-block bg-[#4626D0] text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap"> 
                Dis: 6
              </span>
            </div>
          </div>
        </router-link>

        <router-link to="/market/1" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col">
          <img src="/img/darwin.png" alt="El origen de las especies" class="w-full h-72 object-contain p-4 bg-gray-50 flex-shrink-0" />
          <div class="p-4 flex flex-row justify-between items-center">
            <div class="text-left flex-1 min-w-0">
              <h3 class="text-md font-semibold text-gray-800 truncate">El origen de las especies</h3>
              <p class="text-sm text-gray-600 truncate">Charles Darwin</p>
            </div>
            <div class="flex-shrink-0 ml-2">
              <span class="inline-block bg-[#4626D0] text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap">
                Dis: 3
              </span>
            </div>
          </div>
        </router-link>

        <router-link to="/market/1" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col">
          <img src="/img/weber.png" alt="Economia y sociedad" class="w-full h-72 object-contain p-4 bg-gray-50 flex-shrink-0" />
          <div class="p-4 flex flex-row justify-between items-center">
            <div class="text-left flex-1 min-w-0">
              <h3 class="text-md font-semibold text-gray-800 truncate">Economía y sociedad...</h3>
              <p class="text-sm text-gray-600 truncate">Max Weber</p>
            </div>
            <div class="flex-shrink-0 ml-2">
              <span class="inline-block bg-[#4626D0] text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap">
                Dis: 10
              </span>
            </div>
          </div>
        </router-link>

        <router-link to="/market/1" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col">
          <img src="/img/diamond.png" alt="Armas, germenes y acero" class="w-full h-72 object-contain p-4 bg-gray-50 flex-shrink-0" />
          <div class="p-4 flex flex-row justify-between items-center">
            <div class="text-left flex-1 min-w-0">
              <h3 class="text-md font-semibold text-gray-800 truncate">Armas, gérmenes y acero...</h3>
              <p class="text-sm text-gray-600 truncate">Jared Diamond</p>
            </div>
            <div class="flex-shrink-0 ml-2">
              <span class="inline-block bg-[#4626D0] text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap">
                Dis: 8
              </span>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>