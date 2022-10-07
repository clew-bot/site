<script setup lang="ts">
import WelcomeCard from '@/components/WelcomeCard.vue'
import ProjectCard from '@/components/Technologies.vue'
import SideBar from '@/components/SideBar.vue'
import ExpCard from '@/components/ExpCard.vue'
import Contact from '@/components/Contact.vue'


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
  <div :class="themeStore.theme+'block'"><h2 class="quote">“The people who are crazy enough to think they can change the world are the ones who do.” <span><i>-Steve Jobs, CEO Apple</i></span></h2></div>
  <div class="bodys">
    <ProjectCard />
    </div>
    <div :class="themeStore.theme+'block'"></div>
    <div class="bodys">
    <ExpCard />
    </div>
    <div :class="themeStore.theme+'block'"></div>
    <div class="bodys">
    <Contact />
    </div>
    <div :class="themeStore.theme+'block'"></div>


  </main>
</template>

<style scoped>

  .quote {
    z-index: 9 !important;
    margin-left: 17rem;
    color: white !important;
    font-family: 'Silkscreen', cursive;
    padding-top: 1.1rem;
    /* font-weight: bolder; */
    font-size: 1.3rem;
    font-size: 1.5vw;
    /* letter-spacing: -4px */
  }

  @media screen and (max-width: 768px) {

    .quote {
      margin-left: 0px;
      font-size: 1.4rem;
      font-size: 2.3vw;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .author {
      font-size: .7rem;
    }
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
