import { defineStore } from "pinia";
import importadoras, { type IImportadora } from "@/core/data/importadoras";

export const useImportadoraStore = defineStore("importadoras", {
  state: () => ({
    importadoras: importadoras,
  }),
  actions: {
    updateImportadora(updatedImportadora: IImportadora) {
      const index = this.importadoras.findIndex(
        (s) => s.id === updatedImportadora.id,
      );
      if (index !== -1) {
        // Actualiza el importadora existente
        this.importadoras[index] = updatedImportadora;
      } else {
        console.warn("Importadora no encontrado para actualizar.");
      }
    },
    addImportadora(importadora: IImportadora) {
      importadora.id = Math.floor(Math.random() * 99999) + 1;
      this.importadoras.push(importadora);
      console.log("Importadoras en el store:", this.importadoras);
    },
  },
  getters: {
    getImportadora: (state) => state.importadoras,
  },
});
