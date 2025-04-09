<script setup lang="ts">
  import { onBeforeMount} from 'vue';
  import {storeToRefs} from 'pinia';
  import {useAuthStore} from '../stores/auth.ts' 
  import {useLanguageStore} from '../stores/language.ts' 
  import {useGlobalStore} from '../stores/global.ts'

  import CommunityListItem from '../components/CommunityListItem.vue'

  const authStore = useAuthStore();
  const languageStore = useLanguageStore();
  const globalStore = useGlobalStore();
  
  const {displayName} = storeToRefs(authStore);
  const {communities} = storeToRefs(globalStore);
  const {getPhrase}  = languageStore;  

  

  onBeforeMount(()=>{
    globalStore.loadCommunities();
  })

</script>

<template>
  <div>
    <p class="flex flex-row flex-center font-medium text-2xl gap-2 justify-center flex-wrap"><span class="italic font-bold">{{getPhrase('welcome')}}</span> @{{displayName}}</p>
    <div class="flex flex-col gap-2">
    </div> 
    <div class="mt-4">
      <p class="text-xl font-medium">{{getPhrase('communityListTitle')}}</p>
        <div class="flex flex-col gap-2 bg-orange-100 mt-2 p-4 rounded-lg">
          <CommunityListItem v-for="community in communities" :community="community" ref="community.id"></CommunityListItem>
        
        </div>
      </div>
  </div>


</template>
