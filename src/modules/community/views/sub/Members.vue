<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCommunityStore } from '../../stores/community';
import { onBeforeMount } from 'vue';

const communityStore = useCommunityStore();
const {members} = storeToRefs(communityStore);

onBeforeMount(async()=>{
  communityStore.loadMembers();
})
</script>

<template>
<div>
  <p>Members:</p>
  <div v-for="member in members">
    {{ member.displayName }}
  </div>
</div>
</template>