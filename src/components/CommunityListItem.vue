<script setup lang="ts">
  import type {Community} from '../apis/backend.ts' 
  const { community }  = defineProps<{community: Community}>(); 
</script>
<template>

    <div class="bg-red-100 px-2 py-4 last:rounded-b-md first:rounded-t-md">
        <p class="capitalize">{{community.name}}</p>
            
    </div>
  
</template>
