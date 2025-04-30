import { defineStore } from "pinia";
import { backendSDK } from "@/services";
import { useAuthStore } from "@/modules/user/stores";
import { ref } from 'vue'


export const useBackendStore = defineStore('backendStore', () => {
  const authStore = useAuthStore();

  const isServerUp = ref(true);


  const checkIfServerIsUp = async () => {
    if (await backendSDK.checkServerHealth()) {
      if (!isServerUp.value) {
        await authStore.authenticateLocalUser();
      }
      isServerUp.value = true;
    } else {
      isServerUp.value = false;
    }

  }


  const initialize = () => {
    checkIfServerIsUp();
    setInterval(checkIfServerIsUp, 10000);

  }
  return {
    initialize,
    isServerUp,
    checkIfServerIsUp
  }
})