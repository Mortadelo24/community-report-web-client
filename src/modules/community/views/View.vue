<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount, onBeforeUnmount } from 'vue';

import { useCommunityStore } from '../stores/community';
import { router } from '@/router';


const props = defineProps({
  id: String
})

const communityStore = useCommunityStore();
const { community } = storeToRefs(communityStore)

onBeforeMount(() => {
  if (!props.id) return
  communityStore.load(props.id);
})
onBeforeUnmount(() => {
  communityStore.unLoad();
})
const goToReports = ()=>{
  router.push({name: 'communityReports'})
}
const goToMembers = () => {
  router.push({name: "communityMembers"})
}
</script>
<template>
  <div v-if="community" class="flex flex-col gap-2">
    <p class="text-big-a text-center m-4">{{ community?.name }}</p>
    <div class="button-group-container">
      <button type="button" @click="goToReports" class="button-group-item">Reports</button>
      <button type="button" @click="goToMembers" class="button-group-item">Members</button>
    </div>
    <RouterView :id="props.id"></RouterView>

  </div>
  <div v-else>
    Loading community
  </div>
</template>
