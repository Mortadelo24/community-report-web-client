<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'

import { useStatisticStore } from '../stores';
import { Bar } from 'vue-chartjs';
import { storeToRefs } from 'pinia';
import { computed, onBeforeMount } from 'vue';

const statisticStore = useStatisticStore();
const { statisticCommunityReports } = storeToRefs(statisticStore);

onBeforeMount(async () => {
  await statisticStore.loadStatisticCommunityReports();
})

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)


const data = computed(() => {
const statisticReportsToShow = statisticCommunityReports.value.filter((datachar)=> datachar.count > 0)
  return {
    labels: statisticReportsToShow.map((dataChar) => dataChar.text),
    datasets: [
      {
        backgroundColor: [
          '#41B883', // Green
          '#E46651', // Red
          '#00D8FF', // Light Blue
          '#F78DA7', // Pink
          '#B8860B', // Dark Goldenrod
          '#8FBC8F', // Dark Sea Green
          '#FFD700', // Gold
          '#9370DB', // Medium Purple
          '#20B2AA', // Light Sea Green
          '#FFA07A', // Light Salmon
          '#778899', // Light Slate Gray
          '#6B8E23', // Olive Drab
          '#A0522D', // Sienna
          '#D2691E', // Chocolate
          '#5F9EA0', // Cadet Blue
          '#DC143C', // Crimson
          '#1E90FF', // Dodger Blue
          '#228B22', // Forest Green
          '#FF69B4', // Hot Pink
          '#CD5C5C', // Indian Red
          '#4682B4', // Steel Blue
          '#800080', // Purple
          '#008080', // Teal
          '#DAA520'  // Goldenrod
        ],
        data: statisticReportsToShow.map((dataChar) => dataChar.count)
      }
    ]
  }
})
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        display: false 
      }
    },
    y: {
      beginAtZero: true
    }
  },
}

</script>
<template>
  <div class="container-b max-w-md">
    <Bar :data="data" :options="options"></Bar>
  </div>
</template>
