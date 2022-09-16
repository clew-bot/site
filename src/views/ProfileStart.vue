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



  .bodys {
    padding-left: 280px !important;
  }

</style>
