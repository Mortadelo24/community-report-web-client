<script setup lang="ts">
import { Report } from '@/services';
import DateTime from '@/modules/element/components/DateTime.vue';

const {report} = defineProps<{
    report: Report
}>()
</script>
<template>
<div class="flex flex-row gap-4 items-center justify-between">
<p>{{ report.complaintId }}</p>
<DateTime :date="report.created_at"></DateTime>
</div>
</template>
