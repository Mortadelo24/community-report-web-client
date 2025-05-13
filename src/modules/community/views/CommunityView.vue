<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount, onBeforeUnmount } from 'vue';

import { useCommunityStore } from '../stores/community';
import { useComplaintStore } from '../stores';

const props = defineProps({
  id: String
})

const communityStore = useCommunityStore();
const complaintStore = useComplaintStore();
const { community } = storeToRefs(communityStore)

onBeforeMount(() => {
  if (!props.id) return
  communityStore.load(props.id);
  complaintStore.loadComplaints();
})
onBeforeUnmount(() => {
  communityStore.unLoad();
})
</script>
<template>
  <div v-if="community" class="flex flex-col gap-4">
    <p class="text-center text-title-3xl my-6">{{ community.name}}</p>
    <div class="button-group-container">
      <RouterLink active-class="opacity-25" :to="{ name: 'communityReports' }" class="button-group-item">Reports</RouterLink>
      <RouterLink active-class="opacity-25" :to="{ name: 'communityMembers' }" class="button-group-item">Members</RouterLink>
    </div>
    <RouterView :communityId="props.id"></RouterView>
  </div>
</template>
