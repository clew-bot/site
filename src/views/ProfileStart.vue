<script setup lang="ts">
import WelcomeCard from '@/components/WelcomeCard.vue'
import ProjectCard from '@/components/Technologies.vue'
import SideBar from '@/components/SideBar.vue'

import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore();


</script>

<template>
  <main>
    <SideBar/>
    <div class="bodys">
    <WelcomeCard />
  </div>
  <div :class="themeStore.theme+'block'"></div>
  <div class="bodys">
    <ProjectCard />
    </div>

  </main>
</template>

<style scoped>


  .blueblock {
    height: 100px;
    background: blue;
    transition: all 0.3s ease-in-out;

  }
  .greenblock {
    height: 100px;
    background: green;
    transition: all 0.3s ease-in-out;

  }
  .bodys {
    padding-left: 280px !important;
  }

</style>
