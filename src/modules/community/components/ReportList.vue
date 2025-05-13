<script setup lang="ts">
import ReportListItem from './ReportListItem.vue';

import { storeToRefs } from 'pinia';
import { useReportStore } from '../stores';
import { onBeforeMount } from 'vue';
import Container from '@/modules/element/components/Container.vue';

const reportStore = useReportStore();
const {reports} = storeToRefs(reportStore);

onBeforeMount(async()=>{
  await reportStore.loadReports();
})

</script>

<template>
  <Container class="container-b w-full p-6 max-w-md">
    <p class="text-title-lg">Reports</p>
    <div v-if="reports.length > 1" class="flex flex-col gap-2 mt-4 min-h-64 ">

      <ReportListItem v-for="report in reports" :report="report" :key="report.id"></ReportListItem>
    </div>
    <div v-else class="min-h-64 flex justify-center items-center">
      No reports
    </div>
  </Container>
</template>
