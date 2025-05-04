<script setup lang="ts">
import { useCommunityStore } from '../../stores';
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref } from 'vue'
import { useNotificationStore } from '@/stores';
import { useComplaintStore } from '../../stores';
import Button from '@/modules/element/components/Button.vue';
import ReportListItem from '../../components/ReportListItem.vue';

const complaintStore = useComplaintStore();
const communityStore = useCommunityStore();
const notificationStore = useNotificationStore();
const { community, isOwner, reports } = storeToRefs(communityStore);
const {complaints} = storeToRefs(complaintStore);

const complaintId = ref("");

const createReport = async () => {
  if (!community.value || !complaintId.value) return
  try{
  await communityStore.createReport(complaintId.value)
  }catch(__){
    notificationStore.showError("Cannot create the complaint")
  }

  await communityStore.loadReports();
}

// Todo: Create a component for sending a report in order to lower the charge of this component
onBeforeMount(async () => {
  if (!isOwner.value) return
  await communityStore.loadReports();
  await complaintStore.loadComplaints();
})
</script>

<template>
  <div class="flex flex-row flex-wrap justify-start gap-4 items-start">
    <div class="container-b flex flex-row gap-2 flex-wrap max-w-xl">

      <select v-model="complaintId" class="select-a overflow-hidden">
        <option value="" disabled selected>
          Select a complaint
        </option>
        <option v-for="complaint in complaints" :value="complaint.id" class="text-wrap">
          {{ complaint.text }}
        </option>
      </select>
      <Button @click="createReport" color="blue">Send</Button>
    </div>
    <div v-if="isOwner" class="container-b max-w-md">
      <p class="font-semibold text-lg">Reports</p>
      <div  class="flex flex-col gap-2 mt-4 ">
        
        <ReportListItem v-for="report in reports" :report="report" :key="report.id"></ReportListItem>
      </div>
    </div>
  </div>

</template>
