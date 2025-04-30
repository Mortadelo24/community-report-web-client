<script setup lang="ts">
const {disabled, type = 'button', color = 'blue'} = defineProps<{
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset',
    color?: 'green' | 'red' | 'blue' | 'cyan',
    size?: 'sm' | 'md' | 'lg',
    variant?: undefined
}>()


</script>
<template>
    <button :class="['button-' + color]" class="button-base" :type="type" :disabled="disabled">
        <slot>
            ButtonBase
        </slot>
    </button>
</template>