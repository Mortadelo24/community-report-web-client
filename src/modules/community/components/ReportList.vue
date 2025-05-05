<script setup lang="ts">
import ReportListItem from './ReportListItem.vue';

import { storeToRefs } from 'pinia';
import { useCommunityStore } from '../stores';
import { onBeforeMount } from 'vue';

const communityStore = useCommunityStore();
const { reports } = storeToRefs(communityStore);

onBeforeMount(async()=>{
  await communityStore.loadReports();
})

</script>

<template>
  <div class="container-b max-w-md">
    <p class="font-semibold text-lg">Reports</p>
    <div class="flex flex-col gap-2 mt-4 ">

      <ReportListItem v-for="report in reports" :report="report" :key="report.id"></ReportListItem>
    </div>
  </div>
</template>
