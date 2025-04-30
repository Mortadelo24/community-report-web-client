<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useBackendStore } from '../stores'
import { watchEffect } from 'vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const backendStore = useBackendStore();
const { isServerUp } = storeToRefs(backendStore);


watchEffect(() => {
    const redirect = route.query['redirect'];
    if (isServerUp.value && redirect) {
        router.push(redirect as string);
    }
})

</script>

<template>
    <div class="modal-overlay flex items-center justify-center">
        <div>
            <p class="text-big-a">The server is offline</p>
        </div>
    </div>
</template>