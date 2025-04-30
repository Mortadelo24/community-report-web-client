import {defineStore} from 'pinia'
import { backendSDK, Community, User, Invitation, Report, type CommunityCreate } from '@/services/backendSDK'
import  {ref} from 'vue'
import { useUserStore } from '@/modules/user/stores';

const communityError = new Error('There is no community');

export const useCommunityStore = defineStore('community', ()=>{
    const userStore = useUserStore(); 
    
    const community = ref<Community|null>(null);
    const members = ref<User[]>([]);
    const invitations = ref<Invitation[]>([]);
    const reports = ref<Report[]>([]);
    const isOwner = ref(false);
    
    const create = (communityCreate: CommunityCreate) => {
        return backendSDK.communities.create(communityCreate);
    }

    const createInvitation = async()=>{
        if (!community.value) throw communityError;
        return await backendSDK.invitations.create(community.value.id);
    }
    const createReport = async(complaint: string) =>{
        if (!community.value) throw communityError;
        return await backendSDK.reports.create(community.value.id, complaint)
    }

    const load = async(id: string) => {
        community.value = await backendSDK.communities.get(id);
        if (!community.value) throw new Error('The community was not found')

        const currentUser = userStore.user;       
        isOwner.value = !!(currentUser && currentUser.id == community.value.ownerId);
    }

    const unLoad = ()=>{
        community.value = null;
        members.value = [];
        invitations.value = [];
        isOwner.value = false;
        
    }

    const loadMembers = async()=>{
        if (!community.value ) return
        members.value = await community.value.getMembers();
    }

    const loadInvitations = async()=>{
        if(!community.value) return
        invitations.value = await community.value.getInvitations();
    }
    const loadReports = async()=>{
        if(!community.value) return
        reports.value = await community.value.getReports();
    }

    const join = (invitationId: string)=>{
        return backendSDK.invitations.join(invitationId) 
    }

    return {
        create,
        load,
        unLoad,
        loadMembers,
        loadInvitations,
        loadReports,
        createInvitation,
        createReport,
        join,
        community,
        members,
        invitations,
        reports,
        isOwner
    }

})