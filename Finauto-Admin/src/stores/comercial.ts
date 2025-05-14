import { defineStore } from "pinia";
import api from "@/services/api";

interface IComercial {
  id: string;
  name: {
    es: string;
    en: string;
  };
  correo: string;
  apellido: string;
  telefono: string;
}

export const useComercialStore = defineStore("comercials", {
  state: () => ({
    comercials: [] as IComercial[],
  }),
  actions: {
    async fetchComercials() {
      try {
        const { data } = await api.get("/comercial/all");
        if (data.isSuccess) {
          this.comercials = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener los comercials:", error);
      }
    },

    async addComercial(comercial: Omit<IComercial, "id">) {
      const payload = {
        ...comercial,
      };
      console.log(payload);
      try {
        const { data } = await api.post("/comercial", payload);
        console.log(data);
        await this.fetchComercials();
        return data;
      } catch (error) {
        console.error("Error al crear el comercial:", error);
        throw error;
      }
    },

    async updateComercial(comercial: IComercial) {
      const payload = {
        ...comercial,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/comercial", payload);
        const index = this.comercials.findIndex(
          (item: IComercial) => item.id === comercial.id,
        );
        if (index !== -1) {
          this.comercials[index] = data.data;
        }
        await this.fetchComercials();
        return data;
      } catch (error) {
        console.error("Error al actualizar el comercial:", error);
        throw error;
      }
    },

    async deleteComercial(id: string) {
      try {
        const { data } = await api.delete("/comercial", { data: { id } });
        await this.fetchComercials();
        return data;
      } catch (error) {
        console.error("Error al eliminar el comercial:", error);
        throw error;
      }
    },
  },
});
