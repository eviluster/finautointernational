<template>
  <div class="cards-container">
    <div v-for="card in cards" :key="card.id" class="card">
      <div @click="showCarDetails(card)">
        <img :src="card.imagen[0]" :alt="card.nombre" />
        <h2>{{ card.nombre }}</h2>
      </div>

      <div class="grop-car">
        <span class="price">{{ card.precio }}€</span>
        <div class="group-icon">
          <a nolink class="icon-card" @click="showCarDetails(card)"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                d="m19.655,14.945c-.648-.888-1.808-1.945-3.655-1.945s-3.006,1.058-3.655,1.945c-.461.631-.461,1.479,0,2.109.648.888,1.809,1.945,3.655,1.945s3.007-1.058,3.654-1.945c.462-.631.462-1.479,0-2.109Zm-.808,1.52c-.512.7-1.421,1.535-2.848,1.535s-2.336-.835-2.848-1.535c-.203-.278-.203-.651,0-.93.512-.7,1.421-1.535,2.848-1.535s2.336.835,2.848,1.535c.203.278.203.651,0,.93Zm-1.848-.465c0,.552-.448,1-1,1s-1-.447-1-1,.448-1,1-1,1,.448,1,1Zm6.854,7.146l-3.276-3.276c.886-1.046,1.423-2.396,1.423-3.87,0-3.309-2.691-6-6-6s-6,2.691-6,6,2.691,6,6,6c1.475,0,2.825-.537,3.87-1.423l3.276,3.276c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707Zm-12.854-7.146c0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5-5-2.243-5-5Zm2.5,7H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.334,0,.664.029.985.088v5.412c0,1.379,1.122,2.5,2.5,2.5h5.813c.154,0,.3-.071.395-.193s.128-.281.09-.431c-.289-1.13-.877-2.163-1.702-2.987l-3.484-3.484c-1.228-1.228-2.86-1.904-4.597-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM12,1.368c.706.272,1.354.692,1.904,1.243l3.484,3.484c.543.543.965,1.192,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368Z"
              />
            </svg>
            <div class="tooltip">Detalles</div>
          </a>

          <a class="icon-card" @click="addToCart(card)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <path
                d="M23.95,6.99l-.88,4.39c-.42,2.1-2.27,3.62-4.41,3.62H6.02c.25,1.71,1.73,3,3.46,3h10.02c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H9.48c-2.23,0-4.15-1.67-4.46-3.88L3.24,2.29c-.1-.74-.74-1.29-1.49-1.29H.5c-.28,0-.5-.22-.5-.5S.22,0,.5,0H1.76c1.24,0,2.31,.93,2.48,2.16l.26,1.84h6.01c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H4.63l1.25,9h12.78c1.66,0,3.11-1.18,3.43-2.81l.88-4.39c.09-.44-.03-.9-.31-1.25-.29-.35-.71-.55-1.16-.55h-5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.75,0,1.46,.33,1.93,.92,.48,.58,.67,1.34,.52,2.08Zm-14.95,15.01c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm-1,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm11,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm-1,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1ZM10.34,7.63c-.2-.19-.52-.17-.71,.03-.19,.2-.17,.52,.03,.71l2.07,1.9c.49,.49,1.13,.73,1.77,.73s1.27-.24,1.75-.72l2.09-1.91c.2-.19,.22-.5,.03-.71-.19-.2-.5-.22-.71-.03l-2.1,1.93c-.16,.16-.36,.28-.56,.35V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5V9.91c-.21-.07-.41-.2-.58-.36l-2.09-1.91Z"
              />
            </svg>
            <div class="tooltip">Agregar</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <CarDetails
    v-if="isModalVisible"
    :is-visible="isModalVisible"
    :car-data="selectedCarData"
    @close="closeModal"
  />
</template>

<script setup>
  import { ref } from "vue";
  import CarDetails from "../modal/Details.vue";
  import { useStore } from "vuex";

  // Definimos las props que recibirá el componente
  const props = defineProps({
    cards: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
          (card) =>
            card.id && card.nombre && card.imagen && Array.isArray(card.imagen)
        );
      },
    },
  });

  const emit = defineEmits(["card-selected", "modal-closed", "product-added"]);

  const isModalVisible = ref(false);
  const selectedCarData = ref(null);
  const store = useStore();
  const quantity = ref(0);

  const showCarDetails = (card) => {
    selectedCarData.value = {
      name: card.nombre,
      mainImage: card.imagen,
      thumbnails: card.imagen,
      specs: {
        Motor: card.motor ?? "No disponible",
        Potencia: card.potencia ?? "No disponible",
        Transmisión: card.transmision ?? "No disponible",
      },
    };
    isModalVisible.value = true;
    emit("card-selected", card);
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  const addToCart = (card) => {
    const existingItem = store.state.cart.find(
      (item) => item.card.id === card.id
    );

    if (existingItem) {
      store.dispatch("updateCartItemQuantity", {
        cardId: card.id,
        quantity: existingItem.quantity + 1,
      });
    } else {
      store.dispatch("addToCartAsync", { card, quantity: 1 });
    }

    emit("product-added", {
      card,
      quantity: existingItem ? existingItem.quantity + quantity.value : 1,
    });
  };
</script>

<style scoped>
  .card {
    /* Tamaño fijo para la card */
    width: 280px;
    height: 380px;
    padding: 1rem;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: scale(1.03);
  }

  .card img {
    /* Control de la imagen */
    width: 100%;
    height: 200px; /* Altura fija para todas las imágenes */
    object-fit: cover; /* Mantiene la proporción de la imagen */
    border-radius: 6px;
  }

  .card h4 {
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  .grop-car {
    margin-top: auto; /* Empuja el grupo de precio/iconos al fondo */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ce3c3c;
  }

  .group-icon {
    display: flex;
    gap: 0.5rem;
  }

  .icon-card {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background: #f5f5f5;
    transition: all 0.3s ease;
  }

  .icon-card:hover {
    background: #e0e0e0;
    cursor: pointer;
  }

  .icon-card svg {
    width: 25px;
    height: 25px;
  }

  /* Estilo para el tooltip */
  .tooltip {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .icon-card:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
  }
</style>
