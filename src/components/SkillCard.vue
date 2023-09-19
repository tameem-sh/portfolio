<template>
    <div class="skill">
        <v-progress-circular
            :size="80"
            :width="10"
            :model-value="value"
            :style="'--color:' + color"
            bg-color="transparent"
        >
            <Icon :icon="icon" class="icon"/>
        </v-progress-circular>
        <div>{{ name }}</div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue"

const props = defineProps({
    name: String,
    icon: String,
    color: String,
    value: Number,
})
</script>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-direction: column;
    align-items: center;

    :deep(svg) {
        color: transparent;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--color);
            transition: all 0.3s ease-in-out;
        }
    }

    .icon {
        width: 2.75rem;
        height: 2.75rem;
    }
}

.skill:hover {
    :deep(svg) {
        color: var(--color);
        transition: all 0.3s ease-in-out;
    }
}
</style>