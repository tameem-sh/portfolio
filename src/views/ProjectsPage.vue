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
                :url="project.url"
            />
        </VContainer>
    </section>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
    {
        title: "Doctors",
        img: "/doctors.webp",
        description: "This project link patients with doctors, hospitals, pharmacies and medicine warehouses. It's in development stage using Vu3, Django and Docker.",
        url: "https://doctors.sy",
    },
    {
        title: "Chat app",
        img: "/chat app.webp",
        description: "This project is Chat application in development stage using Vue3 and django.",
        url: "https://tameem-chat-app.netlify.app/",
    },
    {
        title: "Leon portfolio",
        img: "/portfolio.webp",
        description: "This project is portfolio by leon template for training to use html and css.",
        url: "https://tameem-sh.github.io/Leon-portfolio/", 
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