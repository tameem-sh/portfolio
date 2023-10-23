<template>
    <section class="container">
        <div class="home-data">
            <div class="title-container">
                <h3 data-aos="writing-animation">
                    <Icon icon="twemoji:waving-hand" />
                    Hi, I'm <span>Tameem</span> Al-Shtaiwi
                </h3>
            </div>
            <p>
                I'm a <span>&lt; Full stack Web Developer /&gt;</span> with a passion for creating beautiful,
                interactive, and user-friendly websites and applications.
            </p>

            <a class="button" href="/Tameem_Al-Shtaiwi_CV.pdf" download>Resume</a>
        </div>
        <div class="home-img">
            <!-- <img src="@images/home.gif" alt="Home Image" /> -->
            <img src="@images/R.png" alt="Home Image" />
        </div>
    </section>
</template>

<script setup>
import { Icon } from "@iconify/vue"
</script>

<style lang="scss" scoped>
section {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
    .home-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
        .title-container {
            width: fit-content;
        
            h3 {
                color: $white-color;
                letter-spacing: $letter-spacing;
                border-inline-end: 2px solid $white-color;
                padding-inline-end: 0.5rem;
                text-wrap: nowrap;
                overflow: hidden;

                span {
                    color: transparent;
                    -webkit-text-stroke: 1.5px $sky-color;
                    letter-spacing: $letter-spacing;
                }
            }
        }
        
        p {
            margin-top: 1rem;
            margin-inline-start: 1rem;
            color: $white-color;

            span {
                color: $sky-color;
            }
        }
        
        .button {
            margin-inline-start: 2rem;
            margin-top: 1rem;
            background-color: $sky-color;
            color: $white-color;
            padding: 0.5rem 2rem;
            border: none;
            border-radius: $border-radius;
            cursor: url(@images/cursor/pointer.svg), pointer;

            &:hover {
                background-color: rgba($sky-color, 0.8);
            }
        }
    }

    .home-img {
        img {
            width: 400px;
        }
    }
}


@media screen and (max-width: 991px) {
    section {
        flex-direction: column;

        .home-img {
            img {
                width: 500px;
                margin-top: 4rem;
            }
        }
    }
}
@media screen and (max-width: 991px) and (max-height: 750px) {
    section {
        padding-top: 4rem;
    }
}
@media screen and (max-width: 500px) {
    .home-img {
        img {
            width: calc(100vw - 10vw) !important;
            margin-top: 4rem !important;
        }
    }
}
@media screen and (max-width: 400px) {
    .title-container {    
        h3 {
            border-inline-end: none !important;
            padding-inline-end: 0 !important;
            text-wrap: wrap !important;
        }
    }
}
</style>