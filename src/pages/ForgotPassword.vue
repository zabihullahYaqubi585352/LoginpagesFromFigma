<template>
  <div class="flex items-start w-full min-h-screen bg-[#FFF9F1]">
    <div class="flex justify-center items-center w-full pt-8">
      <q-img
        src="../assets/Vector.png"
        class="w-[100px] h-[85px]"
        fit="contain"
      />
    </div>
    <div class="grid grid-cols-12 px-4 w-full pb-32">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card
          flat
          class="rounded-3xl flex items-center flex-col bg-transparent justify-center"
        >
          <q-card-section class="flex flex-col w-full max-w-[850px] gap-6">
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal"
            >
              please enter your Email
            </div>

            <!-- bind the input -->
           <CustomInput
              v-model="state.email"
              label="Username or Email"
              placeholder="Enter Your User Name or Email Here"
              :rules="rules.email"
              type="email"
              lazy-rules
              icon_name="email"
              ref="email"
              class="py-2"
               :hasError="state.errors.email"
            >
            </CustomInput>
            <!-- disable animations when username is empty -->
          </q-card-section>

          <CustomeSubmit
            text="Enter"
            @click="handleLogin"
            :disabled="!state.email.trim() "
          />
          <div
              v-if="state.generalError"
              class="text-[#ED1C24] font-[Arena_Uno] text-[20px] font-bold flex text-center px-[6px] "
            >
              Your email is not correct. Please check.
            </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,watch,reactive } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomeSubmit from "../components/CustomeSubmit.vue";

let state = reactive({
  email: "",
   touched: {
    email: false,
    password: false,
  },
  errors: {
    email: false,
    password: false,
  },
   generalError: false,
});

const rules = {
  email: [
    (value) => !!value || this.$t("EmailRequired"),
    (value) =>
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(
        value
      ) || this.$t("InvalidEmail"),
  ],

};

const validateEmail = (val) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(val);
};


const handleLogin = () => {
  console.log("------------------------------------------" ,"check email and password")
  state.touched.email = true;
  state.errors.email = !validateEmail(state.email);
  if (!state.errors.email ) {
    alert("Login successful!");
  }
   if (state.errors.email ) {
    state.generalError = true; // 🔥 show general error
    return;
  }
    state.generalError = false;
};


// Auto-clear error when user fixes input
watch(() => state.email, (val) => {
  if (state.touched.email) {
    state.errors.email = !validateEmail(val);
  }
});
</script>
