<script setup lang="ts" >
    import { reactive } from 'vue';
    import Macbook from '@/assets/macbook.jpg'

    interface Description {
        title: string;
        descriptionOne: string | null;
        descriptionTwo: string | null;
        descriptionThree: string | null;

    }

    const descriptor = reactive<Description>({
        title: 'Hi I\'m Chad! 👋',
        descriptionOne: 'I\'m a Full Stack Software Engineer by trade in Southern California.',
        descriptionTwo: 'I enjoy coding, playing disc golf, and spending time with my family',
        descriptionThree: 'Here\'s a brief tour of what I\'ve been working on.'
    });
</script>

<template>
  <section>
    <div class="hello-wrapper">
        <div class="leftSide">
            <h1 class="hiIm">{{descriptor.title}}</h1>
            <div class="description">
                <h3>{{descriptor.descriptionOne}}</h3>
                <h3>{{descriptor.descriptionTwo}}</h3>
                <h3>{{descriptor.descriptionThree}}</h3>
            </div>
        </div>
        <div class="rightSide">
            <img class="macbook" :src="Macbook" alt="Macbook" />
        </div>
 
    </div>
  
  </section>
  <hr/>
</template>


<style>

.rightSide {

}

.macbook {
    height: 30rem;
    border-radius: 5px;
}

.hello-wrapper {
    margin-top: 5rem;
    /* max-width: 20rem; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;

}

.description {
    padding: 20px 16px 80px 16px;

}

.hiIm {
    font-size: 5rem;
    font-weight: bolder;
    text-align: left;
    padding: 1rem;
}
</style>