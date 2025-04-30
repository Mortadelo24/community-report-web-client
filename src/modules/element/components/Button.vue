<script setup lang="ts">
type icon = 'logout';

const { disabled, type = 'button', color = 'blue'} = defineProps<{
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset',
    color?: 'green' | 'red' | 'blue' | 'cyan',
    size?: 'sm' | 'md' | 'lg',
    icon?: icon,
    variant?: undefined
}>()


</script>
<template>
    <button :class="['button-' + color]" class="button-base flex flex-row items-center justify-center" :type="type"
        :disabled="disabled">
        <span v-if="icon" class="material-symbols-outlined">
            {{ icon }}
        </span>
        <p :class="{hidden: icon}" class="md:block" >

            <slot >
                ButtonBase
            </slot>
        </p>
    </button>
</template>