import { defineStore } from "pinia";
import api from "@/services/api";

interface IMotor {
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const useMotorStore = defineStore("motor", {
  state: () => ({
    motors: [] as IMotor[],
  }),
  actions: {
    async fetchMotors() {
      try {
        const { data } = await api.get("/engines/all");
        if (data.isSuccess) {
          this.motors = [...data.data];
        }
      } catch (error) {
        console.error("Error al obtener los motores:", error);
      }
    },

    async addMotor(motor: IMotor) {
      const payload = {
        ...motor,
      };

      try {
        const { data } = await api.post("/engines", payload);
        await this.fetchMotors();
        return data;
      } catch (error) {
        console.error("Error al crear el motor:", error);
        throw error;
      }
    },

    async updateMotor(updatedMotorID: string, motor: IMotor) {
      const payload = {
        id: updatedMotorID,
        ...motor,
        rules: {
          method: "UPDATE",
          comparisonKind: "UINQUE",
          field: ["name"],
        },
      };
      console.log(payload);

      try {
        const { data } = await api.patch("/engines", payload);
        const index = this.motors.findIndex(
          (item: any) => item.id === updatedMotorID,
        );
        if (index !== -1) {
          this.motors[index] = data.data;
        }
        await this.fetchMotors();
        return data;
      } catch (error) {
        console.error("Error al actualizar el motor:", error);
        throw error;
      }
    },

    async deleteMotor(id: string) {
      try {
        const { data } = await api.delete("/engines", { data: { id } });
        await this.fetchMotors();
        return data;
      } catch (error) {
        console.error("Error al eliminar el motor:", error);
        throw error;
      }
    },
  },
});
