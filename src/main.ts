import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/index'
import { useLanguageStore } from './stores/language'
import { useGlobalStore } from './stores/global'
import {backendSDK} from './services/backendSDK'
import { useAuthStore } from './stores'

import './style.css'
import App from './App.vue'



const initializeApp = async () => {
    await backendSDK.initialize();


    const pinia = createPinia();
    const app = createApp(App);

    // setup pinia
    app.use(pinia);
    useLanguageStore().loadLanguagePack();
    useGlobalStore().initialize();
    await useAuthStore().initialize();

    // seupt others
    app.use(router);
    app.mount('#app');
}

initializeApp();
