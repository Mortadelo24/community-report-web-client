import  {defineStore} from  'pinia' 
import {ref} from 'vue'
import {getCommunities} from '../apis/backend.ts'
import type {Community} from '../apis/backend.ts'

export const useGlobalStore = defineStore('general', ()=>{
  const communities = ref<Community[]>([]);
   
  const loadCommunities = async(userID: string) =>{
      
      communities.value =  await getCommunities(userID);
  }

  return {
    communities,
    loadCommunities
  }
})
