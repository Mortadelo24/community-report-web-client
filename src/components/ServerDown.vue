<script setup lang="ts">
import Button from '@/components/Button.vue'
import { useGlobalStore } from '@/stores/global'
import Modal from '@/components/Modal.vue'
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { checkIfServerIsUp } = globalStore;
const {isServerUp} = storeToRefs(globalStore);
</script>

<template>
    <Modal v-if="!isServerUp" :closable="false">
        <p class="font-bold">The server is down</p>
        <p class="font-medium">Please try later</p>
        <Button @click="checkIfServerIsUp">Reload</Button>
    </Modal>

</template>