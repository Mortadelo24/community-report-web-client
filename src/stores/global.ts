import { defineStore } from 'pinia'
import { ref } from 'vue'
import { backendSDK, Community } from '@/services'
import { useAuthStore } from '@/stores'

export const useGlobalStore = defineStore('general', () => {
  const authStore = useAuthStore();  
 
  // init 
  const communitiesJoined = ref<Community[]>([]);
  const communitiesOwned = ref<Community[]>([]);
  const isServerUp = ref(true);
  // error 

  const errorMessage = ref<string | null>(null)

  const setError = (err: string) =>{
    errorMessage.value = err;
  }

 
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
    communitiesJoined,
    communitiesOwned,
    isServerUp,
   checkIfServerIsUp,
    initialize,
    errorMessage,
    setError
  }
})
