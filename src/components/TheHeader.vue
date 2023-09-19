<template>
  <header :class="[y > 0 ? 'active' : '']">
    <v-container>
      <div class="logo">
        <a href="#home">
          <img
            src="@images/logo.svg"
            alt="LOGO"
            style="height: 100%"
          />
        </a>
      </div>
      <Icon class="navToggle" icon="ph:list-duotone" width="32" height="32" @click="navToggle = !navToggle" />
      <nav :class="[navToggle ? 'open' : '']">
        <ul>
          <li
            v-for="link in links"
            :key="link.href"
            @click="changeRoute(link.href)"
          >
            <a
              :href="`#${link.href}`"
              :class="{
                  ActiveLink: isActive(link.href),
              }"
            >
              <Icon :icon="link.icon" />
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </v-container>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";

import { useActive } from 'vue-use-active-scroll'

import { useWindowScroll } from "@vueuse/core";


const { y } = useWindowScroll();


const links = ref([
    { href: 'home', label: 'Home', icon: 'ph:house-fill' },
    { href: 'skills', label: 'Skills', icon: "ph:bookmark-simple-fill" },
    { href: 'projects', label: 'Projects', icon: "ph:dots-nine-bold" },
    { href: 'contact', label: 'Contact', icon: "ph:phone-duotone" },
])

const targets = computed(() => links.value.map(({ href }) => href))

const { isActive, setActive } = useActive(targets, { overlayHeight: (window.innerHeight / 3) })

const navToggle = ref(false)

const changeRoute = link => {
  setActive(link)
  navToggle.value = false
}

window.addEventListener('scroll', _ => {
  navToggle.value = false
})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 3rem;
  width: 100%;
  display: flex;
  transition: all ease-in-out 0.5s;

  &.active {
    background-color: rgba($main-bg, 0.9);
    box-shadow: inset 0px -5px 30px 20px rgba(255, 255, 255, 0.2);
  }

  .v-container {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    
    .logo {
      z-index: 1000;
      height: 2.5rem;
      display: inline-flex;
  
      a {
        cursor: url(@images/cursor/pointer.svg), pointer;
      }
    }
  
    .navToggle {
      z-index: 1000;
      display: none;
      color: $light-gray-color;
    }
  
    ul {
      display: inline-flex;
      gap: 1rem;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: $letter-spacing;
      margin: 0;
    }
  }
}


@media screen and (max-width: 600px ) {
  .navToggle {
    display: block !important;
    cursor: url(@images/cursor/pointer.svg), pointer;
  }

  nav {
    display: flex !important;
    justify-content: center;
    background-color: $card-bg;
    padding-block: 4rem 2rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    border-end-start-radius: 50%;
    border-end-end-radius: 50%;
    transform: translateY(-100%);
    transition: all .6s linear;
    backdrop-filter: blur(3px);
    
    &.open {
      border-end-start-radius: 0;
      border-end-end-radius: 0;
      transform: translateY(0);
    }

    ul {
      flex-direction: column;
      padding: 0;
    }
  }
}

@keyframes changeWidth {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}

@media (any-pointer: fine) {
  li a {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: $light-gray-color;
    cursor: url(@images/cursor/pointer.svg), pointer;

    &.ActiveLink,
    &:hover {
      color: $sky-color;
      text-shadow: 0px 0px 10px rgba($sky-color, 0.9);

      &::after {
        content: "";
        width: 70%;
        height: 3px;
        position: absolute;
        bottom: -5px;
        inset-inline-start: 0;
        background-color: $sky-color;
        box-shadow: 0px 0px 10px rgba($sky-color, 0.9);
        border-end-start-radius: 8px;
        border-start-end-radius: 8px;
        animation: changeWidth 0.3s ease-in-out;
      }
    }
  }
}
@media (any-pointer: coarse) {
  li a {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: $light-gray-color;
    cursor: url(@images/cursor/pointer.svg), pointer;

    &.ActiveLink {
      color: $sky-color;
      text-shadow: 0px 0px 10px rgba($sky-color, 0.9);

      &::after {
        content: "";
        width: 70%;
        height: 3px;
        position: absolute;
        bottom: -5px;
        inset-inline-start: 0;
        background-color: $sky-color;
        box-shadow: 0px 0px 10px rgba($sky-color, 0.9);
        border-end-start-radius: 8px;
        border-start-end-radius: 8px;
        animation: changeWidth 0.3s ease-in-out;
      }
    }
  }
}
</style>
