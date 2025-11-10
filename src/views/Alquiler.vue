<template>
  <div>
    <div class="bg-gradient-to-r from-[#4626D0] to-[#231383] text-white p-8 shadow-lg">
      <h2 class="text-2xl font-semibold">Alquiler de Libro</h2>
      <p class="text-sm text-indigo-100">Inventario para préstamos: ubicación, stock y datos bibliográficos.</p>
    </div>

    <div class="bg-[#F0F2F5] p-6 md:p-8">

      <div class="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
        <div class="flex flex-col items-center">

          <img src="/img/kant.png" alt="Portada de Critica de la razon pura" class="w-40 rounded-md shadow-lg mb-6 bg-gray-50 p-2" />

          <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">Crítica de la razón pura</h2>
          
          <div class="w-full space-y-2 text-left text-gray-700 mb-6">
            <p><strong>Autor:</strong> Immanuel Kant</p>
            <p><strong>Fecha Inicio:</strong> 2025 - 1 - 11</p>
            <p><strong>Fecha Fin:</strong> 2025 - 1 - 12</p>
            <p><strong>Estado:</strong> <span class="font-semibold text-blue-600">DEVUELTO</span></p>
            <p><strong>Libro ID:</strong> 21165</p>
          </div>

          <button 
            @click="confirmarAlquiler"
            class="w-full bg-[#4626D0] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-opacity-80 transition-colors"
          >
            Alquilar
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const confirmarAlquiler = () => {
  alert('¡Alquiler confirmado!');
};
</script>