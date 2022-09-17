<script setup lang="ts">

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
        <h2>Languages</h2>
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
        <h2>Servers</h2>
      <div class="list-container">
        <p><span class="check">✔</span> NodeJS</p>
        <p><span class="check">✔</span> ExpressJS</p>
        <p><span class="check">✔</span> Django</p>
      </div>
        <!-- <img :src="nodeLogo" alt="" class="icons node">
        <img :src="expressLogo" alt="" class="icons">
        <img :src="djangoIcon" alt="" class="icons"> -->
      </div>
      <div class="col">
        <h2>Libraries/Frameworks</h2>
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
        <h2>Databases</h2>
        <div class="list-container">
        <p><span class="check">✔</span> SQL</p>
        <p><span class="check">✔</span> MongoDB</p>
        <p><span class="check">✔</span> Mongoose</p>
        <p><span class="check">✔</span> PostgreSQL</p>
      </div>
      </div>
      <div class="col">
        <h2>Devops</h2>
        <div class="list-container">
        <p><span class="check">✔</span> Docker</p>
        <p><span class="check">✔</span> AWS</p>
        <p><span class="check">✔</span> PostgreSQL</p>
      </div>
      </div>
      <div class="col">
        <h2>Agile Methodologies</h2>
        <div class="list-container">
        <p><span class="check">✔</span> ClickUp</p>
        <p><span class="check">✔</span> Slack</p>
        <p><span class="check">✔</span> Trello</p>
        <p><span class="check">✔</span> Github</p>
      </div>

      </div>

    </div>
    <div class="exp-container">
      <div class="years-bg">
      <h2><i>2+</i></h2>
      <h2><i>Years of Experience</i></h2>
      </div>
      <div class="years-bg">
        <h2><i>50+</i></h2>
        <h2><i>Projects Completed</i></h2>
      </div>
    </div>
  </section>
</template>



<style>

  .exp-container {
    display: flex;
    justify-content:flex-start;
    width: fit-content;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 5rem;
  }

  .years-bg {
    background: #f5f5f5;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    margin-bottom: 1rem;
 
  }

  .years-bg > h2 > i {
    font-weight: 600;
  }

  .check {
    color: #00b894;
  }

  .list-container {
    text-align: left;
    font-size: 1.2rem;
    color: #f5f5f5;
  }

   .desc-bg {
    background: #f5f5f5;
    width: fit-content;
    border-radius: 5px;
    margin-top: 3rem !important;
    padding: 10px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
   }

  .title-bg {
    background: #f5f5f5;
    width: fit-content;
    padding: 0 10px;
    margin-top: 3rem;
    border-radius: 5px;
    transform: skewY(-5deg);
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
  }

  .descriptions {
    text-align: left;
    font-size: 1.5rem;
    color: rgb(23, 23, 23);
  }

  .descriptions > i {
    font-weight: 700 !important;
  }

  .experience {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: rgb(23, 23, 23);

  }

  .col > h2 {
    font-size: 1.9rem;
    margin-bottom: 1rem;
    color: #f5f5f5;
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