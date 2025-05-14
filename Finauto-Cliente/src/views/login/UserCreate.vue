<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-account-multiple-plus"></v-icon> &nbsp; Gestión de
      Usuarios

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>

    <!-- Botón flotante -->
    <v-btn
      color="primary"
      fab
      dark
      fixed
      bottom
      right
      class="float-btn"
      @click="showDialog = true"
    >
      <v-icon>mdi-account-plus</v-icon> Nuevo
    </v-btn>

    <UserCreateModal
      v-model="showDialog"
      :user="editingUser"
      @submit="saveUser"
      @update:modelValue="
        (val) => {
          if (!val) editingUser = null;
        }
      "
    />

    <v-data-table
      v-model:search="search"
      :items="users"
      :headers="[
        { title: 'N°', key: 'consecutivo' },
        { title: 'Nombre y Apellidos', key: 'name' },
        { title: 'Usuario', key: 'username' },
        { title: 'Correo', key: 'email' },
        { title: 'Tienda', key: 'shop.name' },
        { title: 'Rol', key: 'role.name' },
        { title: 'Estado', key: 'isActive' },
        { title: 'Acciones', key: 'actions', sortable: false },
      ]"
    >
      <template v-slot:item.consecutivo="{ index }">
        {{ index + 1 }}
      </template>
      <template v-slot:item.isActive="{ item }">
        <v-chip :color="item.isActive ? 'green' : 'red'" dark>
          {{ item.isActive ? "Activo" : "Inactivo" }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip text="Editar usuario" location="top">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" @click="editUser(item)" icon variant="text">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Eliminar usuario" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              @click="deleteUser(item)"
              icon
              variant="text"
              color="error"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
  import { ref, onMounted, inject } from "vue";
  import UserCreateModal from "@/views/login/UserCreateModal.vue";
  import { useCookies } from "vue3-cookies";
  import { da } from "vuetify/locale";
  import { useAuth } from "@/composables/useAuth";

  const axios = inject("axios");
  const snackbar = inject("snackbar");
  const search = ref("");
  const users = ref([]);
  const showDialog = ref(false);
  const editingUser = ref(null);
  const { cookies } = useCookies();
  const { isTokenExpired } = useAuth();

  const passwordRules = [
    (v) => !!v || "Contraseña requerida",
    (v) => (v && v.length >= 8) || "Mínimo 8 caracteres",
    (v) => /[A-Z]/.test(v) || "Al menos una mayúscula",
    (v) => /[0-9]/.test(v) || "Al menos un número",
  ];

  const loadUsers = async () => {
    try {
      //llamado al is token expired
      await isTokenExpired();

      const response = await axios.get("/users/all");
      users.value = response.data.data;
      //console.log('users', users.value)
    } catch (error) {
      console.error("Error cargando usuarios:", error);
      snackbar.show({
        color: "error",
        message: "Error al cargar usuarios",
      });
    }
  };

  const saveUser = async ({ userData }) => {
    try {
      const method = editingUser.value ? "put" : "post";
      const url = editingUser.value ? "/users/edit" : "/ ";

      // const config = {
      //   headers: {
      //     'Authorization': `Bearer ${cookies.get('authToken')}`,
      //     'Content-Type': 'application/json'
      //   }
      // };

      await isTokenExpired();

      const dataSend = {
        ...userData,
      };
      console.log("dataSend", dataSend);

      const data = await axios[method](url, dataSend);
      console.log("data", data);

      if (data.data.isSuccess) {
        snackbar.show({
          color: "success",
          message: `Usuario ${
            editingUser.value ? "actualizado" : "creado"
          } correctamente`,
        });
      } else {
        snackbar.show({
          color: "error",
          message: data.data.errorMessage || "Error al procesar la solicitud",
        });
      }

      await loadUsers();
      showDialog.value = false;
      editingUser.value = null;
    } catch (error) {
      console.error("Error guardando usuario:", error);
      snackbar.show({
        color: "error",
        message: error.response?.data?.message || "Error al guardar usuario",
      });
    }
  };

  const editUser = (user) => {
    editingUser.value = {
      ...user,
      username: user.username,
      password: "",
    };
    console.log("Editing user", editingUser.value);
    showDialog.value = true;
  };

  const deleteUser = async (user) => {
    if (!confirm("¿Estás seguro de eliminar este usuario?")) return;
    //console.log('user',user)
    //console.log('userId',user.id)
    //console.log('user userId',user.user.id)
    try {
      const DataSend = {
        id: user.id,
      };
      await isTokenExpired();
      await axios.delete("/users/delete", DataSend);

      await loadUsers();
      snackbar.show({
        color: "success",
        message: "Usuario eliminado correctamente",
      });
    } catch (error) {
      console.error("Error eliminando usuario:", error);
      snackbar.show({
        color: "error",
        message: error.response?.data?.message || "Error al eliminar usuario",
      });
    }
  };

  onMounted(() => {
    loadUsers();
  });
</script>

<style scoped>
  .float-btn {
    position: fixed !important;
    right: 20px !important;
    bottom: 20px !important;
    z-index: 999;
  }
</style>
