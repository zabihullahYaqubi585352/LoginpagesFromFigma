<template>
  <q-page class="flex items-start w-full bg-[#FFF9F1] ">
    <div class="flex justify-center items-center w-full py-8">
        <q-img
            src="../assets/Vector.png"
            class="w-[100px] h-[85px]"
            fit="contain"
          />
    </div>
    <div class="grid grid-cols-12 px-4 w-full pb-32">
      <q-form class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card
          flat
          class="rounded-2xl p-8 flex flex-col items-center bg-transparent"
        >
          <!-- Logo -->


          <!-- Title -->
          <q-card-section class="flex flex-col justify-between ">
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal"

            >
              Please enter your new password
            </div>

          </q-card-section>

          <!-- Inputs -->
          <q-card-section
            class="flex flex-col w-full max-w-[850px] gap-2 justify-center items-center "
          >
            <div

              class="flex flex-col items-start justify-center gap-2 w-full px-2  "
              >

              <span class="perfectText">perfect</span>
              <div class="  w-full h-[9px] rounded-[1000px] bg-[#aeb3af] mb-4">
              <div class="max-w-[725px] w-full h-[9px] rounded-[1000px] bg-[#00962D] mb-4"></div>
              </div>
            </div>
            <CustomInput
              v-model="password"
              label="New Password"
              type="password"
              class="py-2"
            >
            </CustomInput>

            <CustomInput
              v-model="confirmPassword"
              label="confirm Password"
              type="password"
              class="py-2"
            ></CustomInput>


          </q-card-section>

          <!-- Submit -->
          <CustomSubmit
            text="Enter"
            @submit="handleLogin"
            :disabled="!confirmPassword.trim() || !password.trim()"
          />

          <!-- Error -->

            <div
              v-if="error"
              class="text-[#ED1C24] font-[Arena_Uno] text-[25px] font-normal text-center mt-8"
            >
              Your Passwords do not match, please try again
            </div>

        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomSubmit from "../components/CustomeSubmit.vue";

const password = ref(""); // ref for password
const confirmPassword = ref(""); // ref for confirm password
const error = ref(false);

const handleLogin = () => {
  if (confirmPassword.value !== "1234" || password.value !== "1234") {
    error.value = true;
  } else {
    error.value = false;
    alert("Login successful!");
  }
};
</script>
<style>
.perfectText{
  width: 725px;
  color: #003329;
font-family: "Arena Uno";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>
