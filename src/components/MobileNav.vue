
<script setup lang="ts">
import { reactive, watch, ref, computed } from 'vue';
import mobileicon from '@/assets/images/mobileicon.png';
import { defineStore } from 'pinia';
import { useOverFlowStore } from "../stores/themeStore";

export type LinkDefinition = {
  name: string;
  path: string;
}

export interface Links {
  home : LinkDefinition,
  github : LinkDefinition,
  linkedin : LinkDefinition,
  instagram : LinkDefinition,
}
    const navLinks = reactive<Links>({
  home: {
    name: 'Home',
    path: '/'
  },
  github: {
    name: 'Github',
    path: 'https://github.com/clew-bot'
  },
  linkedin: {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/chad-l-7586711a0/'
  },
  instagram: {
    name: 'Instagram',
    path: 'https://www.instagram.com/chad.lew/',
  }
});

const clicked = ref(true);
const overflowStore = useOverFlowStore();

const openNav = () => {
    clicked.value = !clicked.value;
    document.getElementsByTagName("body")[0].style.overflow = overflowStore.overflow;
    overflowStore.toggleOverflow();
}

</script>
<template>
  <nav>
    <div class="links-container">
        <div class="appbar" :class="{openBar: !clicked, closedBar: clicked}">
                <button id="mobile-btn"  @click="openNav"><img :src="mobileicon" alt=""></button>
        </div>
     
    </div>
    <div :class="{openNavigation: !clicked, closeNavigation: clicked}"   class="overlay-nav" > 
        <div :class="{slideInText: !clicked, slideOutText: clicked}" class="mobile-links" v-for="links in navLinks" :key="links.name">
            <a :href="links.path" class="target"><p>{{ links.name }}</p></a>
        </div>
    </div>
  </nav>
</template>


<style>

@media screen and (max-width: 768px)  {

    /* body{ 
        overflow: hidden;
    } */

    .mobile-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        font-size: 50px;
    }    

    .mobile-links > a {
        color: rgb(42, 41, 41) !important;
        font-family: 'Silkscreen', cursive;
    }

    .openBar {
    background: rgba(204, 196, 200, 0.964);
    transition: all 0.5s ease-in-out;

    }

    .closedBar {
        background: none;
        transition: all 0.3s ease-in-out;
    }

    .openNavigation {
        opacity: 1;
        transition: all 0.2s ease-in-out;
    }

    .closeNavigation {
        opacity: 0;
        transition: all 0.5s ease-in-out;
        /* display: none; */
    }

    .slideInText {
        animation: slideIn 0.5s ease-in-out;
    }

    .slideOutText {
        animation: slideOut 0.5s ease-in-out;
    }


.overlay-nav {
    height: 100%;
    width: 100vw;
    background: rgba(204, 196, 200, 0.964);
    z-index: 9 !important;
    position: fixed;
    overflow: hidden !important;
    transition: all 0.3s ease-in-out;
    padding-top: 22rem;

}

/* body {margin: 0; height: 100%; overflow: hidden} */

    #mobile-btn {
        border: none;
        background: none;
        padding: 10px;
    }

    .appbar {
        height: 4rem;
        width: 100%;
        /* background: rgb(190, 186, 186); */
        display: flex;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden !important;
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(0);
    }
    60% {
        transform: rotate(7deg);
    }
    80% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes slideOut {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100%);
    }
 
}
</style>