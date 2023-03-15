<script setup lang="ts">
import wordScrambler from '@/assets/proj/wordScrambler.png'
import altitude from "@/assets/proj/altitude.png"
import socially from "@/assets/proj/socially.png"
import visu from "@/assets/proj/visu.png"
import altine from "@/assets/proj/altine.png"
import purplev3 from "@/assets/proj/purplev3.png"

import github from "@/assets/logos/github.png"
import Octocat from "@/assets/logos/Octocat.png"

import { useCounterStore, useThemeStore } from "../stores/themeStore";
const themeStore = useThemeStore();
</script>
<template>
  <div>
    <div :class="themeStore.theme+'title-bg'">
      <h1  :class="themeStore.theme+'experience'">Projects</h1>
    </div>
    <div :class="themeStore.theme+'desc-bg'">
      <h3 :class="themeStore.theme+'descriptions'"><i>Portfolio worthy applications</i><span>&nbsp;🙌</span></h3>
      </div>  
      <div class="proj-container">
        <div :class="`${themeStore.theme}proj-bg`">
          <img :src="purplev3" alt="purplev3" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">Purple v3</h1>
          <p class="proj-desc altine">Purple v3 is a MMORPG Discord bot game with multiple functionalities. Users can grind skills by hunting, fishing, chopping, entering the dungeon, compete in fishing contests, and much more. Uses DiscordJS library and MongoDB for the database. (Repository is currently private)</p>
          <p class="made-with">Made with Javascript </p>
          <a class="linkz" target="_blank" href="https://github.com/clew-bot/Purple_v3"><img :src="Octocat" alt="" class="octo"></a>
       
        </div>
        <div :class="themeStore.theme+'proj-bg'">
          <img :src="altine" alt="altine" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">altine</h1>
          <p class="proj-desc altine">Yet another custom Social Media site built with Nuxt 3, Typescript, Nitro, and Vue. Users can upload photos and videos to their profile/feed and share them. React with custom emoticons and favorite other users posts. Uses Vuetify for styling and. Completely customize your profile with descriptions, cover photos, videos, and more.</p>
          <p class="made-with">Made with Nuxt </p>
          <a class="linkz" target="_blank" href="https://github.com/clew-bot/Altine"><img :src="Octocat" alt="" class="octo"></a>
       
        </div>
        <div :class="themeStore.theme+'proj-bg'">
          <img :src="altitude" alt="altitude" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">altitude</h1>
          <p class="proj-desc">Custom Social Media site I wrote using Vue/Vuex and Express. Uses MongoDB and AWS for storage. Vuetify for theming and custom CSS. Add friends, make your custom profile, find friends, like users and more.</p>
          <p class="made-with">Made with Vue </p>
          <a class="linkz" target="_blank" href="https://github.com/clew-bot/Altitude"><img :src="Octocat" alt="" class="octo"></a>
       
        </div>
        <div :class="themeStore.theme+'proj-bg'">
          <img :src="socially" alt="socially" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">socially</h1>
          <p class="proj-desc">Custom Social Media site using React/Redux Toolkit and Express. Uses MongoDB for storage. Create a profile and talk to users in the global chat!</p>
          <p class="made-with">Made with React</p>
          <a class="linkz" target="_blank" href="https://github.com/clew-bot/Socially"><img :src="Octocat" alt="" class="octo"></a>

        </div>
        <div  :class="themeStore.theme+'proj-bg'">
          <img :src="wordScrambler" alt="word scrambling game" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">word scrambler</h1>
          <p class="proj-desc">Fun word scrambling game users can play up to 10 points. Guess the words in order and try to type it out. Yellow spaces are meant for spaces.</p>
          <p class="made-with">Made with Vue</p>
          <a class="linkz" target="_blank" href="https://github.com/clew-bot/Vue-Word-Scrambler"><img :src="Octocat" alt="" class="octo"></a>

        </div>
        <div :class="themeStore.theme+'proj-bg'">
          <img :src="visu" alt="visualizer" class="proj-image">
          <h1 :class="themeStore.theme+'proj-title'">visualizer</h1>
          <p class="proj-desc">Visualize the sound of your music! Input any song and watch your audio move. Made with the AudioContext API and Canvas API.</p>
          <p class="made-with">Made with Javascript</p>
          <a class="linkz" target="_blank" href="https://github.com/clew-bot/music-visualizer"><img :src="Octocat" alt="" class="octo"></a>
        </div>
      </div>
      <div class="seeMore">
        Want to see more? Check out my <a target="_blank" href="https://github.com/clew-bot">Github</a>!
      </div>
  </div>
</template>
<style>

.altine {
  font-size: .8rem;
}

.linkz{
  width: fit-content;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 1rem;
}

.linkz:hover{
  background: none !important;
}

.octo {
  margin-left: 15.5rem;
  height: 3rem;

}

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

  .purplev3 {
    height: auto;
    aspect-ratio: 1/1;
  }

  .made-with {
    position: absolute;
    bottom: 1rem;
  }

  .proj-bg {
    background-color: #31204d;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    height: 500px;
    border-radius: 1px;
    position: relative;
    width: 320px;
    border-radius: 10px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
  }

  .proj-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
    color: rgb(242, 240, 240);
    margin-top: 4rem;
  }

  .purpleCont {

    height: 590px !important;
  }
  
  .seeMore {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5rem;
    color: rgb(242, 240, 240);
  }
</style>