<script setup lang="ts">
  import {router} from '@/router'
  import { Community } from '@/apis/backendSDK';
  const { community }  = defineProps<{community: Community}>();
  
  const goToCommunity = () => {
   router.push({name: 'community', params: {id: community.id}}) 
  }
</script>
<template>

    <div @click="goToCommunity" class=" list-container-item">
        <p class="capitalize">{{community.name}}</p>
                  
    </div>
  
</template>
