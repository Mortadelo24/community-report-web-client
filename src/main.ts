import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/index'
import { useAuthStore } from './stores/auth'
import { useLanguageStore } from './stores/language'
import { useGlobalStore } from './stores/global'

import './style.css'
import App from './App.vue'



const initializeApp = async () => {

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
