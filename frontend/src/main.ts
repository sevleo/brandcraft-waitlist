import { createApp } from "vue";
import App from "./App.vue";
import router from "./index";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'
import Aura from "@primevue/themes/aura"


createApp(App).use(router).use(PrimeVue, {
    theme: {
      preset: Aura
    }
  }).use(ToastService).mount("#app");
