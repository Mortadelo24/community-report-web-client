<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useReportStore } from '../../stores';
import { storeToRefs } from 'pinia';

  const {reportId, communityId} = defineProps<{
  reportId: string,
  communityId: string
}>()

const reportStore = useReportStore();
const {evidences} = storeToRefs(reportStore)


onBeforeMount(async()=>{
  await reportStore.loadEvidences(reportId) 
  evidences.value.forEach(async(evidence) => {
    await evidence.loadData() 
  });
})
</script>
<template>
  <div>
  
    Report info: {{reportId}}
    community id : {{communityId}} 
    <div>
      <div v-for="evidence in evidences">
            <img v-if="evidence.dataURL" :src="evidence.dataURL" alt="">
      </div>
    </div> 
  </div>
</template>
