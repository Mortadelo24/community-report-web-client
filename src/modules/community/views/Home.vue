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
        <p class="text-big-a text-center my-4 select-all">
          <span class="text-epic-color-a select-none">{{ getPhrase('welcome') }}</span>
          @{{ currentUser.displayName }}
        </p>
      </div>
     <CommunityList class="my-4 mx-2"></CommunityList> 
  </div>
  <div v-else>
    This is an error
  </div>

</template>
