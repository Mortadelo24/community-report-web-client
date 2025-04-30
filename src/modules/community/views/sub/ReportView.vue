<script setup lang="ts">
import {useGlobalStore} from '@/stores'
import { useCommunityStore } from '../../stores';
import { storeToRefs } from 'pinia';
import { complaints } from '@/assets/commonComplains.json'
import { onBeforeMount, ref } from 'vue'


const communityStore = useCommunityStore();
const { community, isOwner, reports } = storeToRefs(communityStore);
const complaint = ref<string>(complaints[0]);

// Todo: Remove the backendSDK from this component
const createReport = async () => {
  if (!community.value) return
  try{
  await communityStore.createReport(complaint.value)
  }catch(__){
    useGlobalStore().errorMessage = "Cannot create the complaint"
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
      <button @click="createReport" type="button" class="button-a">Enviar</button>
    </div>
    <div v-if="isOwner" class="container-b max-w-md">
      <p class="font-semibold text-lg">Reports</p>
      <div class="flex flex-col gap-2 mt-4">
        <div v-for="report in reports" :key="report.id">
          <p>{{ report.complaint }}</p>
        </div>
      </div>
    </div>
  </div>

</template>