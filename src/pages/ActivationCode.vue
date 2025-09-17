<template>
  <q-page class="flex items-start w-full bg-[#FFF9F1] overflow-hidden">
    <div class="flex justify-center items-center w-full py-4 ">
      <q-img
        src="../assets/Vector.png"
        class="w-[100px] h-[85px]"
        fit="contain"
      />
    </div>
    <div class="grid grid-cols-12 px-4 w-full bg-amber- pb-32 ">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <div
          class="customeText py-8"
        >
          A code has been sent to your email please enter the code
        </div>
        <p
          class="text-{#003329} text-center font-[Arena_Uno] text-[20px] font-normal leading-normal mb-4"
        >
          Place the code here
        </p>
        <q-card
          flat
          class="rounded-3xl flex items-center flex-col bg-transparent gap-8 justify-center">
          <div class ="flex items-center justify-center gap-4 max-w-[975px]">
             <div
            v-for="(digit, index) in codes"
            :key="index"
            class="w-[90px] h-[84px] transition-transform duration-200 ease-in-out    "
            :class="{
              'scale-110 opacity-100': codes[index] !== '',
              'opacity-70': codes[index] === '',
              shake: shakeIndex === index,
              glow: glowActive,
            }"
          >
            <q-input
              v-model="codes[index]"
              borderless
              maxlength="1"
              hide-bottom-space
              standout

              input-class="text-center text-6xl"
              class="customeInput p-2"
              @input="handleInput(index)"
              @keydown.backspace="handleBackspace(index, $event)"
            />
          </div>
          </div>
          <q-card-section
class="w-full h-full flex items-center justify-center "
          >   <CustomeSubmit

              @click="submitCode"
              label="Submit"
              :disabled="!isComplete"
              classes="rounded-3xl text-[25px] font-[Arena_Uno]"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, nextTick, watch } from "vue";
import CustomeSubmit from "../components/CustomeSubmit.vue";

const codes = ref(Array(8).fill(""));
const shakeIndex = ref(null);
const glowActive = ref(false);

const isComplete = computed(() => codes.value.every((c) => c !== ""));

const handleInput = (index) => {
  const value = codes.value[index];

  // فقط عدد مجاز است
  if (!/^\d$/.test(value)) {
    codes.value[index] = "";
    triggerShake(index);
    return;
  }

  // حرکت به بعدی
  if (index < codes.value.length - 1) {
    nextTick(() => {
      const nextInput = document.querySelectorAll("input")[index + 1];
      nextInput?.focus();
    });
  }
};

const handleBackspace = (index) => {
  if (!codes.value[index] && index > 0) {
    nextTick(() => {
      const prevInput = document.querySelectorAll("input")[index - 1];
      prevInput?.focus();
    });
  }
};

// سابمیت واقعی
const submitCode = () => {
  const finalCode = codes.value.join("");
  console.log("Code submitted:", finalCode);
  triggerGlow();
  // اینجا API برای تایید کد بفرست
};

// افکت Shake
const triggerShake = (index) => {
  shakeIndex.value = index;
  setTimeout(() => {
    shakeIndex.value = null;
  }, 300);
};

// افکت Glow بعد از Submit
const triggerGlow = () => {
  glowActive.value = true;
  setTimeout(() => {
    glowActive.value = false;
  }, 500); // مدت Glow کوتاه
};

// سابمیت خودکار وقتی همه پر شدند
watch(codes, (newVal) => {
  if (newVal.every((c) => c !== "")) {
    submitCode();
  }
});
</script>

<style scoped>
/* Fade + Scale */
.col-span-1 {
  transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.3s ease;
}

/* Shake animation */
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  60% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.shake {
  animation: shake 0.3s ease;
}

.glow {
  box-shadow: 0 0 10px 3px #34d399; /* سبز روشن */
  border-color: #34d399 !important;
}
.customeInput {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid rgba(253, 137, 3, 0.4);
  background: #fff9f1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto auto;
  box-shadow: 6px 6px 4px 3px rgba(128, 128, 128, 0.1) inset,
    5px 5px 4px 0 rgba(0, 0, 0, 0.1);
}

.customeText{
  color: #003329;
text-align: center;
font-family: "Arena Uno";
font-size: 37.311px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>
