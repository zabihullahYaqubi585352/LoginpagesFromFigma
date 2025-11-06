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
              {{ $t("pleaseEnterYourEmail") }}
            </div>

            <!-- bind the input -->
            <GeneralCustomInput
              v-model="state.email"
              :label="$t('EmailLabel')"
              :placeholder="$t('EnterUsernameOrEmail')"
              :rules="rules.email"
              type="email"
              lazy-rules
              icon_name="email"
              ref="email"
              class="py-2"
              :hasError="state.errors.email"
            >
            </GeneralCustomInput>
            <!-- disable animations when username is empty -->
          </q-card-section>

          <GeneralCustomSubmit
            :text="$t('Enter')"
            @click="handleLogin"
            class="mt-[10px]"
            :loading="loading"
            :disabled="!state.email.trim()"
          />

          <div
            v-if="state.generalError"
            class="text-[#ED1C24] font-[Arena_Uno] text-[20px] font-bold flex text-center px-[6px]"
          >
            Your email is not correct. Please check.
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
import GeneralCustomInput from "../components/GeneralCustomInput.vue";
import GeneralCustomSubmit from "../components/GeneralCustomSubmit.vue";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
import { useI18n } from "vue-i18n";
const { t } = useI18n();

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
    (value) => !!value || proxy.$t("EmailRequired"),
    (value) =>
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(
        value
      ) || proxy.$t("InvalidEmail"),
  ],
};

const validateEmail = (val) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(val);
};
watch(
  () => state.email,
  (val) => {
    if (val?.length) {
      state.errors.email = !validateEmail(val);
    }
  }
);

const handleLogin = () => {
  console.log(
    "------------------------------------------",
    "check email and password"
  );
  state.touched.email = true;
  state.errors.email = !validateEmail(state.email);
  if (!state.errors.email) {
    alert("Login successful!");
  }
  if (state.errors.email) {
    state.generalError = true; // 🔥 show general error
    return;
  }
  state.generalError = false;
};

// Auto-clear error when user fixes input
watch(
  () => state.email,
  (val) => {
    if (state.touched.email) {
      state.errors.email = !validateEmail(val);
    }
  }
);
</script>
<style scoped>
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
</style>
