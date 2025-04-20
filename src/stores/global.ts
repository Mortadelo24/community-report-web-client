import  {defineStore} from  'pinia' 
import {ref} from 'vue'
import {getCommunities, checkServerHealth} from '../apis/backend.ts'
import type {Community} from '../apis/backend.ts'
import {useAuthStore} from './auth.ts'

export const useGlobalStore = defineStore('general', ()=>{
  const communities = ref<Community[]>([]);
  const isServerUp = ref(true);

  const checkIfServerIsUp = async()=>{
    isServerUp.value = await checkServerHealth();
  }

  const loadCurrentUserCommunities = async() =>{
      const currentUser = useAuthStore().currentUser;
      if (!currentUser) return
      communities.value =  await getCommunities(currentUser.id);
  }

  const initialize = ()=>{
    setInterval(checkIfServerIsUp, 10000)    
  } 

  return {
    communities,
    isServerUp,
    loadCurrentUserCommunities,
    checkIfServerIsUp,
    initialize
  }
})
