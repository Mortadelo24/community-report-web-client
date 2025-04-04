<script setup lang="ts">
  import {ref} from 'vue';
  import {storeToRefs} from 'pinia';
  import {useAuthStore} from '../stores/auth.ts' 
  import {useLenguageStore} from '../stores/lenguage.ts' 

  const authStore = useAuthStore();
  const lenguageStore = useLenguageStore();
  const {name} = storeToRefs(authStore);
  const {preference, lenguagePack} = storeToRefs(lenguageStore);
  ``

  const communitiesList = ref(
   [
    "test peru 4k",
    "cabol 2",
    "Tecnicament pefjdflakaje true"
  ]
  ) 
</script>

<template>
  <div>
    <p class="flex flex-row flex-center font-medium text-2xl gap-2 justify-center flex-wrap"><span class="italic font-bold">{{lenguagePack["welcome"]}}</span> @{{name}} {{preference}}</p>
    <div class="mt-4">
      <p class="text-xl font-medium">{{lenguagePack["communityListTitle"]}}</p>
        <div class="flex flex-col gap-2 bg-orange-100 mt-2 p-4 rounded-lg">
          <div v-for="community in communitiesList"  class="bg-red-100 px-2 py-4 last:rounded-b-md first:rounded-t-md">
            {{community}}
          </div>
        </div>
      </div>
  </div>


</template>
