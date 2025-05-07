<script setup lang="ts">
  const {reportId, communityId} = defineProps<{
  reportId: string,
  communityId: string
}>()
</script>
<template>
  <div>
    Report info: {{reportId}}
    community id : {{communityId}} 
  </div>
</template>
