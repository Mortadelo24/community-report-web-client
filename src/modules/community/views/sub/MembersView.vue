<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCommunityStore } from '../../stores/community';
import { onBeforeMount } from 'vue';

const communityStore = useCommunityStore();
const { members } = storeToRefs(communityStore);

onBeforeMount(async () => {
  communityStore.loadMembers();
})
</script>

<template>
  <div class="container-b max-w-md">
    <div class="flex items-center justify-between mb-4">
      <p class="text-a">Members</p>
      <RouterLink :to="{name: 'communityInvitations'}" class="button-a">Invite</RouterLink>
    </div>
    <div class="flow-root">
      <div class="divide-y divide-gray-200 dark:divide-gray-700">

        <div v-for="member in members" :id="member.id" class="py-3 sm:py-4 flex items-center">
          <div class="shrink-0 select-none">
            <img src="https://images-ext-1.discordapp.net/external/tpcGiZRG0Oaa3ZnSZPgMbftsq9PXi14aEx3V9PBS1oE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/624821008641032212/478aed10d6e00bec7791c21edbde27c4.png" alt="avatar" class="w-8 h-8 rounded-full">
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
  </div>
</template>