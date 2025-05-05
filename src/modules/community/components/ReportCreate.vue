<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
import { useCommunityStore, useComplaintStore } from '../stores';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores';
import Button from '@/modules/element/components/Button.vue';

const communityStore = useCommunityStore();
const complaintStore = useComplaintStore();
const notificationStore = useNotificationStore();

const {complaints} = storeToRefs(complaintStore);
const complaintId = ref('');


const createReport = async () => {
  if (complaintId.value.length < 1) return
  try {
    await communityStore.createReport(complaintId.value)
  } catch (__) {
    notificationStore.showError("Cannot create the complaint")
  }

  await communityStore.loadReports();
  await communityStore.loadReportsDatachars();
}

onBeforeMount(async()=>{
  await complaintStore.loadComplaints();
})
</script>

<template>
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
</template>
