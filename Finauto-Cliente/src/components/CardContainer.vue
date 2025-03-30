<template>
  <div class="cards-grid">
    <div v-for="card in cards" :key="card.id" class="card">
      <img :src="card.imagen" :alt="card.nombre">
      <h2>{{ card.nombre }}</h2>
      <p>{{ card.descripcion }}</p>
      <div class="grop-car">
        <span class="price">{{ card.precio }}€</span>
        <div class="group-icon">
          <!-- Aquí puedes agregar tus iconos -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Definimos las props que recibirá el componente
const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
});
</script>
