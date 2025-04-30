<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {useLanguageStore} from '@/stores'
import { useUserStore } from '@/modules/user/stores';
import CommunityList from '../components/CommuntyList.vue'
import JoinCommunity from '../components/JoinCommunity.vue';
import { onBeforeMount } from 'vue';


const userStore = useUserStore();
const languageStore = useLanguageStore()
const {user} = storeToRefs(userStore);

const { getPhrase } = languageStore;

onBeforeMount(async()=>{
  await useUserStore().loadUser();
})

</script>

<template>
  <div v-if="user">
    <div class="w-full flex flex-row justify-center my-15">
      <p class="text-big-a text-center my-4 select-all">
        <span class="text-epic-color-a select-none">{{ getPhrase('welcome') }}</span>
        @{{ user.displayName }}
      </p>
    </div>
    <div class="flex flex-row flex-wrap justify-center gap-4">
      <CommunityList></CommunityList>
      <JoinCommunity></JoinCommunity>
    </div>

  </div>
</template>
