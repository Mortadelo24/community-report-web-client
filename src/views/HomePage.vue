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
  const {name} = storeToRefs(authStore);
  const {preference, languagePack} = storeToRefs(languageStore);
  const {communities} = storeToRefs(globalStore);
  
  onBeforeMount(()=>{
    globalStore.loadCommunities();
  })

  const loadEnglishLanguagePack = ()=>{
  languageStore.loadLanguagePack("en");
  }

  const loadSpanishLanuagePack = () => {
    languageStore.loadLanguagePack("es");
  }

</script>

<template>
  <div>
    <p class="flex flex-row flex-center font-medium text-2xl gap-2 justify-center flex-wrap"><span class="italic font-bold">{{languagePack["welcome"]}}</span> @{{name}}</p>
    <div class="flex flex-col gap-2">
    <p>Language: {{preference}}</p>
    <button @click="loadEnglishLanguagePack">Load english</button>
    <button @click="loadSpanishLanuagePack">Load Spanish</button>
    </div> 
    <div class="mt-4">
      <p class="text-xl font-medium">{{languagePack["communityListTitle"]}}</p>
        <div class="flex flex-col gap-2 bg-orange-100 mt-2 p-4 rounded-lg">
          <CommunityListItem v-for="community in communities" :community="community" ref="community.id"></CommunityListItem>
        
        </div>
      </div>
  </div>


</template>
