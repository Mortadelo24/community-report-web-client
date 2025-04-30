import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/index'
import { useBackendStore} from './stores'
import { useAuthStore } from './modules/user/stores'


import './style.css'
import App from './App.vue'
import Button from './modules/element/components/Button.vue'



const initializeApp = async () => {
    const pinia = createPinia();
    const app = createApp(App);
    app.component('Button', Button);
    // setup pinia
    app.use(pinia);
    useBackendStore().initialize();
    await useAuthStore().initialize();

    // seupt others
    app.use(router);
    app.mount('#app');
}

initializeApp();
