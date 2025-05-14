import { defineStore } from "pinia";
import api from "@/services/api";

interface ITipoUnidadMedida {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useTipoUnidadMedidaStore = defineStore("tipounidadmedida", {
  state: () => ({
    tipounidadmedida: [] as ITipoUnidadMedida[],
  }),
  actions: {
    async fetchTipoUnidadMedida() {
      try {
        const { data } = await api.get("/tipo-neumatico/all");
        await console.log(data);

        if (data.isSuccess) {
          this.tipounidadmedida = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener el tipo de neumatico:", error);
      }
    },

    async addTipoUnidadMedida(tipounidadmedida: ITipoUnidadMedida) {
      const payload = {
        ...tipounidadmedida,
      };

      try {
        const { data } = await api.post("/tipo-neumatico", payload);
        await this.fetchTipoUnidadMedida();
        return data;
      } catch (error) {
        console.error("Error al crear el tipo de neumatico:", error);
        throw error;
      }
    },

    async updateTipoUnidadMedida(
      updatedTipoUnidadMedidaID: string,
      tipounidadmedida: ITipoUnidadMedida,
    ) {
      const payload = {
        id: updatedTipoUnidadMedidaID,
        ...tipounidadmedida,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/tipo-neumatico", payload);
        const index = this.tipounidadmedida.findIndex(
          (item: any) => item.id === updatedTipoUnidadMedidaID,
        );

        if (index !== -1) {
          this.tipounidadmedida.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar el tipo de neumatico:", error);
        throw error;
      }
    },

    async deleteTipoUnidadMedida(id: string) {
      try {
        const { data } = await api.delete("/tipo-neumatico", { data: { id } });
        await this.fetchTipoUnidadMedida();
        return data;
      } catch (error) {
        console.error("Error al eliminar el tipo de neumatico:", error);
        throw error;
      }
    },
  },
});
