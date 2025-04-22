<script setup lang="ts">
</script>

<template>
    <div>
        <div class="flex flex-row justify-between">
            <p class="text-xl font-medium">Your admin panels</p>
        </div>

        <div class="flex flex-col gap-2 bg-orange-100 mt-2 p-4 rounded-lg">
            <CommunityListItem v-for="community in []" :community="community" ref="community.id">
            </CommunityListItem>
        </div> 
    </div>

</template>