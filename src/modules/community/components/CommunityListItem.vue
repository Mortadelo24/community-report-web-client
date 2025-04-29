<script setup lang="ts">
  import { Community } from '@/apis/backendSDK';
  const { community }  = defineProps<{community: Community}>();
  
</script>
<template>

    <router-link :to="{name: 'community', params: {id: community.id}}" class=" list-container-item">
        <p class="capitalize">{{community.name}}</p>
                  
    </router-link>
  
</template>
