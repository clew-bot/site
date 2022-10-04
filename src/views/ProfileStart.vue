<script setup lang="ts">
import WelcomeCard from '@/components/WelcomeCard.vue'
import ProjectCard from '@/components/Technologies.vue'
import SideBar from '@/components/SideBar.vue'
import ExpCard from '@/components/ExpCard.vue'

import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore();


</script>

<template>
  <main>
    <div class="sidebar">
    <SideBar/>
  </div>
    <div class="bodys">
    <WelcomeCard />
  </div>
  <div :class="themeStore.theme+'block'"></div>
  <div class="bodys">
    <ProjectCard />
    </div>
    <div :class="themeStore.theme+'block'"></div>
    <div class="bodys">
    <ExpCard />
    </div>
    <div :class="themeStore.theme+'block'"></div>
  </main>
</template>

<style scoped>

  @media screen and (max-width: 768px) {
    .sidebar {
      display: none;
    }

    .bodys {
      padding-left: 0px !important
    }
  }
    .bodys {
      padding-left: 280px;
  }

</style>
