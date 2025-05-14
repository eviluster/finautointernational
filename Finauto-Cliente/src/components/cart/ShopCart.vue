<template>
  <div class="container my-4">
    <div
      class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row"
    >
      <div class="d-flex flex-column align-items-md-end px-0">
        <!--begin::Logo-->
        <router-link to="/" class="mb-5">
          <img
            src="/images/Logo finauto 2022.png"
            alt="Logo"
            class="logoimage"
          />
        </router-link>
      </div>
      <h1 class="display-4 font-weight-boldest mb-10">Cart</h1>
    </div>
    <div class="card mb-4">
      <!-- Encabezado de la tarjeta -->
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h3 class="fw-bold fs-3 text-dark m-0">My Shopping Cart</h3>
        <router-link to="/product" class="btn btn-primary"
          >Continue Shopping</router-link
        >
      </div>

      <!-- Contenido principal de la tarjeta -->
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover align-middle">
            <thead class="table-light">
              <tr>
                <th>Product</th>
                <th class="text-center">Qty</th>
                <th class="text-end">Price</th>
                <th class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- Fila por cada item del carrito -->
              <tr v-for="item in cart" :key="item.id">
                <td class="d-flex align-items-center">
                  <!-- Imagen del producto -->
                  <div
                    class="me-3 imagen"
                    style="
                      width: 60px;
                      height: 60px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{ backgroundImage: `url(${item.card.imagen[0]})` }"
                  ></div>
                  <!-- Nombre del producto -->
                  <span class="fw-bold text-dark nombreproducto">{{
                    item.card.nombre
                  }}</span>
                </td>

                <!-- Cantidad con botones +/- -->
                <td class="text-center">
                  <div class="botones">
                    <button
                      class="btn btn-sm btn-outline-success me-2"
                      @click="updateQuantity(item, item.quantity - 1)"
                    >
                      <i class="bi bi-dash"></i>
                    </button>

                    <span class="fw-bold">{{ item.quantity }}</span>
                    <button
                      class="btn btn-sm btn-outline-success ms-2"
                      @click="updateQuantity(item, item.quantity + 1)"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </td>

                <!-- Precio total por producto -->
                <td class="text-end fw-bold fs-5">
                  ${{ (item.card.precio * item.quantity).toFixed(2) }}
                </td>

                <!-- Acción para remover producto -->
                <td class="text-end">
                  <button
                    class="btn btn-danger btn-sm"
                    @click="removeCartItem(item)"
                  >
                    Remove
                  </button>
                </td>
              </tr>

              <!-- Subtotal -->
              <tr>
                <td colspan="2"></td>
                <td class="fw-bold fs-5 text-end">Subtotal</td>
                <td class="fw-bold fs-5 text-end">${{ totalPrice }}</td>
              </tr>

              <!-- Información de impuestos/envío -->
              <tr>
                <td colspan="4" class="border-0 text-muted text-end pt-0">
                  Excludes Delivery. GST Included
                </td>
              </tr>

              <!-- Botón para Checkout -->
              <tr>
                <td colspan="2" class="border-0 pt-3"></td>
                <td colspan="2" class="border-0 text-end pt-3">
                  <router-link
                    v-if="cart.length > 0"
                    to="/checkout"
                    class="btn btn-success"
                    @click="checkoutCart()"
                  >
                    Proceed to Checkout
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const cart = ref(store.state.cart);

  // Actualizar cantidad del producto
  const updateQuantity = (item, quantity) => {
    if (quantity < 1) return;
    store.commit("UPDATE_CART_ITEM_QUANTITY", {
      cardId: item.card.id,
      quantity,
    });
  };

  // Eliminar producto del carrito
  const removeCartItem = (item) => {
    store.commit("removeFromCar", item.card.id);
    cart.value = store.state.cart;
  };

  // Acción de checkout (solo ejemplo de consola)
  const checkoutCart = () => {
    console.log("Procediendo al pago...");
  };

  // Cálculo del total
  const totalPrice = computed(() => {
    return cart.value
      .reduce((total, item) => total + item.card.precio * item.quantity, 0)
      .toFixed(2);
  });
</script>
<style scoped>
  @media (max-width: 505px) {
    .imagen {
      display: none;
    }
    .logoimage {
      width: 250px;
      margin: 0 33px;
    }
  }

  @media (max-width: 400px) {
    .fw-bold.text-dark.nombreproducto {
      height: 100px;
      display: flex;
      align-items: center;
    }
    .botones {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
    }
  }
</style>
