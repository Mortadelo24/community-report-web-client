import  {defineStore} from  'pinia' 
import {ref} from 'vue'
import {getCommunities} from '../apis/backend.ts'
import type {Community} from '../apis/backend.ts'
import {useAuthStore} from './auth.ts'

export const useGlobalStore = defineStore('general', ()=>{
  const communities = ref<Community[]>([]);
   
  const loadCurrentUserCommunities = async() =>{
      const currentUser = useAuthStore().currentUser;
      if (!currentUser) return
      communities.value =  await getCommunities(currentUser.id);
  }

  return {
    communities,
    loadCurrentUserCommunities
  }
})
