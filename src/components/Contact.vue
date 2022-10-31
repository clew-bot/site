<script setup lang="ts">
import { reactive, ref } from 'vue';
import MobilePhone from '@/components/MobilePhone.vue'

const formSubmission = reactive({
  fullName: '',
  email: '',
  message: '',
});
const clicked = ref(false);
const sendForm = async () => {

  if(formSubmission.fullName === '' || formSubmission.email === '' || formSubmission.message === ''){
    alert('Please fill out all fields');
    return;
  }
  clicked.value = !clicked.value;
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

                <div class="outer-bg">
        <button
          class="say-something"
          @click="sendForm"
          :class="{ isCLicked: clicked }"
          >Send</button
        >
      </div>
    </div>

  </div>
    </div>
  </footer>
</template>



<style>

.say-something {
  border-radius: 10px;
  font-size: 16px;
  margin-top: 5px;
  width: 8rem;
  transform: translateY(-1.225rem);
  text-transform: none;
  letter-spacing: 0px;
  padding: 10px !important;
  color: rgb(241, 240, 240);
  font-weight: bolder;
  border: none;
  background: linear-gradient(
    90deg,
    rgb(206, 206, 21) 0%,
    rgb(161, 161, 15) 14.06%,
    rgb(153, 180, 35) 83.85%,
    rgb(217, 217, 23) 100%
  );
  transition: all 0.3s ease-in-out;
}


    .say-something:hover {
  transform: translateY(-1.425rem);
}
    .outer-bg {
  background: rgb(94, 125, 32);
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

  .container {
    display: flex;
    justify-content: center;
    gap: 5rem;
    align-items: center;
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
        font-family: 'Ubuntu', sans-serif;
    }

    textarea {
        margin-top: 1rem;
        padding: 1rem;
        width: 22rem;
        border-radius: 10px;
        border: none;
        outline: none;
        background: #e7e9eb;
        color: rgb(8, 6, 6);
        font-size: 1.2rem;
        font-family: 'Ubuntu', sans-serif;

    }

</style>