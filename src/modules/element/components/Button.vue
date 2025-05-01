<script setup lang="ts">
import type { ButtonColor, ButtonIcon, Buttonsize, ButtonType } from '../types/button';

const { disabled, type = 'button', color = 'blue', size = 'md' } = defineProps<{
    disabled?: boolean,
    type?: ButtonType,
    color?: ButtonColor,
    size?: Buttonsize,
    icon?: ButtonIcon,
    variant?: undefined
}>()

</script>
<template>
    <button :class="[
        ['button-color-' + color],
        ['button-size-' + size],
    ]" class="button-base flex flex-row items-center justify-center" :type="type" :disabled="disabled">
        <span v-if="icon" class="material-symbols-outlined">
            {{ icon }}
        </span>
        <p :class="{ hidden: icon }" class="md:block">

            <slot>
                {{ 'Button' + color }}
            </slot>
        </p>
    </button>
</template>