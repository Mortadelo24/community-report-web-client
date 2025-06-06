import { defineStore, storeToRefs } from 'pinia'
import { backendSDK, Community, User, Invitation, Report, type CommunityCreate } from '@/services/backendSDK'
import { computed, ref } from 'vue'
import { useUserStore } from '@/modules/user/stores';

const communityError = new Error('There is no community');

export const useCommunityStore = defineStore('community', () => {
    const userStore = useUserStore();
    const {user} = storeToRefs(userStore);


    const community = ref<Community | null>(null);
    const members = ref<User[]>([]);
    const invitations = ref<Invitation[]>([]);
    const reports = ref<Report[]>([]);

    const create = (communityCreate: CommunityCreate) => {
        return backendSDK.communities.create(communityCreate);
    }

    const createInvitation = async () => {
        if (!community.value) throw communityError;
        return await backendSDK.invitations.create(community.value.id);
    }
    const load = async (id: string) => {
        community.value = await backendSDK.communities.get(id);
        if (!community.value) throw new Error('The community was not found')

    }

    const isOwner = computed(() => {
        if (!user.value || ! community.value) return false

        return  user.value.id == community.value.ownerId;

    })

    const unLoad = () => {
        community.value = null;
        members.value = [];
        invitations.value = []; 
       }

    const loadMembers = async () => {
        if (!community.value) return
        members.value = await community.value.getMembers();
    }

    const loadInvitations = async () => {
        if (!community.value) return
        invitations.value = await community.value.getInvitations();
    }

    const join = (invitationId: string) => {
        return backendSDK.invitations.join(invitationId)
    }

    return {
        create,
        load,
        unLoad,
        loadMembers,
        loadInvitations,
        createInvitation,
        join,
        community,
        members,
        invitations,
        reports,
        isOwner,
    }

})
