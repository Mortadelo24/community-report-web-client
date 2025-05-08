<script setup lang="ts">

import type { ContainerColor } from '../types/container';

const { color = 'gray' , hover = false } = defineProps<{
  color?: ContainerColor
  hover?: boolean
}>() 
</script>

<template>
  <div :class="[
    ['container-color-' + color],
    [hover? 'container-hover' : '']
  ]" class="container-base">
    <slot></slot>
  </div>
</template>
