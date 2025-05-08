<script setup lang="ts">
import type { Invitation } from '@/services';
import { useClipboard } from '@vueuse/core'
import Container from '@/modules/element/components/Container.vue';
import Button from '@/modules/element/components/Button.vue';
import { ref } from 'vue';

const { invitation } = defineProps<{
  invitation: Invitation
}>()

const source = ref(invitation.id)
const { copy, copied, isSupported } = useClipboard({ source })

</script>
<template>

  <Container color="slate" class="flex items-center p-4 gap-2">
    <p class="truncate select-all">{{ invitation.id }}</p>
    <Button icon="content_copy" color="green" v-if="isSupported" @click="copy(source)">
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </Button>
  </Container>
</template>
