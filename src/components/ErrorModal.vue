<script setup lang="ts">
import Button from '@/components/Button.vue'
import { useGlobalStore } from '@/stores/global'
import Modal from '@/components/Modal.vue'
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const {errorMessage} = storeToRefs(globalStore);

const clearErrorMessage = () => {
    errorMessage.value = null;
}
</script>

<template>
    <Modal v-if="errorMessage" :closable="true">
        <p class="font-bold">{{ errorMessage }}</p>
        <Button @click="clearErrorMessage">Ok</Button>
    </Modal>

</template>