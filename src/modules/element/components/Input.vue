<script setup lang="ts">
import type { InputColor, InputSize, InputType } from '../types/input';
import type { IconType } from '../types/icons.d.ts'
import Icon from './Icon.vue';
import { useTemplateRef } from 'vue';
const inputValue = defineModel()

const { color = 'blue', icon, size = 'normal', type = 'text', accept, placeholder = '', disabled = false } = defineProps<{
  color?: InputColor,
  size?: InputSize,
  type?: InputType,
  icon?: IconType,
  disabled?: boolean,
  accept?: string, 
  placeholder?: string
}>()

const input = useTemplateRef('input')

const getFiles = (): FileList | null=>{
  if(type != 'file') throw new Error('The input should be of file type');
  if (!input || !input.value) return null
  const inputFileElement =  input.value 
  if (!inputFileElement.files) return null
  return inputFileElement.files
}


defineExpose({
  getFiles
})
</script>
<template>
  <div class="flex flex-row">
    <Icon v-if="icon" class="input-icon"  :icon="icon"></Icon>
    <input :class="[
      ['input-color-' + color],
      ['input-size-' + size],
      [icon ? 'input-with-icon' : '']
  ]" v-model="inputValue" class="input-base w-full" ref="input" :accept="accept" :type="type" :disabled="disabled"
      :placeholder="placeholder">
  </div>

</template>
