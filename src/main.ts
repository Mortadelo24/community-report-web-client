import { createApp} from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/index'
import {useAuthStore} from './stores/auth'

import './style.css'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);

// setup pinia
app.use(pinia);

useAuthStore().initializeAuth();

// seupt others
app.use(router);
app.mount('#app');
