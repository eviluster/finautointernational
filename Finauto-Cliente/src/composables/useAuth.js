import { useCookies } from 'vue3-cookies';
import { inject } from 'vue';

export function useAuth() {
  const axios = inject('axios');
  const { cookies } = useCookies();

  const isTokenExpired = async () => {
    const response = await axios.post('/auth/is-token-expired', { 
      token: cookies.get('refresh_token') 
    });
    
    if (response.data == false) {
      return false;
    } else {
      cookies.set('refresh_token', response.data, {
        secure: true,
        sameSite: 'Strict',
        httpOnly: true,
        maxAge: 60 * 60 * 24 // 1 día
      });
      return true;
    }
  };

  return {
    isTokenExpired
  };
} 