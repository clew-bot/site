<script setup lang="ts">
import { reactive } from 'vue';

const formSubmission = reactive({
  fullName: '',
  email: '',
  message: '',
});

const sendForm = async () => {
  console.log(formSubmission);
  const response = await fetch("https://hook.us1.make.com/xph38w7k5be2tleb92oycg53nmjb63k5", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formSubmission),
  });
  const data = await response.json()
    console.log(data)   
};

console.log(formSubmission);



</script>

<template>
  <footer>
    <div class="contact-container">
        <h1 class="getIn">Contact</h1>
        <div class="input-container">
        <input  placeholder="Name" v-model="formSubmission.fullName">
        <input placeholder="Email" v-model="formSubmission.email">
        <textarea placeholder="Message" v-model="formSubmission.message"></textarea>
        <button @click="sendForm">Send</button>
    </div>
    </div>
  </footer>
</template>



<style>

    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        /* background: hotpink; */
        /* padding: 100px; */
        padding: 20px;
        /* background: rgb(46, 45, 45); */
        border-radius: 10px;
        /* width: fit-content; */
        margin: 100px;
        /* margin-left: 33%; */
        /* background: rgb(75, 72, 72); */
    }

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 30px;
        border-radius: 10px;

    }

    .getIn {
        font-size: 3rem;
        /* margin-bottom: 2rem; */
        font-weight: bolder;
    }

    input {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 10px;
        border: none;
        outline: none;
        background: #e7e9eb;
        color: rgb(11, 11, 11);
        font-size: 1.2rem;
        border: solid 2px rgb(138, 21, 211);
        /* width: 50%; */
        font-family: 'Ubuntu', sans-serif;

    }

    textarea {
        margin-top: 1rem;
        padding: 1rem;
        /* width: 85%; */
        border-radius: 10px;
        border: none;
        outline: none;
        background: #e7e9eb;
        color: rgb(8, 6, 6);
        font-size: 1.2rem;
        width: 15.3rem;
        border: solid 2px rgb(138, 21, 211);
        font-family: 'Ubuntu', sans-serif;

    }

</style>