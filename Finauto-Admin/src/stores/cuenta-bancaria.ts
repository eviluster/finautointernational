import { defineStore } from "pinia";
import api from "@/services/api";

interface ICuentaBancaria {
  id: string;
  beneficiario: string;
  direccionBeneficiario: string;
  nombreBanco: string;
  direccionBanco: string;
  codigo: string;
  currency: "USD" | "EUR";
  numeroCuenta: string;
}

export const useCuentaStore = defineStore("cuentas", {
  state: () => ({
    cuentas: [] as ICuentaBancaria[],
  }),
  actions: {
    async fetchCuentas() {
      try {
        const { data } = await api.get("cuenta-bancaria/all");
        if (data.isSuccess) {
          this.cuentas = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las cuentas bancarias:", error);
      }
    },

    async addCuenta(cuenta: ICuentaBancaria) {
      try {
        console.log(cuenta);
        const payload = { ...cuenta };
        console.log(payload);
        const { data } = await api.post("/cuenta-bancaria", payload);
        console.log(data);
        await this.fetchCuentas();
        return data;
      } catch (error) {
        console.error("Error al crear la cuenta bancaria:", error);
        throw error;
      }
    },

    async updateCuenta(cuenta: ICuentaBancaria) {
      try {
        const payload = { ...cuenta };
        const { data } = await api.patch("/cuenta-bancaria", payload);
        const index = this.cuentas.findIndex((item) => item.id === cuenta.id);
        if (index !== -1) {
          this.cuentas.splice(index, 1, data.data);
        }
        await this.fetchCuentas();
        return data;
      } catch (error) {
        console.error("Error al actualizar la cuenta bancaria:", error);
        throw error;
      }
    },

    async deleteCuenta(id: string) {
      try {
        const { data } = await api.delete("/cuenta-bancaria", { data: { id } });
        await this.fetchCuentas();
        return data;
      } catch (error) {
        console.error("Error al eliminar la cuenta bancaria:", error);
        throw error;
      }
    },
  },
});
