import { defineStore } from 'pinia'
import requist from '../composables/requist'
import { useRouter } from 'nuxt/app';
import { useToast } from 'vue-toast-notification';

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      loader: false,
    
    }
  },

  actions: {
    turnLoaderOn() {
      this.loader = true;
    },
    turnLoaderOff() {
      this.loader = false;
    },
   
    notify({ msg, type }) {
      if (process.client) {
        const $toast = useToast();
        $toast.open({
          message: msg,
          type: type,
          duration: 5000,
          pauseOnHover: true,
          position: 'bottom-left'
        });
      }
    }
  },
})