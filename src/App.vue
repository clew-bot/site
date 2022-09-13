<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { reactive } from 'vue';

type LinkDefinition = {
  name: string;
  path: string;
}

interface Links {
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
    path: 'https://www.instagram.com/chad.lew/'
  }
});

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="links-container">
        <div class="link" v-for="links in navLinks" :key="links.name">
          <a :href="links.path" class="link" target="_blank">{{ links.name }}</a>
      </div>
    </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

  .link {
    padding: 0 2.2rem 1rem;
    background: rgb(76, 108, 80);
    font-weight: bolder;
    color: white;
    text-decoration: underline;
    transform: skewY(-5deg);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
  .links-container {
    display: flex;
    justify-content: space-between;

  }
.wrapper {
  padding: 10px 70px;
  margin: 0 auto;
  padding: 0 1rem;

  padding: 3rem;
  background: rgb(245, 245, 245);
}

@media screen and (max-width: 768px) {
  .links-container  {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
  

</style>
