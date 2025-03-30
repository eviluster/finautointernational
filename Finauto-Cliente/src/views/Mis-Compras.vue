<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-12 text-center">
        <img
          src="/images/Logo finauto 2022.png"
          alt="Logo"
          class="max-h-75px logoF"
        />
      </div>
    </div>
    <div class="row py-5">
      <div class="col-md-5">
        <router-link to="/" class="customBTN"
          ><i class="bi bi-chevron-double-left mr-2" style="font-size: 24px"></i
          >REGRESAR</router-link
        >
      </div>
      <div class="col-md-7"><h5 class="customMC">Mis compras</h5></div>
    </div>
    <div class="row py-4">
      <div class="col-md-6">
        <div>
          <div style="border-bottom: 1.4px solid #cac2c8">
            <h5 class="customP">Pedidos</h5>
          </div>
          <div class="search-bar py-4">
            <input
              v-model="query"
              type="text"
              class="form-control"
              placeholder="Buscar..."
              @keyup.enter="search"
              style="border-bottom: 1.4px solid #cac2c8"
            />
            <button class="btn btn-dark" @click="search">
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div class="lis-productos">
            <div
              v-for="(product, index) in productos"
              :key="index"
              class="d-flex flex-row card mb-3 product"
              style="max-width: 570px; justify-content: space-around"
              @click="showDetail(index)"
            >
              <img
                :src="product.img"
                alt=""
                style="width: 102px; height: 102px"
              />
              <div class="d-flex flex-column justify-content-center">
                <span class="name">{{ product.name }}</span>
                <span class="price">$ {{ product.price }}</span>
                <span class="number">No. Factura : {{ product.numberF }}</span>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h5 class="status">{{ product.status }}</h5>
                <span class="date">{{ product.date }}</span>
              </div>
              <div class="d-flex flex-column justify-content-center">
                <i class="bi bi-chevron-right" style="font-size: 18px"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Productos
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Detalles de la factura
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Detalles del proveedor
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <!-- Sección Productos -->
            <div class="tab-slide bg-white">
              <div
                class="d-flex flex-row row customrow card p-3 my-4"
                style="width: 100%; height: auto"
                v-if="productSelect != null"
              >
                <div class="col-12" style="text-align: center">
                  <img
                    :src="productSelect.img"
                    alt=""
                    style="width: 170px; height: 170px"
                  />
                </div>

                <div class="col-sm-6">
                  <div
                    class="d-flex flex-column justify-content-center custompad"
                    style="height: 100%; gap: 20px"
                  >
                    <span class="nameDetail">{{ productSelect.name }}</span>
                    <span class="price"
                      >Precio : ${{ productSelect.price }}</span
                    >
                    <span class="number"
                      >Cantidad : {{ productSelect.amount }}</span
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex flex-column justify-content-center">
                    <span class="precioTotalDetail">
                      Precio Total: $
                      {{
                        (
                          Number(productSelect.price) *
                          Number(productSelect.amount)
                        ).toFixed(2)
                      }}
                    </span>

                    <h5 class="statusDetail py-2">
                      Estado : {{ productSelect.status }}
                    </h5>
                    <button
                      type="button"
                      class="btn btn-lg"
                      style="background-color: #1e141a; color: white"
                    >
                      Cancelar reserva
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <!-- Sección Detalles de la factura -->
            <div class="tab-slide bg-white">
              <div class="card shadow-sm w-100" style="max-width: 600px">
                <div class="card-body">
                  <!-- Fila 1: Estado y precios -->
                  <div class="row align-items-center">
                    <!-- Columna izquierda: Estado -->
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                      <h5 class="card-title">
                        Estado: {{ facturaDetails.status }}
                      </h5>
                      <p class="mb-0">
                        Precio de envío:
                        <strong>{{ facturaDetails.shippingPrice }}</strong>
                      </p>
                      <p class="mb-0">
                        Precio Total:
                        <strong>{{ facturaDetails.totalPrice }}</strong>
                      </p>
                    </div>
                    <!-- Columna derecha: Precios -->
                    <div class="col-12 col-md-6 text-md-end">
                      <div class="col-12">
                        <button
                          class="btn"
                          @click="cancelPayment"
                          style="
                            background-color: #1e141a;
                            color: white;
                            text-transform: uppercase;
                          "
                        >
                          Cancelar reserva
                        </button>
                      </div>
                    </div>
                  </div>

                  <hr style="color: #cac2c8" />

                  <!-- Fila 2: Datos de pago -->
                  <div class="row">
                    <div class="col-12 col-md-6 mb-2 d-flex flex-column">
                      <div>
                        <span class="top">ID de pago:</span>
                        <span class="sub">{{ facturaDetails.paymentId }}</span>
                      </div>
                      <div>
                        <span class="top">No. de Factura :</span>
                        <span class="sub"> {{ facturaDetails.swiftCode }}</span>

                        <strong></strong>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                      <div
                        class="d-flex flex-column align-items-center customdate"
                      >
                        <span class="top">Fecha de creación:</span>
                        <span class="sub">{{
                          facturaDetails.creationDate
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <hr style="color: #cac2c8" />

                  <!-- Fila 3: Datos de dirección -->
                  <div class="row">
                    <div class="col-12 col-md-4 mb-2 d-flex flex-column">
                      <div class="d-flex flex-column mb-2">
                        <span class="top">Provincia:</span>
                        <span class="sub"> {{ facturaDetails.province }}</span>
                      </div>
                      <div class="d-flex flex-column mb-2">
                        <span class="top">Cliente:</span>
                        <span class="sub">
                          {{ facturaDetails.clientName }}</span
                        >
                      </div>
                    </div>
                    <div class="col-12 col-md-4 mb-2 d-flex flex-column">
                      <div class="d-flex flex-column mb-2">
                        <span class="top">Municipio:</span>
                        <span class="sub">
                          {{ facturaDetails.municipality }}</span
                        >
                      </div>
                      <div class="d-flex flex-column mb-2">
                        <span class="top">Teléfono:</span>
                        <span class="sub">{{ facturaDetails.phone }}</span>
                      </div>
                    </div>
                    <div class="col-12 col-md-4 mb-2 d-flex flex-column">
                      <span class="top">Dirección:</span>
                      <span class="sub">{{ facturaDetails.address }}</span>
                    </div>
                  </div>

                  <hr style="color: #cac2c8" />

                  <!-- Fila 4: Datos de cliente -->
                  <div class="row">
                    <div class="col-12 col-md-6 mb-2">
                      <div class="d-flex flex-column">
                        <span class="top">TPV:</span>
                        <span class="sub">{{ facturaDetails.tpv }}</span>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                      <div class="d-flex flex-column">
                        <span class="top">Correo electrónico:</span>
                        <span class="sub"> {{ facturaDetails.email }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <!-- Sección Detalles del proveedor -->
            <div class="tab-slide bg-white">
              <div class="card shadow-sm w-100" style="max-width: 600px">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 col-md-6 mb-2">
                      <div class="d-flex flex-column">
                        <span class="top">Negocio:</span>
                        <span class="sub">Finauto International Ltd.</span>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                      <div class="d-flex flex-column">
                        <span class="top">Correo electrónico:</span>
                        <span class="sub">xxxx1234@gmail.com</span>
                      </div>
                    </div>
                  </div>
                  <hr style="color: #cac2c8" />
                  <div class="row">
                    <div class="col-12 col-md-6 mb-2">
                      <div class="d-flex flex-column">
                        <span class="top">Dirección</span>
                        <span class="sub">---------------------</span>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                      <div class="d-flex flex-column">
                        <span class="top">Teléfono</span>
                        <span class="sub"> +53 122356</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const productos = ref([
    {
      img: "/public/imageCar.png",
      name: "Kia Sportage",
      price: "11.00",
      numberF: "SENVITT1XXX",
      date: "04 /06/ 2023",
      status: "Procesando pago",
      amount: 2,
    },
    {
      img: "/public/imageCar.png",
      name: "Kia Sportage",
      price: "11.00",
      numberF: "SENVITT1XXX",
      date: "04 /06/ 2023",
      status: "Pago expirado",
      amount: 2,
    },
    {
      img: "/public/imageCar.png",
      name: "Kia Sportage",
      price: "11.00",
      numberF: "SENVITT1XXX",
      date: "04 /06/ 2023",
      status: "Confirmado",
      amount: 2,
    },
    {
      img: "/public/imageCar.png",
      name: "Kia Sportage",
      price: "11.00",
      numberF: "SENVITT1XXX",
      date: "04 /06/ 2023",
      status: "Recibido",
      amount: 2,
    },
  ]);
  const currentTab = ref(0);
  const facturaDetails = ref({
    status: "Procesando pago",
    shippingPrice: "0",
    totalPrice: "22.00",
    paymentId: "ID-ABC123",
    swiftCode: "SENVTTXXX",
    creationDate: "04/06/2023",
    province: "La Habana",
    municipality: "10 de Octubre",
    address: "Calle Porvenir 282",
    clientName: "Clemencia Utset",
    phone: "+53 51751075",
    tpv: "transfermovil",
    email: "clemenutset@gmail.com",
  });
  const productSelect = ref(null);
  const showDetail = (indexProduct) => {
    const producto = productos.value.find((_, index) => index === indexProduct);
    productSelect.value = producto;
  };
</script>

<style scoped>
  @media (max-width: 425px) {
    .logoF {
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    .customrow {
      text-align: center;
    }
    .custompad {
      padding-bottom: 5px;
    }
  }
  @media (max-width: 768px) {
    .customdate {
      align-items: start !important;
    }
  }

  .customMC {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
  }
  .customBTN {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    letter-spacing: 0.175px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .customP {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.53px;
  }

  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .search-bar input {
    flex: 1;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  .search-bar button {
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tab-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
  }

  .tab-slides {
    display: flex;
    width: 300%;
    transition: transform 0.5s ease;
  }

  .tab-slide {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
  .nav-item {
    width: auto !important;
  }
  #myTab {
    display: flex;
    flex-direction: row;
  }
  .product:hover {
    cursor: pointer;
    transform: scale(1.05);
    /* transition: 0.2s; */
  }
  .product {
    transition: transform 0.3s ease;
  }

  .name {
    overflow: hidden;
    color: var(--gray-1, #1e141a);
    text-overflow: ellipsis;
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.024px;
  }
  .price {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.024px;
  }
  .number {
    overflow: hidden;
    color: var(--gray-1, #1e141a);
    text-overflow: ellipsis;
    font-family: Quicksand;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
    letter-spacing: 0.048px;
    text-transform: uppercase;
  }
  .date {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.085px;
  }
  .status {
    color: var(--gray-1, #1e141a);
    text-align: center;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.085px;
  }
  .nav-link.active {
    color: #1e141a !important;
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.53px;
  }
  .nav-link {
    color: rgba(30, 20, 26, 0.6);
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: 0.53px;
  }

  .nav-link:hover {
    cursor: pointer;
  }

  /* Detalles */
  .nameDetail {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.026px;
    text-transform: uppercase;
  }
  .precioTotalDetail {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.026px;
  }
  .statusDetail {
    color: var(--gray-1, #1e141a);
    text-align: center;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.085px;
    text-transform: uppercase;
  }
  strong {
    font-weight: revert-layer;
    color: #1e141a;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.451px;
  }

  .top {
    color: #1e141a;
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.451px;
  }

  .sub {
    color: var(--gray-1, #1e141a);
    font-family: Quicksand;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 25.5px */
    letter-spacing: 0.085px;
  }
</style>
