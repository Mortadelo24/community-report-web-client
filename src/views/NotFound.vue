<script setup lang="ts">
  const {pathMatch = []} = defineProps<{pathMatch: string[]}>();
</script>

<template>
  <div>
    Route not found: {{pathMatch}}  
  </div>
</template>
