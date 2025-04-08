import { defineStore } from "pinia";
import api from "@/services/api";

interface IVehiculo {
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

export const useVehiculoStore = defineStore("vehiculos", {
  state: () => ({
    vehiculos: [] as IVehiculo[],
  }),
  actions: {
    async fetchVehiculos() {
      try {
        const { data } = await api.get("/vehiculo/all");
        await console.log(data);
        if (data.isSuccess) {
          this.vehiculos = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener las vehiculos:", error);
      }
    },

    async addVehiculo(vehiculo: IVehiculo) {
      const payload = {
        ...vehiculo,
      };
      console.log("Vehiculo a agregar", payload);
      try {
        const { data } = await api.post("/vehiculo", payload);
        console.log("Vehiculo agregado", data);
        await this.fetchVehiculos();
        return data;
      } catch (error) {
        console.error("Error al crear la vehiculo:", error);
        throw error;
      }
    },

    async updateVehiculo(updatedVehiculoID: string, vehiculo: IVehiculo) {
      const payload = {
        id: updatedVehiculoID,
        ...vehiculo,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/vehiculo", payload);
        const index = this.vehiculos.findIndex(
          (item: any) => item.id === updatedVehiculoID,
        );
        if (index !== -1) {
          this.vehiculos[index] = data.data;
        }
        await this.fetchVehiculos();
        return data;
      } catch (error) {
        console.error("Error al actualizar la vehiculo:", error);
        throw error;
      }
    },

    async deleteVehiculo(id: string) {
      try {
        const { data } = await api.delete("/vehiculo", { data: { id } });
        await this.fetchVehiculos();
        return data;
      } catch (error) {
        console.error("Error al eliminar la vehiculo:", error);
        throw error;
      }
    },
  },
});
