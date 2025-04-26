<script setup lang="ts">
import { useCommunityStore } from '../../stores/community';
import { storeToRefs } from 'pinia';

const communityStore = useCommunityStore();
const {community} = storeToRefs(communityStore);


</script>

<template>
<div class="container-b flex flex-row gap-2 flex-wrap max-w-lg">
      <select class="select-a">
        <option value="">
          {{ community?.id }}
        </option>
        <option value="fadf">
          option 2
        </option>
      </select>
      <button type="button" class="button-a">Enviar</button> 
    </div>
</template>