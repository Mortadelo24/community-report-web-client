<script setup lang="ts">
import Container from '@/modules/element/components/Container.vue'; 

import { storeToRefs } from 'pinia';
import { useCommunityStore } from '../stores';
import { onBeforeMount } from 'vue';
const communityStore = useCommunityStore();
const { members } = storeToRefs(communityStore);

onBeforeMount(async () => {
  communityStore.loadMembers();
})
</script>


<template>

  <Container class="p-6">
    <div class="flex items-center justify-between mb-4">
      <p class="text-title-lg">Members</p>
    </div>
    <div class="flow-root min-h-64">
      <div class="divide-y divide-gray-200 dark:divide-gray-700">

        <div v-for="member in members" :id="member.id" class="py-3 sm:py-4 flex items-center">
          <div class="shrink-0 select-none">
            <img
              src="https://images-ext-1.discordapp.net/external/tpcGiZRG0Oaa3ZnSZPgMbftsq9PXi14aEx3V9PBS1oE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/624821008641032212/478aed10d6e00bec7791c21edbde27c4.png"
              alt="avatar" class="w-8 h-8 rounded-full">
          </div>
          <div class="flex-1 min-w-0 ms-3">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {{ member.displayName }}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {{ member.email }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
