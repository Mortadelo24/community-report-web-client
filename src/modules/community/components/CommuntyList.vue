<script setup lang="ts">
import { useLanguageStore } from '@/stores'
import { useUserStore } from '@/modules/user/stores';
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref } from 'vue';
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


</script>
<template>
  <Container class="p-6 max-w-md w-full">
    <div class="flex flex-row justify-between items-center">
      <p class="text-title-lg">{{ getPhrase('communityListTitle') }}</p>
      <router-link :to="{ name: 'communityCreate' }">
        <Button color="cyan">create</Button>
      </router-link>
    </div>

    <div class=" mt-4 min-h-80">
      <div class="flex flex-col gap-4">

        <router-link v-for="community in communitiesJoined" :ref="community.id" :to="{ name: 'community', params: { id: community.id } }">
          <Container color="slate" :hover="true" class="p-4">
            <p class="capitalize">{{community.name}}</p>
          </Container>
        </router-link>

      </div>

      <div class=" hidden h-full w-full text-center bold text-xl">
        No communities

      </div>

    </div>

  </Container>

</template>
