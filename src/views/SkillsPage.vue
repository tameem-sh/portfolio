<template>
    <section>
        <VContainer>
            <h3 data-aos="fade-zoom-in" data-aos-duration="2000">My skills</h3>

            <div
                class="skills-tap" 
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
            >
                <div class="skills-title">
                    <h5>Front-end</h5>
                </div>

                <div class="skills-container">
                    <SkillCard
                        class="skill"
                        v-for="( skill, i ) in front"
                        :key="i"
                        :value="skill.value"
                        :color="skill.color"
                        :icon="skill.icon"
                        :name="skill.name"
                    />
                </div>
            </div>

            <div
                class="skills-tap" 
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
            >
                <div class="skills-title">
                    <h5>Back-end</h5>
                </div>
                <div class="skills-container">
                    <SkillCard
                        class="skill"
                        v-for="( skill, i ) in back"
                        :key="i"
                        :value="skill.value"
                        :color="skill.color"
                        :icon="skill.icon"
                        :name="skill.name"
                    />
                </div>
            </div>

            <div
                class="skills-tap" 
                data-aos="fade-zoom-in"
                data-aos-duration="2000"
            >
                <div class="skills-title">
                    <h5>Tools</h5>
                </div>
                <div class="skills-container">
                    <SkillCard
                        class="skill"
                        v-for="( skill, i ) in tools"
                        :key="i"
                        :value="skill.value"
                        :color="skill.color"
                        :icon="skill.icon"
                        :name="skill.name"
                    />
                </div>
            </div>
        </VContainer>
    </section>
</template>

<script setup>
import SkillCard from "@/components/SkillCard.vue";

const front = [
    {
        name: "HTML",
        icon: "skill-icons:html",
        color: "#e14e1d",
        value: 90,
    },
    {
        name: "CSS",
        icon: "skill-icons:css",
        color: "#0277bd",
        value: 90,
    },
    {
        name: "SASS/SCSS",
        icon: "vscode-icons:file-type-scss",
        color: "#cd6799",
        value: 70,
    },
    {
        name: "Bootstrap",
        icon: "skill-icons:bootstrap",
        color: "#8700ff",
        value: 100,
    },
    {
        name: "Tailwind",
        icon: "vscode-icons:file-type-tailwind",
        color: "#44a8b3",
        value: 90,
    },
    {
        name: "JavaScript",
        icon: "skill-icons:javascript",
        color: "#f0db4f",
        value: 80,
    },
    {
        name: "Vue",
        icon: "logos:vue",
        color: "#41B883",
        value: 80,
    },
    {
        name: "React",
        icon: "logos:react",
        color: "#00d8ff",
        value: 60,
    },
]

const back = [
    {
        name: "Python",
        icon: "vscode-icons:file-type-python",
        color: "#ffde57",
        value: 90,
    },
    {
        name: "Django",
        icon: "vscode-icons:file-type-django",
        color: "#44b78b",
        value: 70,
    },
    {
        name: "SQL",
        icon: "vscode-icons:file-type-sql",
        color: "#ffda44",
        value: 90,
    },
]

const tools = [
    {
        name: "API",
        icon: "vscode-icons:file-type-json",
        color: "#f5de19",
        value: 90,
    },
    {
        name: "Docker",
        icon: "logos:docker-icon",
        color: "#2396ed",
        value: 80,
    },
    {
        name: "Git",
        icon: "devicon:git",
        color: "#f34f29",
        value: 80,
    },
    {
        name: "Jira",
        icon: "logos:jira",
        color: "#0254ce",
        value: 70,
    },
    {
        name: "Bitbucket",
        icon: "logos:bitbucket",
        color: "#0254ce",
        value: 70,
    },
]
</script>

<style lang="scss" scoped>
section {
    background: rgba($test-bg, 0.8);
    padding-block: 6rem 3rem;
    overflow: hidden;

    .v-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;

        h3 {
            color: $white-color;
            letter-spacing: $letter-spacing;
        }

        .skills-tap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: fit-content;
            
            &:hover {
                .skills-title {
                    &::after {
                        width: 120%;
                        inset-inline-start: -10%;
                        box-shadow: 0px 3px 10px 4px rgba($sky-color, 0.9);
                        transition: all 0.4s ease-in-out;
                    }

                    h5 {
                        transform: translateY(-0.5rem);
                        transition: all 0.4s ease-in-out;
                    }
                }
            }

            .skills-title {
                position: relative;

                &::after {
                    content: "";
                    width: 0;
                    height: 3px;
                    position: absolute;
                    bottom: -8px;
                    inset-inline-start: 50%;
                    background-color: $sky-color;
                    box-shadow: 0px 3px 10px rgba($sky-color, 0.9);
                    transition: all 0.4s ease-in-out;
                }

                h5 {
                    position: relative;
                    color: $light-gray-color;
                    letter-spacing: $letter-spacing;
                    transition: all 0.4s ease-in-out;
                }
            }
    
            .skills-container {
                color: $white-color;
                margin-block: 2rem 3rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 3rem;
            }
        }
    }
}
</style>
