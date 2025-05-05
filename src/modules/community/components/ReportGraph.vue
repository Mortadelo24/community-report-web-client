<script setup lang="ts">
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js'

import { useCommunityStore } from '../stores';
import { Pie } from 'vue-chartjs';
import { storeToRefs } from 'pinia';
import { computed, onBeforeMount } from 'vue';



const communityStore = useCommunityStore();
const { reportDatachars } = storeToRefs(communityStore);

onBeforeMount(async () => {
  await communityStore.loadReportsDatachars();
})

ChartJS.register(ArcElement, Tooltip)


const data = computed(() => {
  return {
    labels: reportDatachars.value.map((dataChar)=> dataChar.text) ,
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
        data: reportDatachars.value.map((dataChar)=> dataChar.count)
      }
    ]
  }
})
const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>
<template>
  <div class="container-b max-w-md">
    
    <Pie :data="data" :options="options"></Pie>
  </div>
</template>
