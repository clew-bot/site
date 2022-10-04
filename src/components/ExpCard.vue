<script setup lang="ts">
import wordScrambler from '@/assets/proj/wordScrambler.png'
import altitude from "@/assets/proj/altitude.png"
import socially from "@/assets/proj/socially.png"
import visu from "@/assets/proj/visu.png"
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
          <h1>altitude</h1>
          <p>Custom Social Media site I wrote using Vue/Vuex and Express. Uses MongoDB and AWS for storage. Vuetify for theming and custom CSS. Add friends, make your custom profile, find friends, like users and more.</p>
          <p class="made-with">Made with Vue</p>
        </div>
        <div class="proj-bg">
          <img :src="socially" alt="word scrambling game" class="proj-image">
          <h1>socially</h1>
          <p>Custom Social Media site using React/Redux Toolkit and Express. Uses MongoDB for storage. Create a profile and talk to users in the global chat!</p>
          <p class="made-with">Made with React</p>

        </div>
        <div class="proj-bg">
          <img :src="wordScrambler" alt="word scrambling game" class="proj-image">
          <h1>word scrambler</h1>
          <p>Fun word scrambling game users can play up to 10 points. Guess the words in order and try to type it out. Yellow spaces are meant for spaces.</p>
          <p class="made-with">Made with Vue</p>
        </div>
        <div class="proj-bg">
          <img :src="visu" alt="word scrambling game" class="proj-image">
          <h1>visualizer</h1>
          <p>Visualize the sound of your music! Input any song and watch your audio move. Made with the AudioContext API and Canvas API.</p>
        </div>
      </div>
      <div>
        Want to see more? Check out my Github!
      </div>
  </div>
</template>
<style>

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
</style>