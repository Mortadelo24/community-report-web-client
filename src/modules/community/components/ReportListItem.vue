<script setup lang="ts">
import { Report, Complaint } from '@/services';
import DateTime from '@/modules/element/components/DateTime.vue';
import { useComplaintStore } from '../stores';
import { onBeforeMount, ref } from 'vue';

const { report } = defineProps<{
  report: Report
}>()

const complaintStore = useComplaintStore();
const complaint = ref<null | Complaint>();

onBeforeMount(async()=>{
  complaint.value = await complaintStore.getComplaint(report.complaintId);
})

</script>
<template>
  <div class="flex flex-row gap-4 items-center justify-between">
    <p>{{ complaint?.text }}</p>
    <DateTime :date="report.created_at"></DateTime>
  </div>
</template>
