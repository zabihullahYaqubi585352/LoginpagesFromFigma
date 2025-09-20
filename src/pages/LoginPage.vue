<template>
  <q-page class="flex items-start w-full bg-[#FFF9F1]  ">
    <div class="flex justify-center items-center w-full pt-8">
       <q-img
            src="../assets/Vector.png"
            class="w-[100px] h-[85px]"
            fit="contain"
          />
    </div>
    <div class="grid grid-cols-12 px-4 w-full ">
      <q-form class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card
         flat
          class="rounded-2xl  flex flex-col items-center bg-transparent "
        >
          <!-- Logo -->

          <!-- Title -->
          <q-card-section class=" max-w-[975px] px-[6px] flex items-center justify-center bg-">

               <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[80px] font-normal "
            >
              Welcome Back
            </div>
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[90px] font-extrabold  "
            >
              Mr. Naseem Abdullah
          </div>



          </q-card-section>

          <!-- Inputs -->

          <q-card-section
            class="flex flex-col w-full max-w-[850px]  justify-center items-center " >
             <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal  "
              >Please enter your  credentials</div
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

            <!-- <CustomeCheckbox
              v-model:rememberMe="rememberMe"
              v-model:rememberUser="rememberUser"
              @forgot="handleForgotPassword"
            ></CustomeCheckbox> -->

 <div
    class="flex items-center justify-between  w-full  max-w-[850px]  ">
    <div class="flex px-[2px] gap-2  items-center ">
      <div class="flex items-center justify-center gap-[2px]">
        <q-checkbox
          v-model="rememberMe"
          class="remember_me"
        />
        <span class="text-[#003329] text-[20px] flex items-center">Remember Me</span>
      </div>
      <div class="flex items-center gap-[2px] justify-center">
        <q-checkbox
          v-model="rememberUser"
          class="remember_me"
        />
        <span class="text-[#003329] text-[20px]">Remember User Name</span>
      </div>
    </div>

    <div
      class="text-[#1A2BE5] cursor-pointer text-[20px] font-normal leading-normal font-[Arena_Uno] mr-2 px-[2px]"
      @click="$emit('forgot')"
    >
      Forgot Password
  </div>
  </div>




          </q-card-section>

          <!-- Submit -->
          <CustomSubmit
            text="Enter"
            @submit="handleLogin"
            :disabled="!email.trim() || !password.trim()"
          />

          <!-- Error -->

          <div class="flex items-center flex-col justify-center  w-full max-w-[975px] px-[6px]  ">
            <div
              class="text-[#003329] flex font-light text-[25px] leading-normal font-[Arena_Uno]"
            >
              All the settings can be changed in your profile
          </div>

            <div
              v-if="error"
              class="text-[#ED1C24] font-[Arena_Uno] text-[25px] font-bold flex text-center px-[6px] mt-2"
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
import { ref,computed } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomSubmit from "../components/CustomeSubmit.vue";
import CustomeCheckbox from "../components/CustomCheckBox.vue";



const email = ref(""); // ref for email
const password = ref(""); // ref for password
const rememberMe = ref(false); // ref for checkbox
const rememberUser = ref(false);

const error = ref(false);



const props = defineProps({
  label: String,
  type: { type: String, default: "email" },
  placeholder: { type: String, default: "" },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

// 👇 This dynamically changes between "password" and "text"
const inputType = computed(() => {
  if (props.type === "password") {
    return showPassword.value ? "text" : "password";
  }
  return props.type;
});

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

<style scoped>
/* Customize Quasar checkbox */

.remember_me ::v-deep(.q-checkbox__bg) {
  background-color: #D9D9D9 !important;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  border: none;
}


::v-deep(.q-checkbox:hover .q-checkbox__bg) {
  background-color: #025746a1 !important;
  transition: background-color 0.3s ease;
  opacity: 1;
  border: none;
}
.remember_me ::v-deep(.q-checkbox__inner--truthy .q-checkbox__bg) {
  background-color: #003329 !important;

}


.remember_me ::v-deep(.q-checkbox__svg) {
 transform: scale(0.8); /* shrink tick size */
  transform-origin: center;

}
</style>

