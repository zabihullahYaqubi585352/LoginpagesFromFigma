<template>
  <div class="flex items-start min-h-screen w-full bg-[#FFF9F1]">
    <div class="flex justify-center items-center w-full pt-8">
      <q-img
        src="../assets/Vector.png"
        class="w-[100px] h-[85px]"
        fit="contain"
      />
    </div>
    <div class="grid grid-cols-12 px-4 w-full">
      <q-form
        class="col-span-12 md:col-span-8 md:col-start-3"
      >
        <q-card
          flat
          class="rounded-2xl flex flex-col items-center bg-transparent"
        >
          <!-- Logo -->

          <!-- Title -->
          <q-card-section
            class="max-w-[975px] px-[6px] flex-col flex items-center justify-center"
          >
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-3xl xs:text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl"
            >
              Welcome Back
            </div>
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[50px] xs:text-[30px] sm:text-[50px] md:text-[50px] lg:text-[70px] xl:text-[90px] font-extrabold"
            >
              Mr. Nasem Abdullah
            </div>
          </q-card-section>

          <!-- Inputs -->

          <q-card-section
            class="flex flex-col w-full max-w-[850px] justify-center items-center"
          >
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal"
            >
              Please enter your credentials
            </div>

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

            <CustomInput
              v-model="state.password"
              label="Password"
              :rules="rules.password"
              icon_name="lock"
              :type="state.password_field_type"
              lazy-rules
              placeholder="Enter Your Password Here"
              type="password"
              ref="password"
              class="py-2"
               :hasError="state.errors.password"
            >
              <template #append>
                <!-- When password is visible -->
                <svg
                  v-if="!state.visibility"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  class="customeSVG"
                  @click="switchVisibility"

                >
                  <path
                    d="M20 10C9.58008 10 1.5625 19.1797 1.5625 19.1797L0.820312 20L1.5625 20.8203C1.5625 20.8203 8.87207 29.1553 18.5938 29.9219C19.0576 29.9805 19.5215 30 20 30C20.4785 30 20.9424 29.9805 21.4062 29.9219C31.1279 29.1553 38.4375 20.8203 38.4375 20.8203L39.1797 20L38.4375 19.1797C38.4375 19.1797 30.4199 10 20 10ZM20 12.5C22.7539 12.5 25.293 13.252 27.5 14.2578C28.2959 15.5762 28.75 17.0947 28.75 18.75C28.75 23.2666 25.3613 26.9775 20.9766 27.4609C20.9521 27.4658 20.9229 27.4561 20.8984 27.4609C20.6006 27.4756 20.3027 27.5 20 27.5C19.668 27.5 19.3457 27.4805 19.0234 27.4609C14.6387 26.9775 11.25 23.2666 11.25 18.75C11.25 17.1191 11.6895 15.6006 12.4609 14.2969H12.4219C14.6484 13.2715 17.2168 12.5 20 12.5ZM20 15C17.9297 15 16.25 16.6797 16.25 18.75C16.25 20.8203 17.9297 22.5 20 22.5C22.0703 22.5 23.75 20.8203 23.75 18.75C23.75 16.6797 22.0703 15 20 15ZM9.0625 16.1719C8.86719 17.0117 8.75 17.8564 8.75 18.75C8.75 20.9424 9.375 22.9932 10.4688 24.7266C7.31934 22.9053 5.13184 20.7324 4.41406 20C5.01465 19.3848 6.68945 17.7539 9.0625 16.1719ZM30.9375 16.1719C33.3105 17.7539 34.9854 19.3848 35.5859 20C34.8682 20.7324 32.6807 22.9053 29.5312 24.7266C30.625 22.9932 31.25 20.9424 31.25 18.75C31.25 17.8564 31.1328 17.002 30.9375 16.1719Z"
                    fill="#FD8903"
                  />
                </svg>

                <!-- When password is hidden -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  class="customeSVG"
                  @click="switchVisibility"

                >
                  <path
                    d="M4.64844 2.85156L2.85156 4.64844L10.625 12.3828L24.4922 26.25L26.875 28.6719L35.3516 37.1484L37.1484 35.3516L29.375 27.5781C34.668 24.9561 38.2178 21.0645 38.4375 20.8203L39.1797 20L38.4375 19.1797C38.1006 18.8037 30.1074 10 20 10C17.5537 10 15.2441 10.5371 13.125 11.3281L4.64844 2.85156ZM20 12.5C22.6904 12.5 25.2344 13.2568 27.5 14.2969C28.3057 15.6445 28.75 17.168 28.75 18.75C28.75 21.0205 27.8711 23.0957 26.4453 24.6484L22.8906 21.0938C23.4131 20.4541 23.75 19.6436 23.75 18.75C23.75 16.6797 22.0703 15 20 15C19.1064 15 18.2959 15.3369 17.6562 15.8594L15.1172 13.3203C16.6699 12.8418 18.2959 12.5 20 12.5ZM8.35938 13.6328C4.35059 16.0986 1.74805 18.9697 1.5625 19.1797L0.820312 20L1.5625 20.8203C1.88477 21.1816 9.28711 29.2822 18.8281 29.9219C19.2139 29.9609 19.6045 30 20 30C20.3955 30 20.7861 29.9609 21.1719 29.9219C22.2021 29.8535 23.208 29.7168 24.1797 29.4922L21.9531 27.2656C21.3184 27.4121 20.6738 27.5 20 27.5C15.1758 27.5 11.25 23.5742 11.25 18.75C11.25 18.0859 11.3379 17.4365 11.4844 16.7969L8.35938 13.6328ZM9.0625 16.1719C8.8623 17.0166 8.75 17.876 8.75 18.75C8.75 20.9229 9.36035 22.9248 10.4297 24.6484C7.56836 23.0078 5.38086 21.084 4.25781 20C5.19043 19.0967 6.87012 17.5977 9.0625 16.1719ZM30.9375 16.1719C33.1299 17.5977 34.8047 19.0967 35.7422 20C34.6191 21.084 32.3975 23.0469 29.5312 24.6875C30.6055 22.9639 31.25 20.9229 31.25 18.75C31.25 17.876 31.1377 17.0117 30.9375 16.1719Z"
                    fill="#FD8903"
                  />
                </svg>
              </template>
            </CustomInput>

            <div class="flex items-center justify-between w-full max-w-[850px]">
              <div class="flex px-[2px] gap-2 items-center">
                <div class="flex items-center justify-center gap-[2px]">
                  <q-checkbox v-model="state.remember_me" class="remember_me" />
                  <span class="text-[#003329] text-[20px] flex items-center"
                    >Remember Me</span
                  >
                </div>

              </div>

              <div
                class="text-[#1A2BE5] cursor-pointer text-[20px] font-normal leading-normal font-[Arena_Uno] mr-2 px-[8px]"
                @click="$emit('forgot')"
              >
                Forgot Password
              </div>
            </div>
          </q-card-section>

          <!-- Submit -->
          <CustomSubmit
            text="Enter"
          @click="handleLogin"
            :disabled="!state.email.trim() || !state.password.trim()"
          />

          <!-- Error -->

          <div
            class="flex items-center flex-col justify-center w-full max-w-[975px] px-[20px]"
          >
            <div
              class="text-[#003329] flex font-light text-[25px] leading-normal font-[Arena_Uno] py-2"
            >
              All the settings can be changed in your profile
            </div>

            <div
              v-if="state.f"
              class="text-[#ED1C24] font-[Arena_Uno] text-[25px] font-bold flex text-center px-[6px] mt-2"
            >
              Your User Name or Password is incorrect. Please check.
            </div>
          </div>
        </q-card>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect, computed,watch } from "vue";
import CustomInput from "../components/CustomeInput.vue";
import CustomSubmit from "../components/CustomeSubmit.vue";
// import CustomeCheckbox from "../components/CustomCheckBox.vue";
let state = reactive({
  email: "",
  password: "",
  remember_me: false,
  password_field_type: "password",
  visibility_icon: "visibility",
  visibility: false,

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



const switchVisibility = () => {
  state.visibility = !state.visibility;
  state.password_field_type = state.visibility ? "text" : "password";
  state.visibility_icon = state.visibility ? "visibility_off" : "visibility";
};

const rules = {
  email: [
    (value) => !!value || this.$t("EmailRequired"),
    (value) =>
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(
        value
      ) || this.$t("InvalidEmail"),
  ],
  password: [(value) => !!value || this.$t("PasswordRequired")],
};


const validateEmail = (val) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(val);
};

const validatePassword = (val) => {
  return val.length >= 6; // you can adjust rule
};

const handleLogin = () => {
  console.log("------------------------------------------" ,"check email and password")
  state.touched.email = true;
  state.touched.password = true;

  state.errors.email = !validateEmail(state.email);
  state.errors.password = !validatePassword(state.password);

  if (!state.errors.email && !state.errors.password) {
    alert("Login successful!");
  }
   if (state.errors.email || state.errors.password) {
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

watch(() => state.password, (val) => {
  if (state.touched.password) {
    state.errors.password = !validatePassword(val);
  }
});


</script>

<style scoped>
/* Customize Quasar checkbox */
.customeSVG {
  margin-right: 20px;
  margin-top: 30px;
  cursor: pointer;
}
.remember_me ::v-deep(.q-checkbox__bg) {
  background-color: #d9d9d9 !important;
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
