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
            <p><strong>Estado:</strong> 
              <span :class="estadoClass">{{ estadoLibro }}</span>
            </p>
            <p><strong>Libro ID:</strong> 21165</p>
          </div>

          <button 
            @mousedown="startHold"
            @mouseup="cancelHold"
            @mouseleave="cancelHold"
            @touchstart.prevent="startHold"
            @touchend.prevent="cancelHold"
            :disabled="buttonText === 'Prestado'"
            :class="buttonBackgroundClass"
            class="relative w-full text-white py-3 px-6 rounded-md text-lg font-semibold transition-colors duration-300 overflow-hidden"
          >
            
            <div 
              v-if="buttonText !== 'Prestado'"
              class="hold-progress-circle"
              :class="{ 'holding': isHolding }"
            ></div>

            <div 
              v-if="buttonText === 'Prestado'" 
              class="absolute inset-0 bg-green-600"
            ></div>
            
            <span class="relative z-10">{{ buttonText }}</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// --- Estado del Componente ---
const estadoLibro = ref('DEVUELTO');
const buttonText = ref('Alquilar');
const isHolding = ref(false); // Controla el estado de "presionado"
let holdTimer = null; // Temporizador para la acción de 2 segundos

// --- Propiedades Computadas ---

// Clase para el texto del estado (azul o verde)
const estadoClass = computed(() => {
  return estadoLibro.value === 'DEVUELTO'
    ? 'font-semibold text-blue-600'
    : 'font-semibold text-green-600';
});

// Clase para el fondo del botón (morado o verde)
const buttonBackgroundClass = computed(() => {
  return buttonText.value === 'Prestado'
    ? 'bg-green-600 cursor-not-allowed'
    : 'bg-[#4626D0] hover:bg-opacity-80';
});

// --- Métodos ---

// Se llama cuando el usuario presiona el botón
const startHold = () => {
  if (buttonText.value === 'Prestado' || isHolding.value) return;
  
  limpiarTemporizadores();
  
  // Activa la clase '.holding', que inicia la animación de expansión
  isHolding.value = true; 
  
  // Inicia el temporizador de 2 segundos para confirmar
  holdTimer = setTimeout(confirmarAlquiler, 1200); 
};

// Cancela si se suelta antes de tiempo
const cancelHold = () => {
  if (buttonText.value === 'Prestado' || !isHolding.value) return;
  
  // Desactiva la clase '.holding', que inicia la animación de contracción
  isHolding.value = false;
  
  // Limpia el temporizador para que no se confirme la acción
  limpiarTemporizadores();
};

// Acción confirmada después de 2 segundos
const confirmarAlquiler = () => {
  limpiarTemporizadores();
  estadoLibro.value = 'PRESTADO';
  buttonText.value = 'Prestado';
  isHolding.value = false; // Oculta el círculo animado
};

// Función de ayuda
const limpiarTemporizadores = () => {
  if (holdTimer) clearTimeout(holdTimer);
  holdTimer = null;
};
</script>

<style scoped>
/*
  Estilos base para el círculo de progreso
*/
.hold-progress-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  
  /* Un tamaño fijo grande que definitivamente cubrirá el botón */
  width: 500px; 
  height: 500px;
  
  /* Centrado (usando márgenes negativos de la mitad del tamaño) */
  margin-left: -250px;
  margin-top: -250px;

  background-color: #22c55e; /* verde-500 */
  border-radius: 50%;
  
  /* Estado inicial: invisible (escala 0)
  */
  transform: scale(0);
  transform-origin: center;
  
  /* Animación de retracción (0.3s): 
    Se usa cuando 'isHolding' se vuelve 'false'.
  */
  transition: transform 0.3s ease-out; 
}

/*
  Estado activo:
  Se aplica cuando 'isHolding' es 'true'.
*/
.hold-progress-circle.holding {
  /* 1. Crece hasta ser 100% visible */
  transform: scale(1); 
  
  /* 2. La animación de expansión dura 2 segundos */
  transition-duration: 1.5s;
  transition-timing-function: linear; /* Velocidad constante */
}
</style>