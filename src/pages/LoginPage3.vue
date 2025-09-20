<template>
  <q-page class="flex items-start w-full  bg-[#FFF9F1]">
    <div class="flex justify-center items-center w-full pt-8">
      <q-img src="../assets/Vector.png" class="w-[100px] h-[85px] " fit="contain" />
</div>
    <div class="grid grid-cols-12 px-4 w-full pb-32">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card flat   class="rounded-2xl pb-20 flex flex-col items-center bg-transparent">

           <q-card-section class=" max-w-[975px] px-[6px]  ">
            <div class="flex items-center justify-center ">
               <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[80px] font-normal max-md:text-[50px] "
            >
              Welcome Back
            </div>
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[80px] font-extrabold  "
            >
              Mr. Naseem Abdullah
          </div>
            </div>


          </q-card-section>
          <!-- Inputs -->

          <CustomeSubmit text="Enter" @submit="handleLogin"  />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomeSubmit from "../components/CustomeSubmit.vue";


const email = ref("");



</script>


