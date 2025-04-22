<script setup lang="ts"> 
import {useGlobalStore} from '@/stores/global'
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import Button from '@/components/Button.vue'

const props = defineProps({
  id: String
})

const globalStore = useGlobalStore();
const {community} = storeToRefs(globalStore);

onBeforeMount(()=>{
  if (!props.id) return
  const communityId = Number(props.id)
  useGlobalStore().loadCommunity(communityId)
})

</script>
<template>
  <div>
    <p class="text-center text-bold text-2xl">{{ community?.name }}</p>
    id: {{ community?.id }}
    <div>
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
  </div>
</template>
