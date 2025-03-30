import { defineStore } from "pinia";
interface ITarjeta {
  nombre: string;
  metodo: string;
  codigo: string;
  descripcion: string;
  image: string;
}

export const useTarjetaStore = defineStore("tarjetas", {
  state: () => ({}),
  actions: {
    updateTarjeta(updatedTarjetaID: string) {
      //update
    },
    addTarjeta(tarjeta: ITarjeta) {
      // create
    },
  },
});
