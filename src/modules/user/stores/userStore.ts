import {defineStore} from 'pinia'
import { backendSDK , Community, User} from '../services'
import { ref } from 'vue';

export const useUserStore = defineStore('user', ()=>{
    const user = ref<User | null>(null);
    const communitiesJoined = ref<Community[]>([]);
    
    const loadUser = async()=>{
        user.value = await backendSDK.users.getCurrent();
    }

    const loadCommunitiesJoined = async() => {
        if(!user.value) return
        communitiesJoined.value = await user.value.getCommunitiesJoined(); 
    }

    const unLoadUser = ()=>{
        user.value = null
    }

    return{
        loadUser,
        loadCommunitiesJoined,
        unLoadUser,
        user,
        communitiesJoined
    }
})