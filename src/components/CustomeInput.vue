<template>
  <div class="w-full flex flex-col gap-[4px]">
    <label
      class="customeLabel"
    >
      {{ label }}
    </label>

    <div class="px-[6px] h-[70px] max-w-[975px]  ">
      <q-input
        :model-value="modelValue"
        :type="inputType"
        :placeholder="placeholder"
        borderless
        class="customeInput "
        :class="{
          'has-value': modelValue && modelValue.trim() !== '',
        }"
      @update:model-value="$emit('update:modelValue', $event)"

      >
         <template v-if="type === 'password'" #append>
          <div class="cursor-pointer" @click="togglePassword">
            <!-- 👁️ Visible (show) icon -->
            <svg
              v-if="!showPassword"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              class="customeSVG"
            >
              <path
                d="M20 10C9.58008 10 1.5625 19.1797 1.5625 19.1797L0.820312 20L1.5625 20.8203C1.5625 20.8203 8.87207 29.1553 18.5938 29.9219C19.0576 29.9805 19.5215 30 20 30C20.4785 30 20.9424 29.9805 21.4062 29.9219C31.1279 29.1553 38.4375 20.8203 38.4375 20.8203L39.1797 20L38.4375 19.1797C38.4375 19.1797 30.4199 10 20 10ZM20 12.5C22.7539 12.5 25.293 13.252 27.5 14.2578C28.2959 15.5762 28.75 17.0947 28.75 18.75C28.75 23.2666 25.3613 26.9775 20.9766 27.4609C20.9521 27.4658 20.9229 27.4561 20.8984 27.4609C20.6006 27.4756 20.3027 27.5 20 27.5C19.668 27.5 19.3457 27.4805 19.0234 27.4609C14.6387 26.9775 11.25 23.2666 11.25 18.75C11.25 17.1191 11.6895 15.6006 12.4609 14.2969H12.4219C14.6484 13.2715 17.2168 12.5 20 12.5ZM20 15C17.9297 15 16.25 16.6797 16.25 18.75C16.25 20.8203 17.9297 22.5 20 22.5C22.0703 22.5 23.75 20.8203 23.75 18.75C23.75 16.6797 22.0703 15 20 15ZM9.0625 16.1719C8.86719 17.0117 8.75 17.8564 8.75 18.75C8.75 20.9424 9.375 22.9932 10.4688 24.7266C7.31934 22.9053 5.13184 20.7324 4.41406 20C5.01465 19.3848 6.68945 17.7539 9.0625 16.1719ZM30.9375 16.1719C33.3105 17.7539 34.9854 19.3848 35.5859 20C34.8682 20.7324 32.6807 22.9053 29.5312 24.7266C30.625 22.9932 31.25 20.9424 31.25 18.75C31.25 17.8564 31.1328 17.002 30.9375 16.1719Z"
                fill="#FD8903"
              />
            </svg>

            <!-- 🙈 Hidden (hide) icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              class="customeSVG"
            >
              <path
                d="M4.64844 2.85156L2.85156 4.64844L10.625 12.3828L24.4922 26.25L26.875 28.6719L35.3516 37.1484L37.1484 35.3516L29.375 27.5781C34.668 24.9561 38.2178 21.0645 38.4375 20.8203L39.1797 20L38.4375 19.1797C38.1006 18.8037 30.1074 10 20 10C17.5537 10 15.2441 10.5371 13.125 11.3281L4.64844 2.85156ZM20 12.5C22.6904 12.5 25.2344 13.2568 27.5 14.2969C28.3057 15.6445 28.75 17.168 28.75 18.75C28.75 21.0205 27.8711 23.0957 26.4453 24.6484L22.8906 21.0938C23.4131 20.4541 23.75 19.6436 23.75 18.75C23.75 16.6797 22.0703 15 20 15C19.1064 15 18.2959 15.3369 17.6562 15.8594L15.1172 13.3203C16.6699 12.8418 18.2959 12.5 20 12.5ZM8.35938 13.6328C4.35059 16.0986 1.74805 18.9697 1.5625 19.1797L0.820312 20L1.5625 20.8203C1.88477 21.1816 9.28711 29.2822 18.8281 29.9219C19.2139 29.9609 19.6045 30 20 30C20.3955 30 20.7861 29.9609 21.1719 29.9219C22.2021 29.8535 23.208 29.7168 24.1797 29.4922L21.9531 27.2656C21.3184 27.4121 20.6738 27.5 20 27.5C15.1758 27.5 11.25 23.5742 11.25 18.75C11.25 18.0859 11.3379 17.4365 11.4844 16.7969L8.35938 13.6328ZM9.0625 16.1719C8.8623 17.0166 8.75 17.876 8.75 18.75C8.75 20.9229 9.36035 22.9248 10.4297 24.6484C7.56836 23.0078 5.38086 21.084 4.25781 20C5.19043 19.0967 6.87012 17.5977 9.0625 16.1719ZM30.9375 16.1719C33.1299 17.5977 34.8047 19.0967 35.7422 20C34.6191 21.084 32.3975 23.0469 29.5312 24.6875C30.6055 22.9639 31.25 20.9229 31.25 18.75C31.25 17.876 31.1377 17.0117 30.9375 16.1719Z"
                fill="#FD8903"
              />
            </svg>
          </div>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

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
</script>


<style scoped>
.customeInput ::v-deep(.q-field__control) {
  background-color: rgb(255, 255, 255);
  border: 1px solid white;
  transition: all 0.3s ease;
  border-radius: 20px;
  height: 70px;
  padding-left: 22px;
  box-shadow: 6px 6px 4px 3px rgba(128, 128, 128, 0.1) inset,
    5px 5px 4px 0 rgba(0, 0, 0, 0.1);
}
.customeInput.has-value ::v-deep(.q-field__control) {
  background-color: #fff9f1;
  border: 2px solid rgba(253, 137, 3, 0.4);
}
::v-deep(.q-field--focused .q-field__control) {
  border: 2px solid rgba(253, 137, 3, 0.4);
  background: #fff9f1;
}
.customeInput ::v-deep(input::placeholder) {
  color: rgba(0, 51, 41, 0.30);
font-family: "Arena Uno";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;       /* ensure it's visible */
}

.customeSVG{
  margin-right: 10px;
  padding-top: 10px;
  cursor: pointer;
}
.customeLabel{
  color: #003329;
text-align: left;
font-family: "Arena Uno";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left: 8px;

}
</style>
