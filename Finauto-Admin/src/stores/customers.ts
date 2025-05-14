import { defineStore } from "pinia";
import api from "@/services/api";

interface ICustomer {
  id: string;
  name: {
    es: string;
    en: string;
  };
  email: string;
  addessLineOne: string;
  addressLineTwo?: string;
  cityTown: string;
  postalCode: string;
}

export const useCustomerStore = defineStore("customers", {
  state: () => ({
    customers: [] as ICustomer[],
  }),
  actions: {
    async fetchCustomers() {
      try {
        const { data } = await api.get("/customer/all");
        if (data.isSuccess) {
          this.customers = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener los customers:", error);
      }
    },

    async addCustomer(customer: Omit<ICustomer, "id">) {
      const payload = {
        ...customer,
      };
      console.log(payload);
      try {
        const { data } = await api.post("/customer", payload);
        console.log(data);
        await this.fetchCustomers();
        return data;
      } catch (error) {
        console.error("Error al crear el customer:", error);
        throw error;
      }
    },

    async updateCustomer(customer: ICustomer) {
      const payload = {
        ...customer,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/customer", payload);
        const index = this.customers.findIndex(
          (item: ICustomer) => item.id === customer.id,
        );
        if (index !== -1) {
          this.customers[index] = data.data;
        }
        await this.fetchCustomers();
        return data;
      } catch (error) {
        console.error("Error al actualizar el customer:", error);
        throw error;
      }
    },

    async deleteCustomer(id: string) {
      try {
        const { data } = await api.delete("/customer", { data: { id } });
        await this.fetchCustomers();
        return data;
      } catch (error) {
        console.error("Error al eliminar el customer:", error);
        throw error;
      }
    },
  },
});
