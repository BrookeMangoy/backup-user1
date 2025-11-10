<template>
  <div>
    <div class="bg-gradient-to-r from-[#4626D0] to-[#231383] text-white p-8 shadow-lg">
      <h2 class="text-2xl font-semibold">Mercado de Libros</h2>
      <p class="text-sm text-indigo-100">Detalle de libro seleccionado</p>
    </div>

    <div class="bg-[#F0F2F5] p-6 md:p-8">
      
      <div class="flex flex-col lg:flex-row gap-8">

        <div class="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:w-2/3">
          
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3 flex-shrink-0">
              <img src="/img/kant.png" alt="Portada de Critica de la razon pura" class="w-full rounded-md shadow-lg object-contain bg-gray-50 p-4" />
            </div>
            <div class="md:w-2/3">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">Crítica de la razón pura</h1>
              <p class="text-lg text-gray-700 mb-4">Autor: <span class="font-semibold">Immanuel Kant</span></p>
              <div class="space-y-1 text-gray-600">
                <p><strong>ISBN:</strong> 978-84-306-0594-1</p>
                <p><strong>Editorial:</strong> TAURUS</p>
                <p><strong>Año:</strong> 2012</p>
                <p><strong>Categoría:</strong> Filosofía</p>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Descripción</h2>
            <p class="text-gray-700 leading-relaxed text-justify">
              Se trata de una indagación trascendental (acerca de las condiciones epistémicas del conocer humano) cuyo objetivo central es lograr una respuesta definitiva sobre si la metafísica puede ser considerada una ciencia, así como fundamentar la validez tanto de la experiencia ordinaria como de las ciencias matemáticas y físicas. Tanto la fundamentación de la metafísica como la del resto de los conocimientos exige, para que sea decidida su posibilidad, que se determine en cada caso si son posibles juicios que sean a priori (es decir, independientes de la experiencia, lo que implica para Kant que sean necesarios y universales, absolutamente ciertos).
            </p>
          </div>
        </div>

        <div class="lg:w-1/3 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-xl p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Libros</h3>
            <p class="text-gray-700">Ejemplares Totales: <span class="font-bold">24</span></p>
            <p class="text-blue-600 font-semibold mb-4">Disponibles: <span class="font-bold">6</span></p>
            
            <router-link
              to="/market/1/alquilar" 
              class="block w-full bg-[#4626D0] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-opacity-80 transition-colors"
            >
              Alquilar
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// No se necesita JS para esta vista estática
</script>