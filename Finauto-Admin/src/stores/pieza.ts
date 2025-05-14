import { defineStore } from "pinia";
import api from "@/services/api";

interface IPieza {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  precioBase: number;
  galery: Array<string>;
}

export const usePiezaStore = defineStore("piezas", {
  state: () => ({
    piezas: [] as IPieza[],
  }),
  actions: {
    async fetchPiezas() {
      try {
        const { data } = await api.get("/pieza-accesorio/all");
        await console.log(data);
        if (data.isSuccess) {
          this.piezas = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las piezas:", error);
      }
    },

    async addPieza(pieza: IPieza) {
      const payload = {
        ...pieza,
      };
      console.log("Pieza a agregar", payload);
      try {
        const { data } = await api.post("/pieza-accesorio", payload);
        console.log("Pieza agregado", data);
        await this.fetchPiezas();
        return data;
      } catch (error) {
        console.error("Error al crear la pieza:", error);
        throw error;
      }
    },

    async updatePieza(updatedPiezaID: string, pieza: IPieza) {
      const payload = {
        id: updatedPiezaID,
        ...pieza,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/pieza-accesorio", payload);
        const index = this.piezas.findIndex(
          (item: any) => item.id === updatedPiezaID,
        );
        if (index !== -1) {
          this.piezas[index] = data.data;
        }
        await this.fetchPiezas();
        return data;
      } catch (error) {
        console.error("Error al actualizar la pieza:", error);
        throw error;
      }
    },

    async deletePieza(id: string) {
      try {
        const { data } = await api.delete("/pieza-accesorio", { data: { id } });
        await this.fetchPiezas();
        return data;
      } catch (error) {
        console.error("Error al eliminar la pieza:", error);
        throw error;
      }
    },
  },
});
