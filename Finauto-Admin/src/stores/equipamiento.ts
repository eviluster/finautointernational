import { defineStore } from "pinia";
import api from "@/services/api";

interface IEquipamiento {
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

export const useEquipamientoStore = defineStore("equipamientos", {
  state: () => ({
    equipamientos: [] as IEquipamiento[],
  }),
  actions: {
    async fetchEquipamientos() {
      try {
        const { data } = await api.get("/equipo-garage/all");
        await console.log(data);
        if (data.isSuccess) {
          this.equipamientos = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las equipamientos:", error);
      }
    },

    async addEquipamiento(equipamiento: IEquipamiento) {
      const payload = {
        ...equipamiento,
      };
      console.log("Equipamiento a agregar", payload);
      try {
        const { data } = await api.post("/equipo-garage", payload);
        console.log("Equipamiento agregado", data);
        await this.fetchEquipamientos();
        return data;
      } catch (error) {
        console.error("Error al crear la equipamiento:", error);
        throw error;
      }
    },

    async updateEquipamiento(
      updatedEquipamientoID: string,
      equipamiento: IEquipamiento,
    ) {
      const payload = {
        id: updatedEquipamientoID,
        ...equipamiento,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/equipo-garage", payload);
        const index = this.equipamientos.findIndex(
          (item: any) => item.id === updatedEquipamientoID,
        );
        if (index !== -1) {
          this.equipamientos[index] = data.data;
        }
        await this.fetchEquipamientos();
        return data;
      } catch (error) {
        console.error("Error al actualizar la equipamiento:", error);
        throw error;
      }
    },

    async deleteEquipamiento(id: string) {
      try {
        const { data } = await api.delete("/equipo-garage", { data: { id } });
        await this.fetchEquipamientos();
        return data;
      } catch (error) {
        console.error("Error al eliminar la equipamiento:", error);
        throw error;
      }
    },
  },
});
