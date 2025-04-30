import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/index'
import {backendSDK} from './services/backendSDK'
import {useLanguageStore, useBackendStore} from './stores'
import { useAuthStore } from './modules/user/stores'


import './style.css'
import App from './App.vue'



const initializeApp = async () => {
    await backendSDK.initialize();


    const pinia = createPinia();
    const app = createApp(App);

    // setup pinia
    app.use(pinia);
    useLanguageStore().loadLanguagePack();
    useBackendStore().initialize();
    await useAuthStore().initialize();

    // seupt others
    app.use(router);
    app.mount('#app');
}

initializeApp();
