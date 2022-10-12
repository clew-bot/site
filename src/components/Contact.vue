<script setup lang="ts">
import { reactive } from 'vue';
import contact from '@/assets/svgs/contact.jpg';
import MobilePhone from '@/components/MobilePhone.vue'

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
</script>

<template>
  <footer>
    <div class="contact-container">
        <h1 class="getIn">Contact 📇</h1>
      <div class="container">
        <div class="contactIcon">
          <MobilePhone class="mobile-phone"/>
        </div>
        <div class="bg-wave"></div>
        <div class="input-container">
     
        <input  placeholder="Name" v-model="formSubmission.fullName">
        <input placeholder="What's your email?" v-model="formSubmission.email">
        <textarea placeholder="Your message..." v-model="formSubmission.message"></textarea>
        <button class="send-btn" @click="sendForm">Send</button>
    </div>

  </div>
    </div>
  </footer>
</template>



<style>
@media screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center !important;
    gap: 0 !important; 
  }
  .mobile-phone {
    padding-left: 55px;
  }
  .input-container {

    margin-bottom: 5rem;
  }
}

  .send-btn {
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    margin-top: 1rem;
  }

  .mobile-phone {
    /* margin: 100px; */
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 5rem;
    align-items: center;
    /* background: rgb(46, 46, 46); */
    border-radius: 5px;
    width: 100%;
  }

    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 10px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        /* padding: 10rem; */
        border-radius: 10px;

    }

    .getIn {
        font-size: 3rem;
        /* margin-bottom: 2rem; */
        font-weight: bolder;
        margin-bottom: -2rem;
        margin-top: 2rem;
    }

    input {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 10px;
        border: none;
        outline: none;
        width: 22rem;
        background: #e7e9eb;
        color: rgb(11, 11, 11);
        font-size: 1.2rem;
        /* border: solid 2px rgb(138, 21, 211); */
        /* width: 50%; */
        font-family: 'Ubuntu', sans-serif;

    }

    textarea {
        margin-top: 1rem;
        padding: 1rem;
        /* width: 85%; */
        width: 22rem;

        border-radius: 10px;
        border: none;
        outline: none;
        background: #e7e9eb;
        color: rgb(8, 6, 6);
        font-size: 1.2rem;
        /* width: 15.3rem; */
        /* border: solid 2px rgb(138, 21, 211); */
        font-family: 'Ubuntu', sans-serif;

    }

</style>