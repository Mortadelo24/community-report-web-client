<script setup lang="ts">
import Button from '@/components/Button.vue'
import { useCommunityStore } from '../../stores/community';
import { storeToRefs } from 'pinia';

const communityStore = useCommunityStore();
const {community} = storeToRefs(communityStore);


</script>

<template>
<div>
  {{ community?.id }}
      <select>
        <option value="">
          Opcion 1
        </option>
        <option value="fadf">
          option 2
        </option>
      </select>
      <Button>Enviar</Button> 
    </div>
</template>