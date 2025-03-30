import { defineStore } from "pinia";
import servicios, { type IServicio } from "@/core/data/servicios"; 

export const useServiceStore = defineStore("services", {
  state: () => ({
    services: servicios, 
  }),
  actions: {
    updateService(updatedService: IServicio) {
      const index = this.services.findIndex(s => s.id === updatedService.id);
      if (index !== -1) {
        // Actualiza el servicio existente
        this.services[index] = updatedService;
      } else {
        console.warn('Servicio no encontrado para actualizar.');
      }
    },
    addService(service: IServicio) {
      service.id = Math.floor(Math.random() * 99999) + 1; 
      this.services.push(service);
      console.log("Servicios en el store:", this.services); 
    },
  },
  getters: {
    getService: (state) => state.services,
  },
});