<script setup lang="ts">
import Button from '@/components/Button.vue'
import {useGlobalStore} from '@/stores/global'

const {checkIfServerIsUp} = useGlobalStore();
</script>
<template>
    <div class="modal">
        <div class="modal-content text-center">
            <p class="font-bold">The server is down</p>
            <p class="font-medium">Please try later</p>
            <Button @click="checkIfServerIsUp">Reload</Button> 
        </div>
    </div>
</template>
