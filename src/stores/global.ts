import { defineStore } from 'pinia'
import { ref } from 'vue'
import { backendSDK, Community,type CommunityCreate } from '@/apis/backendSDK/index.ts'
import { useAuthStore } from './auth.ts'

export const useGlobalStore = defineStore('general', () => {
  const communitiesJoined = ref<Community[]>([]);
  const communitiesOwned = ref<Community[]>([]);
  const isServerUp = ref(true);

  // community page
  const community = ref<Community | null>(null)



  const checkIfServerIsUp = async () => {
    if (await backendSDK.checkServerHealth()) {
      if (!isServerUp.value) {
        await useAuthStore().authenticateLocalUser();
      }
      isServerUp.value = true;
    } else {
      isServerUp.value = false;
    }

  }

  const createCommunity = (communityCreate: CommunityCreate) => {
    return backendSDK.communities.create(communityCreate);
  }

  const loadCurrentUserCommunitiesJoined = async () => {
    const {currentUser} = useAuthStore();
    if (!currentUser) return
    communitiesJoined.value = await currentUser.getCommunitiesJoined();
  }

  const loadCurrentUserOwnedCommunities = async () => {
    const currentUser = useAuthStore().currentUser;
    if (!currentUser) return

  }
   
  const loadCommunity = async (community_id: number) => {
    community.value = await backendSDK.communities.get(community_id);
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
