<template>
    <div>
      <HeroSection />
  
      <div class="container mx-auto py-16 px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800">
          Explora Nuestra Colección
        </h2>
        <p class="text-lg text-gray-600 mt-4">
          (Aquí iría el resto de tu contenido, como una lista de libros...)
        </p>
      </div>
  
      <Footer />
  
    </div>
  </template>
  
  <script setup>
  // Aquí solo le dices a Vue qué "bloques" vas a usar
  import HeroSection from '@/views/HeroSection.vue';
  import Footer from '@/views/Footer.vue';
  </script>