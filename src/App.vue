<template>
  <vue-particles
    style="position: relative; z-index: -1"
    id="tsparticles"
    :particlesInit="particlesInit"
    url="./src/plugins/particlesjs-config.json"
  />
  <Header />
  <main>
    <Home id="home"/>
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact id="contact" />
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import Header from "@/components/TheHeader.vue";
import Home from "@/views/HomePage.vue"
import Skills from "@/views/SkillsPage.vue"
import Projects from "@/views/ProjectsPage.vue"
import Contact from "@/views/ContactPage.vue"

onMounted(_ => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})


import { loadSlim } from "tsparticles-slim";
const particlesInit = async (engine) => {
  await loadSlim(engine);
};


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>

<style lang="scss">
#app {
  background-color: $main-bg;
  cursor: url(@images/cursor/default.svg), default;
}


.v-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.v-enter-active {
  transition: all 0.5s ease-in-out;
}
.v-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
