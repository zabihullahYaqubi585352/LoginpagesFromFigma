<template>
  <q-page class="flex items-start w-full min-h-screen bg-[#FFF9F1]">
     <div class="flex justify-center items-center w-full pt-8">
      <q-img
        src="../assets/Vector.png"
        class="w-[100px] h-[85px]"
        fit="contain"
      />
    </div>
    <div class="grid grid-cols-12 px-4 w-full  pb-32  ">

      <div class="col-span-12 md:col-span-8 md:col-start-3">

        <q-card flat class="rounded-3xl flex items-center flex-col bg-transparent  justify-center ">
          <q-card-section class="flex flex-col w-full max-w-[850px] gap-6">
            <div class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal">

             please enter your  Email
            </div>

            <!-- bind the input -->
            <CustomInput v-model="username" label="Username or Email" type="email" placeholder="Enter Your UserName or Email Here" />
            <!-- disable animations when username is empty -->

          </q-card-section>
          <CustomeSubmit :class="{ disabled: !username }" />

        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomeSubmit from "../components/CustomeSubmit.vue";

const username = ref(""); // track the input
</script>
