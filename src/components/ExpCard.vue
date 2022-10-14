<script setup lang="ts">
import wordScrambler from '@/assets/proj/wordScrambler.png'
import altitude from "@/assets/proj/altitude.png"
import socially from "@/assets/proj/socially.png"
import visu from "@/assets/proj/visu.png"
import { useCounterStore, useThemeStore } from "../stores/themeStore";
const themeStore = useThemeStore();
</script>
<template>
  <div>
    <div class="title-bg">
      <h1 class="experience">Projects</h1>
    </div>
    <div class="desc-bg">
      <h3 class="descriptions"><i>Portfolio worthy applications</i></h3>
      </div>  
      <div class="proj-container">
        <div class="proj-bg">
          <img :src="altitude" alt="word scrambling game" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">altitude</h1>
          <p class="proj-desc">Custom Social Media site I wrote using Vue/Vuex and Express. Uses MongoDB and AWS for storage. Vuetify for theming and custom CSS. Add friends, make your custom profile, find friends, like users and more.</p>
          <p class="made-with">Made with Vue</p>
        </div>
        <div class="proj-bg">
          <img :src="socially" alt="word scrambling game" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">socially</h1>
          <p class="proj-desc">Custom Social Media site using React/Redux Toolkit and Express. Uses MongoDB for storage. Create a profile and talk to users in the global chat!</p>
          <p class="made-with">Made with React</p>

        </div>
        <div class="proj-bg">
          <img :src="wordScrambler" alt="word scrambling game" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">word scrambler</h1>
          <p class="proj-desc">Fun word scrambling game users can play up to 10 points. Guess the words in order and try to type it out. Yellow spaces are meant for spaces.</p>
          <p class="made-with">Made with Vue</p>
        </div>
        <div class="proj-bg">
          <img :src="visu" alt="word scrambling game" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">visualizer</h1>
          <p class="proj-desc">Visualize the sound of your music! Input any song and watch your audio move. Made with the AudioContext API and Canvas API.</p>
          <p class="made-with">Made with Javascript</p>
        </div>
      </div>
      <div class="seeMore">
        Want to see more? Check out my <a target="_blank" href="https://github.com/clew-bot">Github</a>!
      </div>
  </div>
</template>
<style>

@media screen and (max-width: 768px) {
  .proj-bg {
    background-color: #606268 !important;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width:  100% !important;
    height: 500px;
    border-radius: 5px !important;
    position: relative;
  }
  .proj-image {
    width: 100% !important;
    height: 50% !important;
    border-radius: 10px;
  }
}

  .proj-desc {

    font-weight: 400;
    color: rgb(211, 225, 217);

  }

  .proj-title {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: .7rem;
    color: rgb(197, 102, 238);
  }

  .proj-image {
    width: 300px;
    height: 200px;
    border-radius: 10px;
  }

  .made-with {
    position: absolute;
    bottom: 1rem;
  }

  .proj-bg {
    background-color: #1a202c;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    height: 500px;
    border-radius: 1px;
    position: relative;
  }

  .proj-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
    color: rgb(242, 240, 240);
    margin-top: 4rem;
  }
  
  .seeMore {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5rem;
    color: rgb(242, 240, 240);
  }
</style>