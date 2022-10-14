<script setup lang="ts">
import { useCounterStore, useThemeStore } from "../stores/themeStore";
const themeStore = useThemeStore();


    </script>
<template>
  <section class="section">
    <div class="title-bg">
    <h1 class="experience">Experience</h1>
  </div>
  <div class="desc-bg">
    <h3 class="descriptions"><i>I've worked with a handful of amazing technologies over the years.</i></h3>
  </div>
    <div class="icon-container">
      <div class="col">
        <h2 :class="themeStore.theme+'expTitle'">Languages</h2>
        <div class="list-container">
        <p><span class="check">✔</span> Typescript</p>
        <p><span class="check">✔</span> Javascript</p>
        <p><span class="check">✔</span> HTML</p>
        <p><span class="check">✔</span> CSS</p>
        <p><span class="check">✔</span> Git</p>
        <p><span class="check">✔</span> Python</p>
      </div>

      </div>
      <div class="col">
        <h2 :class="themeStore.theme+'expTitle'">Servers</h2>
      <div class="list-container">
        <p><span class="check">✔</span> NodeJS</p>
        <p><span class="check">✔</span> ExpressJS</p>
        <p><span class="check">✔</span> Django</p>
      </div>
      </div>
      <div class="col">
        <h2 :class="themeStore.theme+'expTitle'">Libraries/Frameworks</h2>
        <div class="list-container">
        <p><span class="check">✔</span> Vue</p>
        <p><span class="check">✔</span> React</p>
        <p><span class="check">✔</span> Handlebars</p>
        <p><span class="check">✔</span> Tailwind</p>
        <p><span class="check">✔</span> Vuetify</p>
        <p><span class="check">✔</span> Chakra</p>
        <p><span class="check">✔</span> MaterialUI</p>
      </div>

      </div>
      <div class="col">
        <h2 :class="themeStore.theme+'expTitle'">Databases</h2>
        <div class="list-container">
        <p><span class="check">✔</span> SQL</p>
        <p><span class="check">✔</span> MongoDB</p>
        <p><span class="check">✔</span> Mongoose</p>
        <p><span class="check">✔</span> PostgreSQL</p>
      </div>
      </div>
      <div class="col">
        <h2 :class="themeStore.theme+'expTitle'">Devops</h2>
        <div class="list-container">
        <p><span class="check">✔</span> Docker</p>
        <p><span class="check">✔</span> AWS</p>
        <p><span class="check">✔</span> PostgreSQL</p>
      </div>
      </div>
      <div class="col">
        <h2 :class="themeStore.theme+'expTitle'">Agile</h2>
        <div class="list-container">
        <p><span class="check">✔</span> ClickUp</p>
        <p><span class="check">✔</span> Slack</p>
        <p><span class="check">✔</span> Trello</p>
        <p><span class="check">✔</span> Github</p>
      </div>

      </div>

    </div>
    <div class="exp-container">
      <div class="flex-cont">
        <div class="years-bg">
          <h2 :class="themeStore.theme+'first-header'"><i>2+</i></h2>
          <h2><i>Years of experience</i></h2>
        </div>
        <div class="years-bg">
          <h2 :class="themeStore.theme+'first-header'"><i>50+</i></h2>
          <h2><i>Projects completed</i></h2>
        </div>
      </div>
      
      <div class="flex-cont">
        <div class="years-bg">
          <h2 :class="themeStore.theme+'first-header'"><i>1,000+</i></h2>
          <h2><i>Commits on Github</i></h2>
        </div>
        <div class="years-bg">
          <h2 :class="themeStore.theme+'first-header'"><i>200+</i></h2>
          <h2><i>Hours on Udemy</i></h2>
        </div>
      </div>
      <div class="flex-cont">
        <div class="years-bg">
          <h2 :class="themeStore.theme+'first-header'"><i>50+</i></h2>
          <h2><i>Leetcode solved</i></h2>
        </div>
        <div class="years-bg">
          <h2 :class="themeStore.theme+'first-header'"><i>Countless</i></h2>
          <h2><i>Javascript executions</i></h2>
        </div>
      </div>
    </div>
  </section>
</template>



<style>

  @media (max-width: 768px) {
    .years-bg {
      padding: 0px !important;
    }
  }

  @keyframes flipCard {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  .first-header {
    color:purple;
  }

  .exp-container {
    display: flex;
    justify-content: center;
    align-items: center; 
    /* width: fit-content; */
    margin-top: 50px;
    margin-bottom: 5rem;

  }

  .years-bg {
    background: #f4efef;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    margin-bottom: 1rem;
    margin-right: 1rem;
    /* animation: flipCard 2s ease-in-out; */
  }

  .years-bg > h2 > i {
    font-weight: 600;

  }

  @media screen and (max-width: 768px) {
    .years-bg {
      padding: 5px !important;
    }

    .col {
      padding: 1.5rem;
    }
  }

  .check {
    color: #00b894;
  }

  .list-container {
    text-align: left;
    font-size: 1.2rem;
    color: #f5f5f5;
  }

  .descriptions > i {
    font-weight: 700 !important;
  }



  .col > h2 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
    /* color: #f5f5f5; */
    font-weight: 800;
  }

  .icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;

    margin-top: 7rem;
  }

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
  }

section {
  color: black;
}


.icons + .node {
  width: 300px;
}

.icons {
  width: 100px;
  height: 100px;
  margin: 10px;
}
</style>