<script setup lang="ts">
import type { AlertColor } from '../types/alert';
import type { IconType } from '../types/icons';
import Container from './Container.vue';
import Icon from './Icon.vue';

const { color = 'red' } = defineProps<{
  color?: AlertColor,
  icon?: IconType
}>()
</script>
<template>
  <Container :class="[
    ['alert-color-' + color]
  ]" :color="color" class="alert-base p-4 inline-flex gap-2 items-center">
    <Icon v-if="icon" :icon="icon"></Icon>
    <slot></slot>

  </Container>
</template>
