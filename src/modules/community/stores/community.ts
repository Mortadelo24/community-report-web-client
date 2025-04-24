import {defineStore} from 'pinia'
import { backendSDK, Community, User } from '@/apis/backendSDK'
import {ref} from 'vue'
import { type CommunityCreate } from '@/apis/backendSDK/index.ts';

export const useCommunityStore = defineStore('community', ()=>{
    const community = ref<Community|null>(null);
    const members = ref<User[]>([])

    const create = (communityCreate: CommunityCreate) => {
        return backendSDK.communities.create(communityCreate);
    }

    const load = async(id: number) => {
        community.value = await backendSDK.communities.get(id);
    }

    const unLoad = ()=>{
        community.value = null;
        members.value = [];
    }

    const loadMembers = async()=>{
        if (!community.value ) return
        members.value = await community.value.getMembers();
    }

    return {
        create,
        load,
        unLoad,
        loadMembers,
        community,
        members
    }

})