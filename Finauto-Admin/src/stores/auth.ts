import { ref, inject } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { useCookies } from "vue3-cookies";
import { useRouter } from "vue-router";
import api from "@/services/api";

export interface User {
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  password_confirmation?: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());
  const router = useRouter();
  const { cookies } = useCookies();

  const accessToken = cookies.get("refresh_token") as string | null;
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDNkOTIwMC03NzVkLTQwZTAtOTVkMS0yZjYzMTM0ZmFmZDQiLCJ1c2VybmFtZSI6InNlY29uZEBleGFtcGxlLmNvbSIsImlhdCI6MTc0NzIwMDkzOSwiZXhwIjoxNzQ3MjAwOTk5fQ.j4whh9OMVXYk3g8j4cvFkQlBKTN42JhAlUmCYNXrRNo";

  function setAuth(authUser) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    // JwtService.saveToken(user.value.api_token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  const isTokenExpired = async () => {
    const response = await api.post("/auth/is-token-expired", {
      token: cookies.get("refresh_token"),
    });

    if (response.data == false) {
      return false;
    } else {
      cookies.set(
        "refresh_token",
        response.data, // el nuevo token
        "1d", // expira en 1 día
        "/", // path
        "", // domain
        true, // secure
        "Strict", // sameSite
      );
      return true;
    }
  };
  // function logout() {
  //   purgeAuth();
  // }
  const login = async (credentials) => {
    try {
      console.log("run login");
      console.log(credentials);

      //  await isTokenExpired();
      const response = await api.post("/auth/signin", credentials);
      console.log("login", response.data);
      //if (response.data.isSuccess) {
      cookies.set(
        "refresh_token",
        response.data.refresh_token,
        "1d", // o bien 60*60*24
        "/", // path
        "", // domain (vacío = el actual)
        true, // secure
        "Strict", // sameSite
      );

      console.log(cookies.get("refresh_token"));

      const userData = {
        name: response.data.name,
        email: response.data.email,
      };
      cookies.set(
        "userData",
        JSON.stringify(userData),
        "1d", // o bien 60*60*24
        "/", // path
        "", // domain (vacío = el actual)
        true, // secure
        "Strict", // sameSite
      );
      console.log(cookies.get("userData"));
      isAuthenticated.value = true;

      console.log("Inicio de sesión correcto:", response.data);
    } catch (error) {
      console.error("Falló el Inicio de sesión:", error);
    } finally {
      await router.push({ path: "/" });
    }
  };

  const register = async (credentials) => {
    try {
      console.log("run");
      console.log(credentials);

      //  await isTokenExpired();
      const response = await api.post("/auth/signup-admin", credentials);
      console.log(response);

      console.log("Usuario registrado:", response.data);
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("verify_token", { api_token: JwtService.getToken() })
        .then(({ data }) => {
          setAuth(data);
        })
        .catch(({ response }) => {
          setError(response.data.errors);
          purgeAuth();
        });
    } else {
      purgeAuth();
    }
  }

  return {
    errors,
    // user,
    isAuthenticated,
    accessToken,
    login,
    // logout,
    register,
    forgotPassword,
    verifyAuth,
    isTokenExpired,
  };
});
