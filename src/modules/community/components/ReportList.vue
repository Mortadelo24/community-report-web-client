<script setup lang="ts">
import ReportListItem from './ReportListItem.vue';

import { storeToRefs } from 'pinia';
import { useReportStore } from '../stores';
import { computed, onBeforeMount, ref, watchEffect } from 'vue';
import Container from '@/modules/element/components/Container.vue';
import Button from '@/modules/element/components/Button.vue';


const reportStore = useReportStore();
const { reports, reportsPagination } = storeToRefs(reportStore);



onBeforeMount(async () => {
  await reportStore.loadReports();
})

const isListEmpty = ref(true)

watchEffect(() => {
  isListEmpty.value = reports.value.length < 1
})

const pageLimit = 10;
const goBackPagination = async () => {
  const offset =  reportsPagination.value.offset - pageLimit
  await reportStore.loadReports(Math.max(offset, 0))
}
const goForwardPagination = async () => {
  const offset = reportsPagination.value.offset + pageLimit 
  await reportStore.loadReports(offset)
}
const pageNumber = computed(()=>{
  return (reportsPagination.value.offset / pageLimit) + 1 
})
</script>

<template>
  <Container class="container-b w-full p-6 flex flex-col gap-4 max-w-md">
    <p class="text-title-lg ">Reports</p>
    <div>
      <div v-if="!isListEmpty" class="flex flex-col gap-2 min-h-64 ">

        <ReportListItem v-for="report in reports" :report="report" :key="report.id"></ReportListItem>
      </div>
      <div v-else class="min-h-64 flex justify-center items-center">
        No reports
      </div>
    </div>
    <div class="flex justify-center gap-4">
      <Button icon="arrow_back" :disabled="reportsPagination.offset < 1" @click="goBackPagination">Previous</Button>
      <Container color="slate"  class="flex justify-center items-center p-4">
      {{pageNumber}}
      </Container>
      <Button icon="arrow_forward" :disabled="reports.length < pageLimit" @click="goForwardPagination">Next</Button>
    </div>
  </Container>
</template>
