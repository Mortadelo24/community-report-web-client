import { defineStore } from "pinia";
import { ref } from "vue";


export const useNotificationStore = defineStore('notification', () => {
    const message = ref("");
    const isNotificationOpen = ref(false);
    const isPersistant = ref(false);

    const showError = (msg: string) => {
        message.value = msg;
        isNotificationOpen.value = true;
    }

    const closeNotification = () => {
        isNotificationOpen.value = false
    }


    return {
        isPersistant,
        message,
        isNotificationOpen,
        closeNotification,
        showError,
    }
})