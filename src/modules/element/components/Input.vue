<script setup lang="ts">
import type { InputColor, InputSize, InputType } from '../types/input';
import type { IconType } from '../types/icons.d.ts'
import Icon from './Icon.vue';
const inputValue = defineModel()

const { color = 'blue', size = 'normal', type = 'text', placeholder = '', disabled = false } = defineProps<{
  color?: InputColor,
  size?: InputSize,
  type?: InputType,
  icon?: IconType,
  disabled?: boolean,
  placeholder?: string
}>()
</script>
<template>
  <div class="flex flex-row">
    <Icon v-if="icon" class="input-icon"  :icon="icon"></Icon>
    <input :class="[
      ['input-color-' + color],
      ['input-size-' + size],
      [icon ? 'input-with-icon' : '']
  ]" v-model="inputValue" class="input-base w-full" :type="type" :disabled="disabled"
      :placeholder="placeholder">
  </div>

</template>
