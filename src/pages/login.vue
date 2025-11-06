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
        ref="formRef"
        @submit="handleLogin"
      >
        <q-card
          flat
          class="rounded-2xl flex flex-col items-center bg-transparent"
        >
          <q-card-section
            class="max-w-[975px] px-[6px] flex-col flex items-center justify-center"
          >
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-3xl xs:text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl"
            >
              {{ t("WelcomeBack") }}
            </div>
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[50px] xs:text-[30px] sm:text-[50px] md:text-[50px] lg:text-[70px] xl:text-[90px] font-extrabold"
            >
              {{ $t("Name") }}
            </div>
          </q-card-section>

          <!-- Inputs -->

          <q-card-section
            class="flex flex-col w-full max-w-[850px] justify-center items-center"
          >
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[37.311px] font-normal"
            >
              {{ $t("PleaseEnterCredentials") }}
            </div>
            <div
              class="flex flex-col w-full max-w-[850px] justify-center items-center gap-6"
            >
              <div
                class="flex flex-col sm:flex-row w-full max-w-[850px] items-center gap-4 justify-center"
              >
                <!-- Left Box -->
                <div
                  class="w-[90px] h-[78px] flex items-center justify-center sm:mt-6 sm:ml-2 rounded-xl flex-shrink-0"
                >
                  <div
                    class="customeInput flex items-center justify-center text-4xl mt-[4px] sm:text-6xl text-[#003329]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_423_220)">
                        <path
                          d="M20.6182 20.6182C27.1259 20.6182 32.4001 16.0033 32.4001 10.3091C32.4001 4.61494 27.1259 0 20.6182 0C14.1106 0 8.83639 4.61494 8.83639 10.3091C8.83639 16.0033 14.1106 20.6182 20.6182 20.6182ZM28.8655 23.1955H27.3284C25.285 24.017 23.0114 24.4842 20.6182 24.4842C18.2251 24.4842 15.9607 24.017 13.9081 23.1955H12.3709C5.54115 23.1955 0 28.044 0 34.0201V37.3706C0 39.5049 1.97898 41.2365 4.4182 41.2365H36.8183C39.2575 41.2365 41.2365 39.5049 41.2365 37.3706V34.0201C41.2365 28.044 35.6953 23.1955 28.8655 23.1955Z"
                          fill="#303333"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_423_220">
                          <rect width="41.2365" height="41.2365" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <!-- Email Input -->
                <div class="flex-1 w-full">
                  <CustomGeneralInput
                    v-model="state.email"
                    :label="$t('EmailLabel')"
                    :placeholder="$t('EnterUsernameOrEmail')"
                    :rules="rules.email"
                    type="email"
                    lazy-rules
                    icon_name="email"
                    ref="email"
                    :hasError="state.errors.email"
                  />
                </div>

                <!-- Right Box -->
                <div
                  class="w-[90px] h-[78px] flex items-center justify-center mt-4 sm:mt-6 sm:mr-2 rounded-xl flex-shrink-0"
                >
                  <div
                    class="customeInput flex items-center justify-center text-4xl mt-[4px] sm:text-6xl text-[#003329]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_423_228)">
                        <path
                          d="M40.0638 16.9023C40.3042 18.2862 40.4241 19.6883 40.4221 21.0929C40.4221 27.366 38.1798 32.6701 34.2778 36.2602H34.283C30.8707 39.4122 26.18 41.2369 20.6182 41.2369C15.1499 41.2369 9.90561 39.0647 6.03894 35.198C2.17227 31.3313 0 26.087 0 20.6187C0 15.1504 2.17227 9.90607 6.03894 6.0394C9.90561 2.17273 15.1499 0.000452614 20.6182 0.000452614C25.7366 -0.0594907 30.6795 1.8634 34.4119 5.36635L28.5253 11.2529C26.3975 9.22448 23.5576 8.11371 20.6182 8.16012C15.2395 8.16012 10.6699 11.7889 9.0411 16.6755C8.17747 19.236 8.17747 22.0091 9.0411 24.5697H9.04883C10.6854 29.4485 15.2472 33.0773 20.626 33.0773C23.4043 33.0773 25.7908 32.3659 27.6413 31.1082H27.6336C28.7081 30.3964 29.6272 29.4742 30.3355 28.3974C31.0438 27.3206 31.5266 26.1114 31.7547 24.8429H20.6182V16.9048H40.0638V16.9023Z"
                          fill="#303333"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_423_228">
                          <rect width="41.2365" height="41.2365" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-col sm:flex-row w-full max-w-[850px] items-center gap-4 justify-center"
              >
                <!-- Left Box -->
                <div
                  class="w-[90px] h-[78px] flex items-center justify-center sm:mt-6 sm:ml-2 rounded-xl flex-shrink-0"
                >
                  <div
                    class="customeInput flex items-center justify-center text-4xl mt-[4px] sm:text-6xl text-[#003329]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M25.7728 8.59093H34.3637V25.7728H25.7728V29.2092C25.7728 29.6649 25.9538 30.1019 26.276 30.4241C26.5983 30.7463 27.0353 30.9274 27.491 30.9274H30.9274V34.3637H26.6319C25.6869 34.3637 24.0546 33.5906 24.0546 32.6456C24.0546 33.5906 22.4223 34.3637 21.4773 34.3637H17.1819V30.9274H20.6182C21.0739 30.9274 21.511 30.7463 21.8332 30.4241C22.1554 30.1019 22.3364 29.6649 22.3364 29.2092V5.15456C22.3364 4.69887 22.1554 4.26184 21.8332 3.93962C21.511 3.6174 21.0739 3.43637 20.6182 3.43637H17.1819V0H21.4773C22.4223 0 24.0546 0.773184 24.0546 1.71819C24.0546 0.773184 25.6869 0 26.6319 0H30.9274V3.43637H27.491C27.0353 3.43637 26.5983 3.6174 26.276 3.93962C25.9538 4.26184 25.7728 4.69887 25.7728 5.15456V8.59093ZM0 8.59093H18.9001V12.0273H3.43637V22.3364H18.9001V25.7728H0V8.59093ZM30.9274 22.3364V12.0273H25.7728V22.3364H30.9274ZM11.1682 17.1819C11.1682 16.4983 10.8967 15.8428 10.4133 15.3595C9.93001 14.8761 9.27447 14.6046 8.59093 14.6046C7.9074 14.6046 7.25186 14.8761 6.76852 15.3595C6.28519 15.8428 6.01365 16.4983 6.01365 17.1819C6.01365 17.8654 6.28519 18.5209 6.76852 19.0043C7.25186 19.4876 7.9074 19.7592 8.59093 19.7592C9.27447 19.7592 9.93001 19.4876 10.4133 19.0043C10.8967 18.5209 11.1682 17.8654 11.1682 17.1819V17.1819ZM18.9001 15.2747C17.852 14.3125 16.2197 14.3984 15.2575 15.4637C14.2953 16.4946 14.3812 18.1269 15.4637 19.0891C16.4087 19.9825 17.9207 19.9825 18.9001 19.0891V15.2747Z"
                        fill="#303333"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Email Input -->
                <div class="flex-1 w-full">
                  <CustomGeneralInput
                    v-model="state.password"
                    :label="$t('PasswordLabel')"
                    :rules="rules.password"
                    icon_name="lock"
                    :type="state.password_field_type"
                    lazy-rules
                    :placeholder="$t('EnterUserpassword')"
                    type="password"
                    ref="password"
                    class="py-[2px]"
                    :hasError="state.errors.password"
                  >
                  </CustomGeneralInput>
                </div>

                <!-- Right Box -->

                <div
                  class="w-[90px] h-[78px] flex items-center justify-center mt-4 sm:mt-6 sm:mr-2 rounded-xl flex-shrink-0 cursor-pointer"
                >
                  <div class="customeInput mt-[4px]">
                    <!-- When password is hidden -->
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

                    <!-- When password is visible -->
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
                  </div>
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-between w-full max-w-[850px] mt-6"
            >
              <div class="flex px-[2px] gap-2 items-center">
                <div class="flex items-center justify-center gap-[2px]">
                  <q-checkbox v-model="state.remember_me" class="remember_me" />
                  <span class="text-[#003329] text-[20px] flex items-center">{{
                    t("RememberMe")
                  }}</span>
                </div>
              </div>

              <div
                class="text-[#1A2BE5] cursor-pointer text-[20px] font-normal leading-normal font-[Arena_Uno] mr-2 px-[8px]"
                @click="$emit('forgot')"
              >
                {{ $t("ForgotPassword") }}
              </div>
            </div>
          </q-card-section>

          <!-- Submit -->
          <GeneralCustomSubmit
            :text="$t('Enter')"
            type="submit"
            :disabled="!state.email.trim() || !state.password.trim()"
            :loading="loading"
          />

          <!-- Error -->

          <div
            class="flex items-center flex-col justify-center w-full max-w-[975px] px-[20px]"
          >
            <div
              class="text-[#003329] flex font-light text-[25px] leading-normal font-[Arena_Uno] py-2"
            >
              {{ t("SettingsMessage") }}
            </div>

            <div
              v-if="state.generalError"
              class="text-[#ED1C24] font-[Arena_Uno] text-[25px] font-bold flex text-center px-[6px]"
            >
              {{ $t("GeneralError") }}
            </div>
          </div>
        </q-card>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect, computed, watch } from "vue";
import CustomGeneralInput from "../components/GeneralCustomInput.vue";
import GeneralCustomSubmit from "../components/GeneralCustomSubmit.vue";
// import { useUserStore } from "src/stores/user-store";
import { useRouter } from "vue-router";
import { LocalStorage, useQuasar } from "quasar";

import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// import CustomSubmit from "../../component/general_fieldss/CustomeSubmit.vue";
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

// const store = useUserStore();
const router = useRouter();
const loading = ref(false);
const $q = useQuasar();
const switchVisibility = () => {
  state.visibility = !state.visibility;
  state.password_field_type = state.visibility ? "text" : "password";
  state.visibility_icon = state.visibility ? "visibility_off" : "visibility";
};

const rules = {
  email: [
    (value) => !!value || proxy.$t("EmailRequired"),
    (value) =>
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(
        value
      ) || $t("InvalidEmail"),
  ],
  password: [(value) => !!value || proxy.$t("PasswordRequired")],
};

const validateEmail = (val) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(val);
};

const validatePassword = (val) => {
  return val.length >= 6; // you can adjust rule
};
const formRef = ref(null);
const handleLogin = async () => {
  LocalStorage.clear();
  state.email = state.email.toLowerCase();
  if (formRef.value.validate()) {
    loading.value = true;
    try {
      // await store.getSanctumCookie();
      // await store.login(state.email, state.password, state.remember_me);
      // return;
      console.log("store.is_private", store.is_private);
      // if (store.is_private) {
      //   router.push("/").then(() => {
      //     $q.notify({
      //       color: "positive",
      //       textColor: "white",
      //       position: "bottom-right",
      //       icon: "mdi-lock-open-check",
      //       message: "Welcome To Metal MIS Environment",
      //     });
      //   });
      // } else {
      //   router.push("/company/profile").then(() => {
      //     $q.notify({
      //       color: "positive",
      //       textColor: "white",
      //       position: "bottom-right",
      //       icon: "mdi-lock-open-check",
      //       message: "Welcome To Metal MIS Environment",
      //     });
      //   });
      // }
      loading.value = false;
    } catch (error) {
      console.log("TEST :::", await store.setError());

      loading.value = false;
      $q.notify({
        color: "negative",
        textColor: "white",
        position: "top-right",
        icon: "mdi-alert",
        message: "The email or password is incorrect",
      });
      console.log(error);
    }
  }
};

// Auto-clear error when user fixes input
watch(
  () => state.email,
  (val) => {
    if (val?.length) {
      state.errors.email = !validateEmail(val);
    }
  }
);

watch(
  () => state.password,
  (val) => {
    console.log("val", val);

    if (val?.length) {
      state.errors.password = !validatePassword(val);
    }
  }
);
</script>

<style scoped>
/* Customize Quasar checkbox */

::v-deep(.q-field__messages) {
  text-align: left !important;
  width: 100%;
  display: flex;
  justify-content: left;
  margin-left: 15px;
}

::v-deep(.customeInput .q-field__append .q-icon),
::v-deep(.customeInput .q-field__append .q-icon.q-field__append-icon),
::v-deep(.customeInput .q-field__append-icon) {
  position: absolute !important;
  right: 10px !important; /* adjust to push it outside the input */
  top: 50% !important;
  transform: translateY(-50%) !important;
  color: #ed1c24 !important;
  background: #fff9f1 !important;
  border-radius: 50% !important;
  padding: 4px !important;

  z-index: 3 !important;
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
.customeInput {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 2px solid rgba(253, 137, 3, 0.4);
  background: #fff9f1;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 4px 3px rgba(128, 128, 128, 0.1) inset,
    5px 5px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.remember_me ::v-deep(.q-checkbox__inner--truthy .q-checkbox__bg) {
  background-color: #003329 !important;
}

.remember_me ::v-deep(.q-checkbox__svg) {
  transform: scale(0.8);
  /* shrink tick size */
  transform-origin: center;
}
</style>
