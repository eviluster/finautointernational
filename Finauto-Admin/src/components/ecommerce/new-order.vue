<template>
  <div class="container my-4">
    <div class="row g-3">
      <!-- Columna: Detalles de la Orden -->
      <!-- Columna: Datos del Cliente -->
      <div class="col-md-4">
        <div class="card bg-dark text-light">
          <div class="card-body left-side">
            <h5 class="card-title pb-5">Datos del cliente</h5>

            <!-- Nombre -->
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                v-model="clientName"
                placeholder="Ingresa el nombre"
              />
            </div>

            <!-- CI -->
            <div class="mb-3">
              <label for="ci" class="form-label">CI</label>
              <input
                type="text"
                class="form-control"
                id="ci"
                v-model="clientCI"
                placeholder="Ingresa CI o DNI"
              />
            </div>

            <!-- Teléfono -->
            <div class="mb-3">
              <label for="tel" class="form-label">Teléfono</label>
              <input
                type="text"
                class="form-control"
                id="tel"
                v-model="clientPhone"
                placeholder="Ingresa el teléfono"
              />
            </div>

            <!-- Correo -->
            <div class="mb-3">
              <label for="correo" class="form-label">Correo</label>
              <input
                type="email"
                class="form-control"
                id="correo"
                v-model="clientEmail"
                placeholder="Ingresa el correo electrónico"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Columna: Selección de productos -->
      <div class="col-md-8">
        <div class="card bg-dark text-light">
          <div class="card-body right-side">
            <h5 class="card-title pb-5">Select Products</h5>
            <!-- <h5 class="card-title">Add products to this order</h5> -->
            <!-- <p class="card-text text-white">
              Select one or more products from the list below by ticking the
              checkbox (o en tu caso, haciendo clic en el botón).
            </p> -->

            <!-- Select para elegir productos -->
            <div class="mb-3">
              <label for="productSelect" class="form-label"
                >Choose a Product</label
              >
              <select
                id="productSelect"
                class="form-select mb-2"
                
              >
                <option disabled value="">-- Select a product --</option>
                <option
                  v-for="(prod, index) in allProducts"
                  :key="index"
                  :value="prod.id"
                >
                  {{ prod.name }} (SKU: {{ prod.sku }})
                </option>
              </select>

              <button
                class="btn btn-primary"
                :disabled="!selectedProductId"
                @click="addProduct"
              >
                Add Product
              </button>
            </div>

            <p class="text-white py-3">
              Total Cost: $ {{ totalCost.toFixed(2) }}
            </p>

            <!-- Listado de productos -->
            <table class="table align-middle table-row-dashed fs-6 gy-5">
              <thead>
                <tr class="text-white">
                  <th style="width: 5%">Select</th>
                  <th style="width: 45%">Product</th>
                  <th style="width: 20%">Price</th>
                  <th style="width: 30%">QTY Remaining</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(prod, index) in orderItems" :key="index">
                  <td>
                    <input type="checkbox" v-model="prod.selected" />
                  </td>
                  <td>
                    <div class="text-white">{{ prod.name }}</div>
                    <small class="text-warning">SKU: {{ prod.sku }}</small>
                  </td>
                  <td class="text-white">$ {{ prod.price.toFixed(2) }}</td>
                  <td>
                    <!-- Mostrar si hay 'Low stock' o la cantidad disponible -->
                    <span
                      :class="{ 'text-danger': prod.qtyRemaining <= 10 }"
                      class="text-white"
                    >
                      {{
                        prod.qtyRemaining <= 10
                          ? "Low stock " + prod.qtyRemaining
                          : prod.qtyRemaining
                      }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProducts",
  data() {
    return {
      // Id de la orden (agregué un ejemplo)
      orderId: 12345,
      paymentMethod: "",
      shippingMethod: "",
      orderDate: "",

      // Productos disponibles (ejemplo)
      allProducts: [
        {
          id: 1,
          name: "Product A",
          sku: "SKU-1111",
          price: 10.0,
          qtyRemaining: 25,
        },
        {
          id: 2,
          name: "Product B",
          sku: "SKU-2222",
          price: 20.0,
          qtyRemaining: 8, // Low stock
        },
        {
          id: 3,
          name: "Product C",
          sku: "SKU-3333",
          price: 15.5,
          qtyRemaining: 50,
        },
      ],

      // ID del producto seleccionado en el <select>
      selectedProductId: "",

      // Array que contendrá los productos agregados al pedido
      orderItems: [],
    };
  },
  computed: {
    // Calcula el costo total sumando el precio de cada producto en orderItems.
    // Si en el futuro se agrega una lógica de cantidad, se multiplica el precio por la cantidad.
    totalCost() {
      return this.orderItems.reduce((acc, prod) => acc + prod.price, 0);
    },
  },
  methods: {
    addProduct() {
      // Buscar el producto seleccionado en allProducts
      const productToAdd = this.allProducts.find(
        (p) => p.id === parseInt(this.selectedProductId),
      );

      // (Opcional) Evitar duplicados. Si no quieres duplicados, se comprueba si ya está en orderItems.
      const alreadyInOrder = this.orderItems.find(
        (item) => item.id === productToAdd.id,
      );
      if (alreadyInOrder) {
        alert("This product has already been added!");
        return;
      }

      // Agregar el producto al array orderItems
      this.orderItems.push({ ...productToAdd });

      // Resetear el select
      this.selectedProductId = "";
    },
    removeItem(index) {
      this.orderItems.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.left-side {
  background-color: #15171c;
}
.card-body.right-side {
  background-color: #15171c;
}
</style>
