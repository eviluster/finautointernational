import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ServicesPages from "../views/ServicesPages.vue";
import ProductSection from "../components/ProductSection.vue";
import AboutUs from "../views/AboutUs.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import Login from "../views/login/Login.vue";
import ForgotPassword from "../views/login/ForgotPassword.vue";
import Register from "../views/login/Register.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import BlanckLayout from "../layouts/BlanckLayout.vue";
import ShopCart from "../components/cart/ShopCart.vue";
import Checkout from "../components/form/Checkout.vue";
import MisCompras from "../views/Mis-Compras.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/services",
        name: "Services",
        component: ServicesPages,
      },
      {
        path: "/product",
        name: "Products",
        component: ProductSection,
        props: (route) => ({ title: route.query.title }),
      },
      {
        path: "/about",
        name: "About",
        component: AboutUs,
      },

      // ... otras rutas que usan MainLayout
    ],
  },
  {
    path: "/",
    component: BlanckLayout,
    children: [
      {
        path: "/shop_cart",
        name: "ShopCart",
        component: ShopCart,
      },
      {
        path: "/mis-compras",
        name: "Mis-Compras",
        component: MisCompras,
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
      },

      // ... otras rutas que usan MainLayout
    ],
  },

  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/forgot-password",
        component: ForgotPassword,
      },
      {
        path: "/register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), // Utiliza el modo de historial HTML5
  routes,
});

export default router;
