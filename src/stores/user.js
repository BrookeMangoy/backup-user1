// src/stores/user.js
import { defineStore } from 'pinia';

/**
 * Una tienda de usuario básica que guarda el estado en localStorage.
 */
export const useUserStore = defineStore('user', {
  
  // El 'state' se inicializa desde localStorage para persistir la sesión
  state: () => ({
    token: localStorage.getItem('access_token') || null,
    isDarkMode: localStorage.getItem('theme') === 'dark',
    user: JSON.parse(localStorage.getItem('user')) || {
      id: null,
      fullName: '',
      email: '',
      profilePicture: null, // Usamos null como valor por defecto seguro
      role: 'user',
    },
    loading: false,
    error: null,
  }),

  // 'getters' son como propiedades computadas para tu tienda
  getters: {
    /**
     * Comprueba si el usuario está autenticado.
     */
    isLoggedIn: (state) => !!state.token && !!state.user && !!state.user.id,
    
    /**
     * Comprueba si el usuario es administrador.
     */
    isAdmin: (state) => state.user && state.user.role === 'admin',

    /**
     * Devuelve el nombre del usuario o un string vacío.
     */
    userFirstName: (state) => {
      if (!state.user?.fullName) return '';
      return state.user.fullName.split(' ')[0];
    },
  },

  // 'actions' son los métodos que modifican el 'state'
  actions: {
    /**
     * Establece el token de autenticación en el estado y localStorage.
     * Esto es necesario para que axios.js lo pueda usar.
     */
    setToken(newToken) {
      this.token = newToken;
      if (newToken) {
        localStorage.setItem('access_token', newToken);
      } else {
        localStorage.removeItem('access_token');
      }
    },

    /**
     * Establece los datos del usuario en el estado y localStorage.
     */
    setUser(newUserData) {
      if (newUserData) {
        this.user = { ...this.user, ...newUserData }; // Simple merge
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        // Si no hay datos, limpia el usuario
        this.clearUser();
      }
    },

    /**
     * Limpia la sesión del usuario.
     * Esta acción es llamada por el interceptor de axios.js en un error 401.
     */
    clearUser() {
      this.token = null;
      this.user = {
        id: null,
        fullName: '',
        email: '',
        profilePicture: null,
        role: 'user',
      };
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
    },

    /**
     * Cambia entre modo claro y oscuro.
     */
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    },
  },
});