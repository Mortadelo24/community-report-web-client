import  {defineStore} from  'pinia' 
import {ref} from 'vue'
import backend from '../apis/backend'
import {useAuthStore} from './auth.ts'

export const useGlobalStore = defineStore('general', ()=>{
  const communities = ref<Community[]>([]);
  const isServerUp = ref(true);


  const checkIfServerIsUp = async()=>{
    if (await backend.checkServerHealth()){
        if(!isServerUp.value){
          useAuthStore().authenticateLocalUser();
        }
        isServerUp.value = true; 
    }else {
      isServerUp.value = false;
    }
    
    
  }

  const createCommunity = async(communityCreate: CommunityCreate) => {
    await backend.createCommunity(communityCreate)
    await loadCurrentUserCommunities(); 
  }

  const loadCurrentUserCommunities = async() =>{
      const currentUser = useAuthStore().currentUser;
      if (!currentUser) return
      communities.value =  await backend.getCommunities(currentUser.id);
  }

  const initialize = ()=>{
    checkIfServerIsUp();    
    setInterval(checkIfServerIsUp, 10000);
    
  } 

  return {
    communities,
    isServerUp,
    loadCurrentUserCommunities,
    checkIfServerIsUp,
    initialize,
    createCommunity
  }
})
