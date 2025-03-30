import { defineStore } from "pinia";
import customers, { type ICustomer } from "@/core/data/customers"; 

export const useCustomerStore = defineStore("clientes", {
  state: () => ({
    clientes: customers, 
  }),
  actions: {
    updateCustomer(updatedCustomer: ICustomer) {
      const index = this.clientes.findIndex(s => s.id === updatedCustomer.id);
      if (index !== -1) {
        // Actualiza el servicio existente
        this.clientes[index] = updatedCustomer;
      } else {
        console.warn('Servicio no encontrado para actualizar.');
      }
    },
    addCustomer(customer: ICustomer) {
        customer.id = Math.floor(Math.random() * 99999) + 1; 
      this.clientes.push(customer);
      console.log("Servicios en el store:", this.clientes); 
    },
  },
  getters: {
    getCustomer: (state) => state.clientes,
  },
});