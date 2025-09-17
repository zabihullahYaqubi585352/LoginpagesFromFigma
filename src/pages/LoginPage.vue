<template>
  <q-page class="flex items-center w-full bg-[#FFF9F1] overflow-hidden">
    <div class="grid grid-cols-12 px-4 w-full">
      <q-form class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card
          flat
          class="rounded-2xl p-8 flex flex-col items-center bg-transparent"
        >
          <!-- Logo -->
          <q-img
            src="../assets/Vector.png"
            class="w-[100px] h-[85px]"
            fit="contain"
          />

          <!-- Title -->
          <q-card-section class="flex flex-col justify-between gap-4 ">
            <h2
              class="text-[#003329] text-center font-[Arena_Uno] text-[80px] font-normal"
            >
              Welcome Back
            </h2>
            <h1
              class="text-[#003329] text-center font-[Arena_Uno] text-[90px] font-extrabold"
            >
              Mr. Naseem Abdullah
            </h1>
          </q-card-section>

          <!-- Inputs -->
          <q-card-section
            class="flex flex-col w-full max-w-[850px] gap-2 justify-center items-center "
          >
            <span
              class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal"
              >Please enter your password</span
            >
            <CustomInput
              v-model="email"
              label="Username or Email"
              placeholder="Enter Your User Name or Email Here"
              type="email"
              class="py-2"
            >
            </CustomInput>

            <CustomInput
              v-model="password"
              label="Password"
              placeholder="Enter Your Password Here"
              type="password"
              class="py-2"
            ></CustomInput>

            <CustomeCheckbox
              v-model:rememberMe="rememberMe"
              v-model:rememberUser="rememberUser"
              @forgot="handleForgotPassword"
            ></CustomeCheckbox>
          </q-card-section>

          <!-- Submit -->
          <CustomSubmit
            text="Enter"
            @submit="handleLogin"
            :disabled="!email.trim() || !password.trim()"
          />

          <!-- Error -->

          <div class="flex items-center flex-col justify-center mt-6">
            <span
              class="text-[#003329] flex font-light text-[25px] leading-normal font-[Arena_Uno]"
            >
              All the settings can be changed in your profile
            </span>

            <div
              v-if="error"
              class="text-[#ED1C24] font-[Arena_Uno] text-[25px] font-bold"
            >
              Your User Name or Password is incorrect. Please check.
            </div>
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
import CustomeCheckbox from "../components/CustomCheckBox.vue";

const email = ref(""); // ref for email
const password = ref(""); // ref for password
const rememberMe = ref(false); // ref for checkbox
const rememberUser = ref(false);

const error = ref(false);

const rules = {
  email: [
    (value) => !!value || "Email required",
    (value) => /.+@.+\..+/.test(value) || "Invalid email",
  ],
  password: [(value) => !!value || "Password required"],
};

const handleLogin = () => {
  if (email.value !== "test@test.com" || password.value !== "1234") {
    error.value = true;
  } else {
    error.value = false;
    alert("Login successful!");
  }
};
</script>
