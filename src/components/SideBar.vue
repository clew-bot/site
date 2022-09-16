

<script setup lang="ts">
import { reactive, watch, ref, computed } from 'vue';

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
    path: 'https://www.instagram.com/chad.lew/',
  }
});


</script>
<template>

    <header class="wrapper">
        <nav>
          <div class="links-container">
          <div class="link" v-for="links in navLinks" :key="links.name">
            <a :href="links.path" class="target" target="_blank">{{ links.name }}</a>
        </div>
      </div>
        </nav>
    </header>

  </template>
<style>



 .target {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
 

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
.wrapper {
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

}

@media screen and (max-width: 768px) {
  .links-container  {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>