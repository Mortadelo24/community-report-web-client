import {defineStore} from 'pinia'
import { backendSDK, Community, User, Invitation, Report } from '@/apis/backendSDK'
import  {ref} from 'vue'
import { type CommunityCreate } from '@/apis/backendSDK/index.ts';
import { useAuthStore } from '@/stores/auth';

export const useCommunityStore = defineStore('community', ()=>{
    const authStore = useAuthStore(); 
    
    const community = ref<Community|null>(null);
    const members = ref<User[]>([]);
    const invitations = ref<Invitation[]>([]);
    const reports = ref<Report[]>([]);
    const isOwner = ref(false);
    
    const create = (communityCreate: CommunityCreate) => {
        return backendSDK.communities.create(communityCreate);
    }

    const createInvitation = async()=>{
        if (!community.value) {
            throw new Error('There is no community')
        }
        return await backendSDK.invitations.create(community.value.id);
    }

    const load = async(id: string) => {
        community.value = await backendSDK.communities.get(id);
        if (!community.value) throw new Error('The community was not found')

        const currentUser = authStore.currentUser;       
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
        join,
        community,
        members,
        invitations,
        reports,
        isOwner
    }

})