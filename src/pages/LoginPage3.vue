<template>
  <q-page class="flex items-center w-full min-h-screen bg-[#FFF9F1]">
    <div class="grid grid-cols-12 px-4 w-full">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card flat class="rounded-2xl p-8 flex flex-col items-center bg-transparent gap-32">

          <q-img src="../assets/Vector.png" class="w-[100px] h-[85px]" fit="contain" />

          <q-card-section class="flex flex-col w-full max-w-[850px] gap-4">
            <h2 class="text-[#003329] text-center font-[Arena_Uno] text-[80px] font-normal">
              Welcome Back
            </h2>
            <h1 class="text-[#003329] text-center font-[Arena_Uno] text-[90px] font-extrabold">
              Mr. Naseem Abdullah
            </h1>

            <!-- bind the input -->
            <CustomInput v-model="username" label="User Name" />

            <!-- disable animations when username is empty -->
            <CustomeSubmit :class="{ disabled: !username }" />
          </q-card-section>

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
