<script setup lang="ts">
import { useLanguageStore } from '@/stores'
import { useUserStore } from '@/modules/user/stores';
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref, watchEffect } from 'vue';
import Button from '@/modules/element/components/Button.vue';
import Container from '@/modules/element/components/Container.vue';

const userStore = useUserStore()

const isLoading = ref(true);


const { getPhrase } = useLanguageStore();
const { communitiesJoined } = storeToRefs(userStore);

onBeforeMount(async () => {
  await userStore.loadCommunitiesJoined();
  isLoading.value = false;
})

const isListEmpty = ref(true)

watchEffect(()=>{
  isListEmpty.value = communitiesJoined.value.length < 1
})

</script>
<template>
  <Container class="p-6 max-w-md w-full">
    <div class="flex flex-row justify-between items-center">
      <p class="text-title-lg">{{ getPhrase('communityListTitle') }}</p>
      <router-link :to="{ name: 'communityCreate' }">
        <Button color="cyan">create</Button>
      </router-link>
    </div>

    <div class=" mt-4 ">
      <div v-if="!isListEmpty" class="flex flex-col min-h-64 gap-4">

        <router-link v-for="community in communitiesJoined" :ref="community.id" :to="{ name: 'community', params: { id: community.id } }">
          <Container color="slate" :hover="true" class="p-4">
            <p class="capitalize">{{community.name}}</p>
          </Container>
        </router-link>

      </div>

      <div v-else class="min-h-64 flex justify-center items-center">
        No communities

      </div>

    </div>

  </Container>

</template>
