<template>
  <v-dialog :model-value="modelValue" max-width="600" @update:modelValue="val => emit('update:modelValue', val)">
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon icon="mdi-account" class="mr-2"></v-icon>
        {{ editingUser ? 'Editar Usuario' : 'Nuevo Usuario' }}
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="emit('submit', { userData: form, userId: editingUser ? props.user.id : null })">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="form.name" label="Nombre y Apellidos" required :rules="[v => !!v || 'Nombre requerido']"></v-text-field>
            </v-col>

            

            <v-col cols="12" md="6">
              <v-text-field v-model="form.username" label="Nombre de usuario" required 
                :rules="[v => !!v || 'Usuario requerido', v => (v && v.length >= 4) || 'Mínimo 4 caracteres']"></v-text-field>
            </v-col>

            <!-- <v-col cols="12">
              <v-text-field v-model="form.email" label="Correo electrónico" type="email" required
                :rules="[v => !!v || 'Email requerido', v => /.+@.+\..+/.test(v) || 'Email inválido']"></v-text-field>
            </v-col> -->

            <v-col cols="12" md="6">
              <v-text-field v-model="form.password" label="Contraseña" :type="showPassword ? 'text' : 'password'"
                :rules="passwordRules" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="form.confirmPassword" label="Confirmar Contraseña" type="password"
                :rules="[v => v === form.password || 'Las contraseñas no coinciden']"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select 
                v-model="form.role" 
                label="Rol" 
                :items="roles" 
                item-title="name"
                item-value="id"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-select 
                v-model="form.shop" 
                label="Tienda" 
                :items="shops" 
                item-title="name"
                item-value="id"
                
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="emit('update:modelValue', false)">Cancelar</v-btn>
            <v-btn color="primary" type="submit">Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch, computed, onMounted,inject } from 'vue';
const axios = inject('axios');

const props = defineProps({
  modelValue: Boolean,
  user: Object
});

const editingUser = computed(() => !!props.user);

const emit = defineEmits(['update:modelValue', 'submit']);

const form = ref({
  name: '',  
  username: '',
  // email: '',
  password: '',
  confirmPassword: '',
  role: '',
  shop: ''
});

const showPassword = ref(false);
const passwordRules = [
  v => !!v || 'Contraseña requerida',
  v => (v && v.length >= 8) || 'Mínimo 8 caracteres',
  v => /[A-Z]/.test(v) || 'Al menos una mayúscula',
  v => /[0-9]/.test(v) || 'Al menos un número'
];

const roles = ref([]);
const shops = ref([]);

const fetchRoles = async () => {
  try {
    const response = await axios.get('/roles');
    roles.value = response.data;
    console.log('Roles', roles.value);
  } catch (error) {
    console.error('Error cargando roles:', error);
  }
};
const loadStores = async () => {
  try {
    //loadingStores.value = true;
    const response = await axios.post('/shop/all');
    shops.value = response.data.data;
    //console.log('shopesta',stores.value)
  } catch (error) {
    console.error('Error cargando tiendas:', error);
  } finally {
   // loadingStores.value = false;
  }
};

onMounted(() => {
  fetchRoles();
  loadStores();
});

watch(() => props.user, (newVal) => {
  if (newVal) {
    form.value = {
      id: newVal.id,
      name: newVal.name,
      username: newVal.username,
      // email: newVal.email,
      password: '',
      confirmPassword: '',
      role: newVal.role.id,
      shop: newVal.shop ? newVal.shop.id : ''
    };
  } else {
    form.value = {
      name: '',  
      username: '',
      // email: '',
      password: '',
      confirmPassword: '',
      role: '',
      shop: ''
    };
  }
});
</script>
