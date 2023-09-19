<template>
    <section>
        <h3 data-aos="zoom-out-up">My projects</h3>
        <VContainer>
            <ProjectCard
                data-aos="zoom-out-up"
                v-for="(project, i) in projects"
                :key="i"
                :title="project.title"
                :img="project.img"
                :description="project.description"
            />
        </VContainer>
    </section>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
    {
        title: "Test WebSite",
        img: "/test.png",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver",
    },
    {
        title: "Test WebSite",
        img: "/test.png",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver",
    },
    {
        title: "Test WebSite",
        img: "/test.png",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver",
    },
]
</script>

<style lang="scss" scoped>
section {
    margin-block: 5rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $white-color;
    
    h3 {
        letter-spacing: $letter-spacing;
    }

    .v-container {
        margin-top: 2.5rem;    
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem;
        overflow: hidden;
    }
}
</style>