<script setup lang="ts">

import type { ContainerColor } from '../types/container';

const { color = 'gray' } = defineProps<{
  color?: ContainerColor
}>() 
</script>

<template>
  <div :class="[
    ['container-color-' + color]
  ]" class="container-base">
    <slot></slot>
  </div>
</template>
