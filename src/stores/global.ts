import { defineStore } from 'pinia'
import { ref } from 'vue'
import backend from '../apis/backend'
import { useAuthStore } from './auth.ts'

export const useGlobalStore = defineStore('general', () => {
  const communitiesJoined = ref<Community[]>([]);
  const communitiesOwned = ref<Community[]>([]);
  const isServerUp = ref(true);

  // community page
  const community = ref<Community | null>(null)



  const checkIfServerIsUp = async () => {
    if (await backend.checkServerHealth()) {
      if (!isServerUp.value) {
        useAuthStore().authenticateLocalUser();
      }
      isServerUp.value = true;
    } else {
      isServerUp.value = false;
    }


  }

  const createCommunity = async (communityCreate: CommunityCreate) => {
    const community = await backend.createCommunity(communityCreate)
    await loadCurrentUserCommunitiesJoined();

    return community
  }

  const loadCurrentUserCommunitiesJoined = async () => {
    communitiesJoined.value = await backend.getUserCommunitiesJoined();
  }

  const loadCurrentUserOwnedCommunities = async () => {
    const currentUser = useAuthStore().currentUser;
    if (!currentUser) return

  }
   
  const loadCommunity = async (community_id: number) => {
    community.value = await backend.getCommunity(community_id); 
  }

  const initialize = () => {
    checkIfServerIsUp();
    setInterval(checkIfServerIsUp, 10000);

  }

  return {
    communitiesJoined,
    communitiesOwned,
    isServerUp,
    loadCurrentUserCommunitiesJoined,
    loadCurrentUserOwnedCommunities,
    checkIfServerIsUp,
    initialize,
    createCommunity,
    community,
    loadCommunity
  }
})
