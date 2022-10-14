

<script setup lang="ts">
import { reactive, watch, ref, computed } from 'vue';
import { useThemeStore } from '@/stores/themeStore';

export type LinkDefinition = {
  name: string;
  path: string;
  target: string;
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
    path: '/',
    target: '_self'
  },
  github: {
    name: 'Github',
    path: 'https://github.com/clew-bot',
    target: "_blank"
  },
  linkedin: {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/chad-l-7586711a0/',
    target: "_blank"
  },
  instagram: {
    name: 'Instagram',
    path: 'https://www.instagram.com/chad.lew/',
    target: "_blank"
  }
});

const themeStore = useThemeStore();
</script>
<template>

    <header :class="themeStore.theme+'wrapper'">
        <nav class="mobile">
          <div></div>

          <div class="links-container">
          <div class="link" v-for="links in navLinks" :key="links.name">
            <a :target="links.target" :href="links.path" class="target"><p>{{ links.name }}</p></a>
        </div>
      </div>
        </nav>
    </header>

  </template>
<style>

  .mobile {
    letter-spacing: -4px;
    display: flex;
    margin-top: 2.5rem !important;
    font-family: 'Silkscreen', cursive;
    
  }



 .target {

    display: flex;
    align-items: center;
    color: white;
    font-weight: bolder;

  }

  .link {
    font-size: 2rem;
    font-weight: bolder;
  }

  .link:hover {    
    background: rgb(91, 92, 87);
    text-decoration: none;
  }

  .links-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

.greenwrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: green;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    flex-flow: column;
    padding: 8rem 2rem;
    width: 14rem;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  .links-container  {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>