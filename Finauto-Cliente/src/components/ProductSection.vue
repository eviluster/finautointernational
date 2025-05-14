<template>
    <div class="container-xxl">
        <div class="rectangulo-diagonal"></div>
        <div class="Titulo">
            <h2>{{ title }}</h2>
        </div>
        <div class="principal-card">
            <div class="search-bar">
                <input 
                    v-model="searchTerm" 
                    type="text" 
                    placeholder="Buscar por nombre..."
                >
            </div>
            <div class="card-container">
                <CardProduct :cards="filteredCards" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CardProduct from './Cards/CardProduct.vue';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchTerm = ref('');
const title = ref(route.query.nombre || '');

// Observa los cambios en la ruta y actualiza el título y el término de búsqueda
watch(route, (newRoute) => {
    title.value = newRoute.query.nombre || '';
    searchTerm.value = ''; // Reinicia el término de búsqueda si es necesario
});

const cardsToShow = ref([
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 99.99,
    imagen: [
      '/images/card.jpg',
      '/images/kia-carnival-2022-300x169.png',
      '/images/kia.jpg'
    ],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 2,
    nombre: 'Kia sorento picanto',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 3,
    nombre: 'Kia Sportage',
    precio: 99.99,
    imagen: [
      '/images/hummingbird-printed-t-shirt_8.jpg',
      '/images/hummingbird-printed-t-shirt_9.jpg',
      '/images/hummingbird-printed-t-shirt_10.jpg',
      '/images/hummingbird-printed-t-shirt_11.jpg',
      '/images/hummingbird-printed-t-shirt_12.jpg',
      '/images/hummingbird-printed-t-shirt_13.jpg',

    ],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 4,
    nombre: 'Producto 2',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 5,
    nombre: 'Producto 1',
    precio: 99.99,
    imagen: ['/images/card.jpg'],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 6,
    nombre: 'Producto 2',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 7,
    nombre: 'Producto 1',
    precio: 99.99,
    imagen: ['/images/card.jpg'],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 8,
    nombre: 'Producto 2',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 99.99,
    imagen: [
      '/images/card.jpg',
      '/images/kia-carnival-2022-300x169.png',
      '/images/kia.jpg'
    ],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 2,
    nombre: 'Kia sorento picanto',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 3,
    nombre: 'Kia Sportage',
    precio: 99.99,
    imagen: [
      '/images/hummingbird-printed-t-shirt_8.jpg',
      '/images/hummingbird-printed-t-shirt_9.jpg',
      '/images/hummingbird-printed-t-shirt_10.jpg',
      '/images/hummingbird-printed-t-shirt_11.jpg',
      '/images/hummingbird-printed-t-shirt_12.jpg',
      '/images/hummingbird-printed-t-shirt_13.jpg',

    ],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 4,
    nombre: 'Producto 2',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 5,
    nombre: 'Producto 1',
    precio: 99.99,
    imagen: ['/images/card.jpg'],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 6,
    nombre: 'Producto 2',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  },
  {
    id: 7,
    nombre: 'Producto 1',
    precio: 99.99,
    imagen: ['/images/card.jpg'],
    descripcion: 'Descripción del producto 1'
  },
  {
    id: 8,
    nombre: 'Producto 2',
    precio: 149.99,
    imagen: ['/images/kia-carnival-2022-300x169.png'],
    descripcion: 'Descripción del producto 2'
  }
  // Puedes agregar más productos aquí
]);

// Computed property para filtrar las tarjetas
const filteredCards = computed(() => {
  return cardsToShow.value.filter(card => 
    card.nombre.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>




<style scoped>

h2 {
    text-align: center;
    color: #00AA4E;
    text-transform: uppercase;
    margin-top: 32px;
}

.container-xxl {
    padding-left: 0%;
    padding-right: 0%;
    position: relative;
    overflow: hidden;
}

.rectangulo-diagonal {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 250%;
    background-color: rgba(0, 170, 78, 0.10);
    /* Color azul con opacidad */
    /*transform: skewY(-10deg); */
    /* Ajusta el ángulo según sea necesario */
    transform-origin: top left;
    transform: rotate(342deg);
    z-index: -1;
}
.card-container {
    /*display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 50px;
}


.search-bar {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-right: 10%;
    margin-top: 50px;
}

.search-bar input,
.search-bar select {
    padding: 8px;
    font-size: 16px;
    width: 170px;
    border-radius: 10px;
    border: 1px solid #ccc;
}

.search-bar button {
    border-radius: 5px;
    height: 37px;
    width: 54px;
}



.principal-card .boton-ver-mas {
    position: relative;
}


@media (max-width: 800px) {
    .card {
        width: calc(50% - 20px);
        /* 2 tarjetas en columnas más pequeñas */
    }

    .rectangulo-diagonal {
        transform: rotate(355deg);
        width: 300px;
    }

    .group-icon svg {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: medium;
    }

    .group-icon {

        gap: 5px;
    }

}
</style>