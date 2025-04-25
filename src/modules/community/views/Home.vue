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
   await globalStore.loadCurrentUserOwnedCommunities();
})

</script>

<template>
  <div v-if="currentUser">
     <div class="w-full flex flex-row justify-center">
        <h1 class="text-big-a text-center">
          <span class="text-epic-color-a">{{ getPhrase('welcome') }}</span>
          @{{ currentUser.displayName }}
        </h1>
      </div>
     <CommunityList class="mt-4"></CommunityList> 
    
  </div>

</template>
