<script setup lang="ts">
import { useCommunityStore } from '../../stores/community';
import { storeToRefs } from 'pinia';

const communityStore = useCommunityStore();
const {community} = storeToRefs(communityStore);


</script>

<template>
<div>
      <select>
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