<script setup lang="ts">
import { useCommunityStore } from '../../stores';
import { storeToRefs } from 'pinia';
import ReportList from '../../components/ReportList.vue';
import ReportCreate from '../../components/ReportCreate.vue';
import ReportGraph from '../../components/ReportGraph.vue';

const communityStore = useCommunityStore();
const { isOwner, community } = storeToRefs(communityStore);
</script>

<template>
  <div v-if="community" class="flex flex-row flex-wrap justify-start gap-4 items-start">
    <ReportCreate></ReportCreate> 
    <ReportList v-if="isOwner"></ReportList>
    <ReportGraph v-if="isOwner"></ReportGraph>
  </div>

</template>
