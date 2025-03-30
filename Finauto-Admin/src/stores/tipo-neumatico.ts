import { defineStore } from "pinia";
import api from "@/services/api";

interface ITipoNeumatico {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useTipoNeumaticoStore = defineStore("tiponeumatico", {
  state: () => ({
    tiponeumatico: [] as ITipoNeumatico[],
  }),
  actions: {
    async fetchTipoNeumatico() {
      try {
        const { data } = await api.get("/tipo-neumatico/all");
        await console.log(data);

        if (data.isSuccess) {
          this.tiponeumatico = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener el tipo de neumatico:", error);
      }
    },

    async addTipoNeumatico(tiponeumatico: ITipoNeumatico) {
      const payload = {
        ...tiponeumatico,
      };

      try {
        const { data } = await api.post("/tipo-neumatico", payload);
        await this.fetchTipoNeumatico();
        return data;
      } catch (error) {
        console.error("Error al crear el tipo de neumatico:", error);
        throw error;
      }
    },

    async updateTipoNeumatico(
      updatedTipoNeumaticoID: string,
      tiponeumatico: ITipoNeumatico,
    ) {
      const payload = {
        id: updatedTipoNeumaticoID,
        ...tiponeumatico,
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/tipo-neumatico", payload);
        const index = this.tiponeumatico.findIndex(
          (item: any) => item.id === updatedTipoNeumaticoID,
        );

        if (index !== -1) {
          this.tiponeumatico.splice(index, 1, data.data);
        }
        return data;
      } catch (error) {
        console.error("Error al actualizar el tipo de neumatico:", error);
        throw error;
      }
    },

    async deleteTipoNeumatico(id: string) {
      try {
        const { data } = await api.delete("/tipo-neumatico", { data: { id } });
        await this.fetchTipoNeumatico();
        return data;
      } catch (error) {
        console.error("Error al eliminar el tipo de neumatico:", error);
        throw error;
      }
    },
  },
});
