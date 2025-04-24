<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount, onBeforeUnmount } from 'vue';

import { useCommunityStore } from '../stores/community';
import Button from '@/components/Button.vue';
import { router } from '@/router';


const props = defineProps({
  id: String
})

const communityStore = useCommunityStore();
const { community } = storeToRefs(communityStore)

onBeforeMount(() => {
  if (!props.id) return
  const communityId = Number(props.id);
  communityStore.load(communityId);
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
    <p class="text-center text-bold text-2xl m-4">{{ community?.name }}</p>
    <div class="flex flex-row gap-2">
      <Button @click="goToReports">Reports</Button>
      <Button @click="goToMembers">Members</Button>
    </div>
    <RouterView :id="props.id"></RouterView>

  </div>
  <div v-else>
    Loading community
  </div>
</template>
