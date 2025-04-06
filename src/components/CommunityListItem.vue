<script setup lang="ts">
  import type {Community} from '../apis/backend.ts' 
  import {router} from '../router/index.ts'
  const { community }  = defineProps<{community: Community}>();
  
  const goToCommunity = () => {
   router.push({name: 'community', params: {id: community.id}}) 
  }
</script>
<template>

    <div @click="goToCommunity" class="bg-red-100 px-2 py-4 last:rounded-b-md first:rounded-t-md">
        <p class="capitalize">{{community.name}}</p>
                  
    </div>
  
</template>
