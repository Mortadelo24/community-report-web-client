import { defineStore } from 'pinia'
import { ref } from 'vue'
import { backendSDK, Community } from '@/apis/backendSDK/index.ts'
import { useAuthStore } from './auth.ts'

export const useGlobalStore = defineStore('general', () => {
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
        await useAuthStore().authenticateLocalUser();
      }
      isServerUp.value = true;
    } else {
      isServerUp.value = false;
    }

  }

  

  const loadCurrentUserCommunitiesJoined = async () => {
    const {currentUser} = useAuthStore();
    if (!currentUser) return
    communitiesJoined.value = await currentUser.getCommunitiesJoined();
  }

  const loadCurrentUserOwnedCommunities = async () => {
    const currentUser = useAuthStore().currentUser;
    if (!currentUser) return

  }
   
  

  const initialize = () => {
    checkIfServerIsUp();
    setInterval(checkIfServerIsUp, 10000);

  }

  return {
    communitiesJoined,
    communitiesOwned,
    isServerUp,
    loadCurrentUserCommunitiesJoined,
    loadCurrentUserOwnedCommunities,
    checkIfServerIsUp,
    initialize,
    errorMessage,
    setError
  }
})
