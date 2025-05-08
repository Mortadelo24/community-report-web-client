<script setup lang="ts">
import { Report, Complaint } from '@/services';
import DateTime from '@/modules/element/components/DateTime.vue';
import { useComplaintStore } from '../stores';
import { onBeforeMount, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Container from '@/modules/element/components/Container.vue';

const { report } = defineProps<{
  report: Report
}>()

const complaintStore = useComplaintStore();
const complaint = ref<null | Complaint>();

onBeforeMount(async () => {
  complaint.value = await complaintStore.getComplaint(report.complaintId);
})

</script>
<template>
  <router-link :to="{ name: 'communityReport', params: { reportId: report.id } }">
    <Container color="slate" :hover="true" class="p-4">
      <p>{{ complaint?.text }}</p>
      <DateTime :date="report.created_at"></DateTime>
    </Container>
  </router-link>
</template>
