<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount } from 'vue';
import { useComplaintStore, useReportStore } from '../../stores';
import { storeToRefs } from 'pinia';
import Container from '@/modules/element/components/Container.vue';

const { reportId } = defineProps<{
  reportId: string,
}>()

const reportStore = useReportStore();
const complaintStore = useComplaintStore();
const { evidences, report } = storeToRefs(reportStore)

onBeforeMount(async () => {
  await reportStore.loadReport(reportId)
  evidences.value.forEach(async (evidence) => {
    await evidence.loadData()
  });
})

onBeforeUnmount(reportStore.unloadReport)

const complaintText = computed(() => {
  const result = ''
  if (!report.value) return result
  const complaint = complaintStore.getComplaint(report.value.complaintId);
  if (!complaint) return result
  return complaint.text
})


</script>
<template>
  <Container class="p-6 flex flex-col gap-6">
    <p class="text-title-xl">{{ complaintText }}</p>
    <p>{{report?.created_at}}</p>

    <div v-for="evidence in evidences">
      <img v-if="evidence.dataURL" :src="evidence.dataURL" alt="">
  
    </div>
  </Container>
</template>
