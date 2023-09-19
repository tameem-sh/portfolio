<template>
    <div class="project-container">
        <div 
            class="project-card"
            @mouseenter="show = true"
            @mouseleave="show = false"
        >
            <img
                :src="img"
            />

            <h5> {{ title }} </h5>

            <div :class="['description', (show ? 'show' : '')]">
                <p>{{ description }}</p>

                <a href="#" target="_blank">Demo</a>
            </div>
        </div>

        <div :class="['card-border', (show ? 'show' : '')]"></div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String,
    img: String,
    description: String,
})

const show = ref(false)
</script>

<style lang="scss" scoped>
.project-container {
    overflow: hidden;
    padding: 0.5rem;
    border-radius: $border-radius;

    .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: $gray-color;
        border-radius: $border-radius;
        color: $white-color;
        
        img {
            width: 300px;
            aspect-ratio: 16/9;
            border-start-start-radius: $border-radius;
            border-start-end-radius: $border-radius;
        }
        
        h5 {
            padding: 1rem;
        }
    
        .description {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 0.75rem;
            border-radius: $border-radius;
            color: $white-color;
            backdrop-filter: blur(3px);
            opacity: 0;
            z-index: -1;
            transform: scale3d(0, 0, 0);
            transition: all .4s linear;
            
            &.show {
                z-index: 1;
                opacity: 1;
                transform: scale3d(1, 1, 1);
                transition: all .4s linear;
            }
    
            a {
                position: absolute;
                bottom: 0.75rem;
                padding: 0.5rem 1rem;
                color: $white-color;
                border-radius: $border-radius;
                background-color: rgba($sky-color, 0.8);
                cursor: url(@images/cursor/pointer.svg), pointer;
        
                &:hover {
                    background-color: rgba($sky-color, 0.5);
                }
            }
        }
    }
    
    .card-border {
        opacity: 0;
        transition: all .4s linear;
    
        border-radius: $border-radius;
        position: absolute;
        z-index: -10;
        top: 0;
        right: 0;
        width: 104%;
        height: 104%;
        transform: translate(2%, -2%);
        background: repeating-conic-gradient(from var(--a), $blue-color 0%, $blue-color 5%, transparent 5%, transparent 40%, $blue-color 50%);
        animation: animate 4s linear infinite;
        
        &::before {
            content: '';
            border-radius: $border-radius;
            position: absolute;
            width: 100%;
            height: 100%;
            background: repeating-conic-gradient(from var(--a), $red-color 0%, $red-color 5%, transparent 5%, transparent 40%, $red-color 50%);
            animation: animate 4s linear infinite;
            animation-delay: -1s;
        }
    
        &.show {
            opacity: 1;
            transition: all .4s linear;
        }
    }
}

@property --a {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
}
@keyframes animate {
    0% {
        --a: 0deg;
    }
    100% {
        --a: 360deg;
    }
}

@media screen and (max-width: 340px) {
    img {
        width: 100% !important;
    }
}
</style>