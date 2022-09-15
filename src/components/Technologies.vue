<script setup lang="ts">
    import tsLogo from "@/assets/tsLogo.png";
    import jsLogo from "@/assets/jsLogo.png";
    import nodeLogo from "@/assets/nodeLogo.svg.png";
    import mdbLogo from "@/assets/mdbLogo.webp";
    import expressLogo from "@/assets/expressLogo.png";
    import dockerLogo from "@/assets/dockerLogo.webp";
    import htmlLogo from "@/assets/htmlLogo.webp";
    import cssLogo from "@/assets/cssLogo.png";
    import sqlLogo from "@/assets/sqlLogo.png";
    import nosqlLogo from "@/assets/nosqlLogo.png";
    import cuLogo from "@/assets/cuLogo.png";
    import trelloIcon from "@/assets/trelloIcon.png";
    import pythonIcon from "@/assets/pythonIcon.webp";
    import djangoIcon from "@/assets/djangoIcon.png";
    import gitIcon from "@/assets/gitIcon.png";
    import githubLogo from "@/assets/githubLogo.png";
    import awsLogo from "@/assets/awsLogo.png";
    import postLogo from "@/assets/postLogo.png";
    import vueLogo from "@/assets/vueLogo.png";
    import reactLogo from "@/assets/reactLogo.png";
    import handlebarsLogo from "@/assets/handlebarsLogo.webp";






    import vuetifyLogo from "@/assets/vuetifyLogo.png";
    import chakraLogo from "@/assets/chakraLogo.png";
    import muiLogo from "@/assets/muiLogo.png";
    import tailwindLogo from "@/assets/tailwindLogo.png";



















    </script>
<template>
  <section>
    <h1>Experience</h1>
    <p>I've worked with a handful of amazing technologies over the years. </p>
    <div class="icon-container">
      <div>
        <h2>Languages</h2>
      
        <img :src="tsLogo" alt="" class="icons">
        <img :src="jsLogo" alt="" class="icons">
        <img :src="htmlLogo" alt="" class="icons">
        <img :src="cssLogo" alt="" class="icons">
        <img :src="gitIcon" alt="" class="icons">
        <img :src="pythonIcon" alt="" class="icons">

      </div>
      <div>
        <h2>Servers</h2>
        <img :src="nodeLogo" alt="" class="icons node">
        <img :src="expressLogo" alt="" class="icons">
        <img :src="djangoIcon" alt="" class="icons">

      </div>
      <div>
        <h2>Libraries/Frameworks</h2>
        <img :src="vueLogo" alt="" class="icons">
        <img :src="reactLogo" alt="" class="icons">
        <img :src="tailwindLogo" alt="" class="icons">
        <img :src="vuetifyLogo" alt="" class="icons">
        <img :src="chakraLogo" alt="" class="icons">
        <img :src="muiLogo" alt="" class="icons">

      </div>
      <div>
        <h2>Databases</h2>
        <img :src="mdbLogo" alt="" class="icons">
        <img :src="postLogo" alt="" class="icons">
  

      </div>
      <div>
        <h2>Devops</h2>
        <img :src="dockerLogo" alt="" class="icons">
        <img :src="awsLogo" alt="" class="icons">
      </div>
      <div>
        <h2>Agile Methodologies</h2>
        <img :src="cuLogo" alt="" class="icons">
        <img :src="trelloIcon" alt="" class="icons">
        <img :src="githubLogo" alt="" class="icons">

      </div>
      <div>
        <h2>Other</h2>
        <img :src="sqlLogo" alt="" class="icons node">
        <img :src="nosqlLogo" alt="" class="icons">
        <img :src="handlebarsLogo" alt="" class="icons">

      </div>
   

   

  



    
  






    <div class="css-libraries">
    




    </div>















  </div>
  </section>
</template>



<style>

.icons + .node {
  width: 300px;
}

.icons {
  width: 100px;
  height: 100px;
  margin: 10px;
}
</style>