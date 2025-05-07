<script setup lang="ts">
import type { IconType } from '../types/icons';

const { icon } = defineProps<{
  icon: IconType
}>() 
</script>
<template>
  <span class="material-symbols-outlined select-none">
    {{ icon }}
  </span>
</template>
