<script setup lang="ts" >
    import { reactive, ref, computed, watch, defineProps } from 'vue';
    import { defineStore } from 'pinia';
    import { useCounterStore, useThemeStore } from "../stores/themeStore";
    import Programmer from '@/components/Programmer.vue'

    import Green from "@/assets/images/green.jpg";
    import Blue from "@/assets/images/blue.jpg";
    import Red from "@/assets/images/red.jpg";

    import vSelect from 'vue-select'

    interface Description {
        title: string;
        emoji: string;
        headline: string | null;
        descriptionOne: string | null;
        descriptionTwo: string | null;
        descriptionThree: string | null;

    }
    const descriptor = reactive<Description>({
        title: 'Hi I\'m Chad',
        emoji: '👋',
        headline: "Full Stack Engineer",
        descriptionOne: 'I\'m a Full Stack Software Engineer by trade in Southern California.',
        descriptionTwo: 'I enjoy coding, playing disc golf, and spending time with my family.',
        descriptionThree: 'Here\'s a brief tour of what I\'ve been working on.'
    });

    const clicked = ref(false);
    const clickHandler = () => {
        clicked.value = !clicked.value;
    }

    const themeStore = useThemeStore();

    const selected = ref("");
    watch(selected, (val: any) => {
        themeStore.toggleTheme(val.value);
    });

    const options = [
        { value: 'default', label: 'Default' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
        { value: 'red', label: 'Red' },
    ]


</script>

<template>
  <section>
    <div class="hello-wrapper">
        <div class="leftSide">
          <div class="headlineBox">
            <h1 :class="themeStore.theme+'hiIm'">{{descriptor.title}} <span class="wavy"> {{descriptor.emoji}}</span></h1>
          </div>
          <div class="headlineBox2">
            <h3 :class="themeStore.theme+'headline'">{{descriptor.headline}}</h3>
            </div>
            <div class="description">
                <h3>{{descriptor.descriptionOne}}</h3>
                <h3>{{descriptor.descriptionTwo}}</h3>
                <h3>{{descriptor.descriptionThree}}</h3>
            </div>
    
<div style="width: 10rem; padding: 1rem" class="select-container">
      <v-select placeholder="Theme" class="style-chooser" :options="options" name="Colors" id="colors" v-model="selected">

        </v-select>
      </div>
        </div>
        <div class="rightSide">
            <!-- <img class="macbook" :src="Macbook" alt="Macbook" /> -->
            <Programmer :theme="themeStore.theme" class="programmer" />
        </div>
    </div>
  
  </section>

</template>


<style>

  .programmer {
  }

  .wavy {
  animation-name: wave-animation; 
  animation-duration: 2.5s;       
  animation-iteration-count: infinite; 
  transform-origin: 70% 70%;       
  display: inline-block;
  }

  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
}

  .select-container {
    margin-top: 2rem;
  }

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #9e9fa2;
  border: none;
  color: #151516;
  text-transform: lowercase !important;
  font-variant: small-caps;
  font-size: 1rem;
  font-weight: bolder;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
  
}


  


.headlineBox {
    /* background: rgb(18, 18, 18); */
    width: fit-content;
    text-transform: uppercase;
    /* transform: rotate(-6deg); */
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    /* box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75); */
}
.headlineBox2 {
    /* background: rgb(18, 18, 18); */
    width: fit-content;
    text-transform: uppercase;

    border-bottom-right-radius: 5px;
    /* box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75); */
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

@media screen and (max-width: 768px) {
  .hello-wrapper {
    padding-top: 5rem !important;
  }
}
  


.hello-wrapper {
    padding-top: 13rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    padding-bottom: 15rem;
    flex-wrap: wrap;
}

.description {
    padding: 20px 16px 20px 16px;
    color: white;
    /* background: rgb(18, 18, 18); */
    height: fit-content;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    /* box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75); */
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