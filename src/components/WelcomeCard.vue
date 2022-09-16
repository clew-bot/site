<script setup lang="ts" >
    import { reactive, ref, computed, watch, defineProps } from 'vue';
    import { defineStore } from 'pinia';
    import { useCounterStore, useThemeStore } from "../stores/themeStore";

    import Macbook from '@/assets/logos/macbook.jpg'
    import Green from "@/assets/images/green.jpg";
    import Blue from "@/assets/images/blue.jpg";
    import Red from "@/assets/images/red.jpg";


    interface Description {
        title: string;
        headline: string | null;
        descriptionOne: string | null;
        descriptionTwo: string | null;
        descriptionThree: string | null;

    }
    const descriptor = reactive<Description>({
        title: 'Hi I\'m Chad 👋',
        headline: "Full Stack Engineer",
        descriptionOne: 'I\'m a Full Stack Software Engineer by trade in Southern California.',
        descriptionTwo: 'I enjoy coding, playing disc golf, and spending time with my family',
        descriptionThree: 'Here\'s a brief tour of what I\'ve been working on.'
    });

    const clicked = ref(false);
    const clickHandler = () => {
        clicked.value = !clicked.value;
    }

    const themeStore = useThemeStore();

    const selected = ref("");
    watch(selected, (val) => {
        console.log("Watching! ", val)
        themeStore.toggleTheme(val);
    });



</script>

<template>
  <section>
    <div class="hello-wrapper">
        <div class="leftSide">
          <div class="headlineBox">
            <h1 :class="themeStore.theme+'hiIm'">{{descriptor.title}}</h1>
          </div>
          <div class="headlineBox2">
            <h3 :class="themeStore.theme+'headline'">{{descriptor.headline}}</h3>
            </div>
            <div class="description">
                <h3>{{descriptor.descriptionOne}}</h3>
                <h3>{{descriptor.descriptionTwo}}</h3>
                <h3>{{descriptor.descriptionThree}}</h3>
            </div>
            <div class="outer-bg">
        <button
          class="say-something"
          @click="clickHandler"
          :class="{ isCLicked: clicked }"
          ><i>Resume</i></button
        >
      </div>
      <select name="Colors" id="colors" v-model="selected">
        <option value="" selected disabled>Choose a Theme</option>
        <option  value="default">Default</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        </div>
        <div class="rightSide" v-if="themeStore.theme ==='default'">
            <img class="macbook" :src="Macbook" alt="Macbook" />
        </div>
        <div v-else-if="themeStore.theme === 'red'">
            <img class="macbook" :src="Red" alt="Macbook" />
        </div>
        <div v-else-if="themeStore.theme === 'blue'">
            <img class="macbook" :src="Blue" alt="Macbook" />
        </div>
        <div v-else-if="themeStore.theme === 'green'">
            <img class="macbook" :src="Green" alt="Macbook" />
        </div>
 
    </div>
  
  </section>

</template>


<style>
  
  select {
    appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  }

.headlineBox {
    background: rgb(18, 18, 18);
    width: fit-content;
    text-transform: uppercase;
    /* transform: rotate(-6deg); */
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
}
.headlineBox2 {
    background: rgb(18, 18, 18);;
    width: fit-content;
    text-transform: uppercase;

    border-bottom-right-radius: 5px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    /* transform: rotate(-6deg); */
}

.say-something {
  border-radius: 10px;
  font-size: 16px;
  margin-top: 5px;
  transform: translateY(-1.225rem);
  text-transform: none;
  letter-spacing: 0px;
  padding: 10px !important;
  color: rgb(252, 252, 252);
  font-weight: bolder;
  border: none;
  background: linear-gradient(
    90deg,
    rgb(28, 28, 27) 0%,
    rgb(66, 65, 64) 14.06%,
    rgb(70, 69, 69) 83.85%,
    rgb(35, 35, 34) 100%
  );
}
    .say-something:hover {
  transform: translateY(-1.425rem);
}
    .outer-bg {
  background: rgb(100, 101, 100);
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block !important;
  border-radius: 10px;
  transform: translateY(20px);
  height: 30px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
}
    .isCLicked {
  transition: all 0.3s ease-in-out;
  animation: clickDownAndUp 0.3s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.macbook {
    height: 34vw;
    width: 28vw;
    border-radius: 5px;
    transition: 0.3 all ease-in-out;
    animation: fadeIn 0.3s ease-in-out forwards;
}

.hello-wrapper {
    padding-top: 13rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    padding-bottom: 15rem;
}

.description {
    padding: 20px 16px 20px 16px;
    color: white;
    background: rgb(18, 18, 18);
    height: fit-content;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
}

@keyframes clickDownAndUp {
  0% {
  }
  30% {
    transform: translateY(-0.8rem);
  }
  60% {
    /* transform: translateY(0.225px); */
  }
  100% {
  }
}
</style>