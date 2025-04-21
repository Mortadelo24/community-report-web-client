<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth.ts'
import { useLanguageStore } from '@/stores/language.ts'
import { useGlobalStore } from '@/stores/global.ts'

import { onBeforeMount} from 'vue';
import CommunityList from '../components/CommuntyList.vue'

const authStore = useAuthStore();
const languageStore = useLanguageStore();
const globalStore = useGlobalStore();

const { currentUser } = storeToRefs(authStore);

const { getPhrase } = languageStore;

onBeforeMount(async () => {
  await authStore.loadCurrentUser();
  await globalStore.loadCurrentUserCommunities();
})

</script>

<template>
  <div>
    <p class="flex flex-row flex-center font-medium text-2xl gap-2 justify-center flex-wrap"><span
        class="italic font-bold">{{ getPhrase('welcome') }}</span> @{{ currentUser?.displayName }}</p>
    
     <CommunityList class="mt-4"></CommunityList> 
    
  </div>

</template>
