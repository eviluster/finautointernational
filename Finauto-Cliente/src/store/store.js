import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    cart: [],
    isRegistered: true,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addToCart(state, product) {
      if (!state.cart.find((item) => item.id === product.id)) {
        state.cart.push(product);
      }
    },
    removeFromCar(state, productId) {
      state.cart = state.cart.filter(
        (product) => product.card.id !== productId
      );
    },
    increaseProductQuantity(state, productId) {
      const item = state.cart.find((product) => product.id === productId);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
    decreaseProductQuantity(state, productId) {
      const item = state.cart.find((product) => product.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    remove_Product_From_Cart(state, productId) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    ADD_TO_CART(state, { card, quantity }) {
      state.cart.push({ card, quantity });
    },
    UPDATE_CART_ITEM_QUANTITY(state, { cardId, quantity }) {
      const item = state.cart.find((item) => item.card.id === cardId);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    addToCartAsync({ commit }, { card, quantity }) {
      commit("ADD_TO_CART", { card, quantity });
    },
    updateCartItemQuantity({ commit }, { cardId, quantity }) {
      commit("UPDATE_CART_ITEM_QUANTITY", { cardId, quantity });
    },
    removeProduct({ commit }, productId) {
      commit("removeFromCar", productId);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    cartItems(state) {
      return state.cart;
    },
    getRegistrationStatus(state) {
      return state.isRegistrated;
    },
  },
});

export default store;
