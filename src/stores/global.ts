import  {defineStore} from  'pinia' 
import {ref} from 'vue'
import {getCommunities} from '../apis/backend.ts'


export const useGlobalStore = defineStore('general', ()=>{
  const communities = ref([]);
  
  const loadCommunities = async() =>{
      
      communities.value =  await getCommunities();
  }

  return {
    communities,
    loadCommunities
  }
})
