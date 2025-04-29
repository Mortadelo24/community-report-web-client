import { defineStore } from 'pinia'
import { ref } from 'vue'
import { backendSDK, firebase } from '../services'
import {useUserStore} from './userStore'

export const useAuthStore = defineStore('auth', () => {
    const userStore = useUserStore();

    const isAuthenticated = ref(false)

    const login = async () => {
        await logout();
        const firebaseReponse: any = await firebase.login();
        if (!firebaseReponse) return

        const firebaseToken = firebaseReponse['user']['accessToken'];

        try {
            await backendSDK.auth.authenticateUser('google', firebaseToken);
            isAuthenticated.value = true;
            return
        } catch (__) { }

        throw new Error('Could not authenticated the user')
    }

    const logout = async () => {
        backendSDK.auth.logout();
        isAuthenticated.value = false;
        userStore.unLoadUser();
    }

    const authenticateLocalUser = async () => {
        await backendSDK.auth.authenticateLocalUser();
        isAuthenticated.value = backendSDK.auth.isAuthenticated();
    }


    const initialize = async () => {
        try {
            isAuthenticated.value = backendSDK.auth.isAuthenticated();
            return
        } catch (__) { }
        throw new Error("Cannot initialize the auth store")
    }

    return {
        initialize,
        isAuthenticated,
        authenticateLocalUser,
        login,
        logout
    }
})