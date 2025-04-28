<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount, onBeforeUnmount } from 'vue';

import { useCommunityStore } from '../stores/community';

const props = defineProps({
  id: String
})

const communityStore = useCommunityStore();
const { community, isOwner } = storeToRefs(communityStore)

onBeforeMount(() => {
  if (!props.id) return
  communityStore.load(props.id);
})
onBeforeUnmount(() => {
  communityStore.unLoad();
})
</script>
<template>
  <div v-if="community" class="flex flex-col gap-2">
    <p class="text-big-a text-center m-4">{{ community?.name }}</p>
    <div class="button-group-container">
      <RouterLink :to="{ name: 'communityReports' }" class="button-group-item">Reports</RouterLink>
      <RouterLink :to="{ name: 'communityMembers' }" class="button-group-item">Members</RouterLink>
      <RouterLink v-if="isOwner" :to="{name: 'communityInvitations'}" class="button-group-item">Invitations</RouterLink>
    </div>
    <RouterView :id="props.id"></RouterView>

  </div>
  <div v-else>
    Loading community
  </div>
</template>
