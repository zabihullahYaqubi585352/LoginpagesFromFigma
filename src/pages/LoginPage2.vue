<template>
  <q-page class="flex items-center w-full  bg-[#FFF9F1]">
    <div class="grid grid-cols-12 px-4 w-full">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card flat class="rounded-2xl p-8 flex flex-col items-center bg-transparent">

          <!-- Logo -->
          <q-img src="../assets/Vector.png" class="w-[100px] h-[85px]" fit="contain" />

          <!-- Title -->
          <q-card-section class="flex flex-col justify-between gap-4">
            <h2 class="text-[#003329] text-center font-[Arena_Uno] text-[80px] font-normal">
              Welcome Back
            </h2>
            <h1 class="text-[#003329] text-center font-[Arena_Uno] text-[90px] font-extrabold">
              Mr. Naseem Abdullah
            </h1>
          </q-card-section>

          <!-- Inputs -->
          <q-card-section class="flex flex-col w-full max-w-[850px]  ">
          <span class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal">Please enter your password</span>
          <CustomInput  v-model="password" type="password"  />


          </q-card-section>
          <CustomeSubmit text="Enter" @submit="handleLogin" :disabled="!password.trim() || !password.trim()" />



          <!-- <div class="flex items-center flex-col justify-center mt-6">
            <span class="text-[#003329] flex  font-light text-[25px] leading-normal font-[Arena_Uno]  ">
                 All the settings can be changed in your profile
          </span>

             <div v-if="error" class="text-[#ED1C24]  font-[Arena_Uno] text-[25px] font-bold ">
            Your User Name or Password is incorrect. Please check.
             </div>
          </div> -->


        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomeSubmit from "../components/CustomeSubmit.vue";


const password = ref("");



</script>


