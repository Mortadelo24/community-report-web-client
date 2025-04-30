<script setup lang="ts">
import { useCommunityStore } from '../../stores';
import { storeToRefs } from 'pinia';
import { complaints } from '@/assets/commonComplains.json'
import { onBeforeMount, ref } from 'vue'
import { useNotificationStore } from '@/stores';
import Button from '@/modules/element/components/Button.vue';

const communityStore = useCommunityStore();
const notificationStore = useNotificationStore();
const { community, isOwner, reports } = storeToRefs(communityStore);
const complaint = ref<string>(complaints[0]);

// Todo: Remove the backendSDK from this component
const createReport = async () => {
  if (!community.value) return
  try{
  await communityStore.createReport(complaint.value)
  }catch(__){
    notificationStore.showError("Cannot create the complaint")
  }

  await communityStore.loadReports();
}

onBeforeMount(async () => {
  if (!isOwner.value) return
  await communityStore.loadReports();
})
</script>

<template>
  <div class="flex flex-row flex-wrap justify-start gap-4 items-start">
    <div class="container-b flex flex-row gap-2 flex-wrap max-w-xl">

      <select v-model="complaint" class="select-a overflow-hidden">
        <option v-for="complaint in complaints" :value="complaint" class="text-wrap">
          {{ complaint }}
        </option>
      </select>
      <Button @click="createReport" color="blue">Send</Button>
    </div>
    <div v-if="isOwner" class="container-b max-w-md">
      <p class="font-semibold text-lg">Reports</p>
      <div  class="flex flex-col gap-2 mt-4 ">
        <div v-for="report in reports" :key="report.id">
          <p>{{ report.complaint }}</p>
        </div>
      </div>
    </div>
  </div>

</template>