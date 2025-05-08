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
  <div v-if="community" class="container-spacing-a">
    <div class="flex flex-col  gap-4">
      <ReportCreate></ReportCreate>
      <ReportList v-if="isOwner"></ReportList>
    </div>
    <ReportGraph v-if="isOwner"></ReportGraph>
  </div>
</template>
