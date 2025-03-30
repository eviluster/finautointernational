import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import './assets/styles/index.css'  // Tu archivo CSS global
import 'bootstrap/dist/css/bootstrap.css'  // Importar CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Importar JS de Bootstrap
import router from './router'
import store from './store/store.js'

const app = createApp(App) // Crear la instancia de la aplicación
app.use(router) // Usar el router
app.use(store); // Usar el store en la aplicación
app.mount('#app') // Montar la aplicación
