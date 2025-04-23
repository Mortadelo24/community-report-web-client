<script setup lang="ts">
  import {router} from '@/router'
  import { Community } from '@/apis/backendSDK';
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
