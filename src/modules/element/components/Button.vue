<script setup lang="ts">
import type { ButtonColor, Buttonsize, ButtonType } from '../types/button';
import type { IconType } from '../types/icons';
import Icon from './Icon.vue';

const { disabled, type = 'button', color = 'blue', size = 'md' } = defineProps<{
    disabled?: boolean,
    type?: ButtonType,
    color?: ButtonColor,
    size?: Buttonsize,
    icon?: IconType,
    variant?: undefined
}>()

</script>
<template>
    <button :class="[
        ['button-color-' + color],
        ['button-size-' + size],
    ]" class="button-base flex flex-row items-center justify-center gap-2" :type="type" :disabled="disabled">
        
        <Icon v-if="icon" :icon="icon"></Icon>
        <p v-if="$slots.default" :class="{ hidden: icon }" class="md:block">

            <slot>
              
            </slot>
        </p>
    </button>
</template>
