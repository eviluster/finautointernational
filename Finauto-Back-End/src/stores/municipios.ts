import { defineStore } from "pinia";
import api from "@/services/api";

interface IMunicipio {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useMunicipioStore = defineStore("municipios", {
  state: () => ({
    municipios: [] as IMunicipio[],
  }),
  actions: {
    async fetchMunicipios() {
      try {
        const { data } = await api.get("/municipality/all");
        if (data.isSuccess) {
          this.municipios = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las municipios:", error);
      }
    },

    async addMunicipio(municipio: IMunicipio) {
      const payload = {
        ...municipio,
      };

      try {
        const { data } = await api.post("/municipality", payload);
        await this.fetchMunicipios();
        return data;
      } catch (error) {
        console.error("Error al crear la municipio:", error);
        throw error;
      }
    },

    async updateMunicipio(updatedMunicipioID: string, municipio: IMunicipio) {
      const payload = {
        id: updatedMunicipioID,
        ...municipio,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/municipality", payload);
        const index = this.municipios.findIndex(
          (item: any) => item.id === updatedMunicipioID,
        );
        if (index !== -1) {
          this.municipios[index] = data.data;
        }
        await this.fetchMunicipios();
        return data;
      } catch (error) {
        console.error("Error al actualizar la municipio:", error);
        throw error;
      }
    },

    async deleteMunicipio(id: string) {
      try {
        const { data } = await api.delete("/municipality", { data: { id } });
        await this.fetchMunicipios();
        return data;
      } catch (error) {
        console.error("Error al eliminar la municipio:", error);
        throw error;
      }
    },
  },
});
