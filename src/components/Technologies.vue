<script setup lang="ts">
    import tsLogo from "@/assets/logos/tsLogo.png";
    import jsLogo from "@/assets/logos/jsLogo.png";
    import nodeLogo from "@/assets/logos/nodeLogo.svg.png";
    import mdbLogo from "@/assets/logos/mdbLogo.webp";
    import expressLogo from "@/assets/logos/expressLogo.png";
    import dockerLogo from "@/assets/logos/dockerLogo.webp";
    import htmlLogo from "@/assets/logos/htmlLogo.webp";
    import cssLogo from "@/assets/logos/cssLogo.png";
    import sqlLogo from "@/assets/logos/sqlLogo.png";
    import nosqlLogo from "@/assets/logos/nosqlLogo.png";
    import cuLogo from "@/assets/logos/cuLogo.png";
    import trelloIcon from "@/assets/logos/trelloIcon.png";
    import pythonIcon from "@/assets/logos/pythonIcon.webp";
    import djangoIcon from "@/assets/logos/djangoIcon.png";
    import gitIcon from "@/assets/logos/gitIcon.png";
    import githubLogo from "@/assets/logos/githubLogo.png";
    import awsLogo from "@/assets/logos/awsLogo.png";
    import postLogo from "@/assets/logos/postLogo.png";
    import vueLogo from "@/assets/logos/vueLogo.png";
    import reactLogo from "@/assets/logos/reactLogo.png";
    import handlebarsLogo from "@/assets/logos/handlebarsLogo.webp";

    import vuetifyLogo from "@/assets/logos/vuetifyLogo.png";
    import chakraLogo from "@/assets/logos/chakraLogo.png";
    import muiLogo from "@/assets/logos/muiLogo.png";
    import tailwindLogo from "@/assets/logos/tailwindLogo.png";
    </script>
<template>
  <section class="section">
    <h1 class="experience">Experience</h1>
    <h3 class="descriptions"><i>I've worked with a handful of amazing technologies over the years.</i></h3>
    <div class="icon-container">
      <div class="col">
        <h2>Languages</h2>
      
        <img :src="tsLogo" alt="" class="icons">
        <img :src="jsLogo" alt="" class="icons">
        <img :src="htmlLogo" alt="" class="icons">
        <img :src="cssLogo" alt="" class="icons">
        <img :src="gitIcon" alt="" class="icons">
        <img :src="pythonIcon" alt="" class="icons">

      </div>
      <div class="col">
        <h2>Servers</h2>
        <img :src="nodeLogo" alt="" class="icons node">
        <img :src="expressLogo" alt="" class="icons">
        <img :src="djangoIcon" alt="" class="icons">

      </div>
      <div class="col">
        <h2>Libraries/Frameworks</h2>
        <img :src="vueLogo" alt="" class="icons">
        <img :src="reactLogo" alt="" class="icons">
        <img :src="tailwindLogo" alt="" class="icons">
        <img :src="vuetifyLogo" alt="" class="icons">
        <img :src="chakraLogo" alt="" class="icons">
        <img :src="muiLogo" alt="" class="icons">

      </div>
      <div class="col">
        <h2>Databases</h2>
        <img :src="mdbLogo" alt="" class="icons">
        <img :src="postLogo" alt="" class="icons">
  

      </div>
      <div class="col">
        <h2>Devops</h2>
        <img :src="dockerLogo" alt="" class="icons">
        <img :src="awsLogo" alt="" class="icons">
      </div>
      <div class="col">
        <h2>Agile Methodologies</h2>
        <img :src="cuLogo" alt="" class="icons">
        <img :src="trelloIcon" alt="" class="icons">
        <img :src="githubLogo" alt="" class="icons">

      </div>
      <div class="col">
        <h2>Other</h2>
        <img :src="sqlLogo" alt="" class="icons node">
        <img :src="nosqlLogo" alt="" class="icons">
        <img :src="handlebarsLogo" alt="" class="icons">

      </div>
    </div>
  </section>
</template>



<style>

  .descriptions {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: rgb(227, 226, 226);
  }

  .experience {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: rgb(227, 226, 226);
  }

  .col > h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: #f5f5f5;
  }

  .icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
    margin: 0 auto;
    max-width: 1200px;
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