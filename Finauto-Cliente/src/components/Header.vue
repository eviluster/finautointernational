<template>
  <nav class="navbar navbar-expand-xl">
    <div class="container-fluid">
      <!-- LOGO -->
      <router-link class="navbar-brand" to="/">
        <img
          src="/images/Logo finauto 2022(text blanco).png"
          alt="Logo"
          style="height: 40px"
        />
      </router-link>

      <!-- BOTÓN HAMBURGUESA PARA COLAPSAR EN PANTALLAS PEQUEÑAS -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- CONTENIDO COLAPSABLE -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <!-- MENÚ PRINCIPAL -->
        <ul class="navbar-nav">
          <!-- SHOWROOM (Dropdown) -->
          <li class="nav-item dropdown menu-item">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="showroomDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SHOWROOM
            </a>
            <ul class="dropdown-menu" aria-labelledby="showroomDropdown">
              <li v-for="item in showroom" :key="item.nombre">
                <router-link
                  class="dropdown-item"
                  :to="{ path: '/product', query: { nombre: item.nombre } }"
                >
                  {{ item.nombre }}
                </router-link>
              </li>
            </ul>
          </li>

          <!-- REPUESTOS Y ACCESORIOS (Dropdown) -->
          <li class="nav-item dropdown menu-item">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="repuestosDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              REPUESTOS Y ACCESORIOS
            </a>
            <ul class="dropdown-menu" aria-labelledby="repuestosDropdown">
              <li v-for="item in repuesto" :key="item.nombre">
                <router-link
                  class="dropdown-item"
                  :to="{ path: '/product', query: { nombre: item.nombre } }"
                >
                  {{ item.nombre }}
                </router-link>
              </li>
            </ul>
          </li>

          <!-- EQUIPAMIENTO DE GARAGE (Dropdown) -->
          <li class="nav-item dropdown menu-item">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="garageDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EQUIPAMIENTO DE GARAGE
            </a>
            <ul class="dropdown-menu" aria-labelledby="garageDropdown">
              <li v-for="item in garaje" :key="item.nombre">
                <router-link
                  class="dropdown-item"
                  :to="{ path: '/product', query: { nombre: item.nombre } }"
                >
                  {{ item.nombre }}
                </router-link>
              </li>
            </ul>
          </li>

          <!-- SERVICIOS -->
          <li class="nav-item menu-item">
            <router-link class="nav-link" to="/services">
              SERVICIOS
            </router-link>
          </li>

          <!-- QUIENES SOMOS -->
          <li class="nav-item menu-item">
            <router-link class="nav-link" to="/about">
              QUIENES SOMOS
            </router-link>
          </li>

          <!-- MIS COMPRAS (sólo si está registrado) -->
          <li class="nav-item menu-item" v-if="isRegistered">
            <router-link class="nav-link" to="/mis-compras">
              MIS COMPRAS
            </router-link>
          </li>
        </ul>
        <!-- ICONOS A LA DERECHA -->
        <div class="d-flex align-items-center iconos">
          <!-- Ícono de búsqueda -->
          <div class="me-3" id="search-icon">
            <i class="fas fa-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.35 20.425L13.325 14.4C12.825 14.8333 12.2417 15.1708 11.575 15.4125C10.9083 15.6541 10.2 15.775 9.45 15.775C7.65 15.775 6.125 15.15 4.875 13.9C3.625 12.65 3 11.1416 3 9.37498C3 7.60831 3.625 6.09998 4.875 4.84998C6.125 3.59998 7.64167 2.97498 9.425 2.97498C11.1917 2.97498 12.6958 3.59998 13.9375 4.84998C15.1792 6.09998 15.8 7.60831 15.8 9.37498C15.8 10.0916 15.6833 10.7833 15.45 11.45C15.2167 12.1166 14.8667 12.7416 14.4 13.325L20.475 19.35C20.625 19.4833 20.7 19.6541 20.7 19.8625C20.7 20.0708 20.6167 20.2583 20.45 20.425C20.3 20.575 20.1167 20.65 19.9 20.65C19.6833 20.65 19.5 20.575 19.35 20.425ZM9.425 14.275C10.775 14.275 11.925 13.7958 12.875 12.8375C13.825 11.8791 14.3 10.725 14.3 9.37498C14.3 8.02498 13.825 6.87081 12.875 5.91248C11.925 4.95414 10.775 4.47498 9.425 4.47498C8.05833 4.47498 6.89583 4.95414 5.9375 5.91248C4.97917 6.87081 4.5 8.02498 4.5 9.37498C4.5 10.725 4.97917 11.8791 5.9375 12.8375C6.89583 13.7958 8.05833 14.275 9.425 14.275Z"
                  fill="white"
                />
              </svg>
            </i>
          </div>

          <!-- Ícono de carrito -->
          <router-link
            to="/shop_cart"
            class="text-decoration-none text-white position-relative me-3"
          >
            <i class="fas fa-cart">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772-1.26-4.248-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75ZM9 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  fill="#ffffff"
                />
              </svg>
              <span v-if="cartCount > 0" class="cart-count">
                {{ cartCount }}
              </span>
            </i>
          </router-link>

          <!-- Ícono de usuario (login) -->
          <router-link
            to="/login"
            class="text-decoration-none text-white position-relative"
          >
            <i class="fas fa-user">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM10 2.75C11.795 2.75 13.25 4.205 13.25 6C13.25 7.795 11.795 9.25 10 9.25C8.205 9.25 6.75 7.795 6.75 6C6.75 4.205 8.205 2.75 10 2.75ZM10 18C7.562 18 5.379 16.909 3.912 15.188C3.531 14.741 3.616 14.07 4.085 13.717C5.602 12.576 8.366 12 10 12C11.634 12 14.398 12.576 15.916 13.717C16.385 14.07 16.47 14.742 16.089 15.188C14.621 16.909 12.438 18 10 18Z"
                  fill="white"
                />
              </svg>
            </i>
          </router-link>

          <!-- Bandera de idioma (ej: Español) -->
          <a href="#" class="text-decoration-none ms-3">
            <img
              src="https://flagcdn.com/16x12/es.png"
              alt="Español"
              width="24"
              height="18"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref, watch, computed } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const cartCount = ref(0);
  const isRegistered = computed(() => {
    return store.state.isRegistered;
  });
  const showroom = ref([
    { nombre: "Autos" },
    { nombre: "SUVs/MPV" },
    { nombre: "Híbridos / Eléctricos" },
  ]);
  const repuesto = ref([
    { nombre: "Transmisión" },
    { nombre: "Motor" },
    { nombre: "Chasis" },
    { nombre: "Carrocería" },
    { nombre: "TRIM" },
    { nombre: "Partes Eléctricas" },
  ]);
  const garaje = ref([
    { nombre: "Compresores la Padana" },
    { nombre: "SOLDADORAS Y CARGADORES" },
    { nombre: "FREGADORAS Y ASPIRADORAS" },
    { nombre: "TALADROS Y AMOLADORAS" },
    { nombre: "EQUIPOS DE LUBRICACION" },
    { nombre: "EQUIPOS PARA CLIMA" },
    { nombre: "EQUIPOS DE DIAGNOSTICO" },
    { nombre: "HERRAMIENTAS PARA TALLER" },
    { nombre: "GATOS GRUAS Y PRENSAS PARA TALLER" },
    { nombre: "EQUIPOS DE RECTIFICACION DE FRENOS Y MOTORES" },
  ]);

  // Estado para controlar la visibilidad del menú hamburguesa
  const menuVisible = ref(false);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
  };

  // Función para manejar la búsqueda
  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
  };

  const updateCartCount = () => {
    const newCount = store.state.cart ? store.state.cart.length : 0;
    cartCount.value = newCount;
    console.log("Nueva vuenta", newCount);
    console.log("Cantidad de productos", cartCount.value);
  };

  // Llama a updateCartCount en el montaje del componente para inicializar el conteo
  updateCartCount();

  // Si necesitas actualizar el conteo cuando cambie el carrito, puedes usar un watcher
  watch(
    () => store.state.cart,
    (newCart) => {
      updateCartCount(); // Actualiza el conteo cuando cambie el carrito
    },
    { deep: true }
  ); // Agrega esta opción para ejecutar el watcher inmediatamente
</script>

<style scoped>
  li {
    list-style: none;
    width: fit-content;
  }
  .cart-count {
    position: absolute;
    /*top: -8px;
    right: -8px;*/
    background-color: red;
    color: white;
    border-radius: 50%;
    /*padding: 2px 6px;*/
    font-size: 12px;
    min-width: 16px;
    text-align: center;
  }

  nav {
    width: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    z-index: 1000;
  }

  nav .menu-item:hover > a {
    background-color: rgba(128, 128, 128, 0.5);
  }
  #navbarContent {
    justify-content: space-around;
  }
  .navbar-nav {
    align-items: center;
  }
  .d-flex.align-items-center.iconos {
    justify-content: center;
    margin: 12px 0;
  }
  nav .menu-item .dropdown-menu {
    background-color: rgba(18, 17, 17, 16%);
    backdrop-filter: blur(10px);
  }

  nav .dropdown-menu li:hover .dropdown-item {
    background-color: rgba(128, 128, 128, 0.5) !important;
  }

  .dropdown-item {
    color: white !important;
  }

  .navbar-toggler {
    color: white !important;
    background-color: white !important;
    border: var(--bs-border-width) solid white !important;
  }
  @media (max-width: 1400px) {
    .navbar.navbar-expand-xxl {
      background-color: rgba(18, 17, 17, 16%);
      backdrop-filter: blur(10px);
    }
  }
</style>
