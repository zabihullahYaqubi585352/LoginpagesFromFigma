<template>
  <div
    class="flex items-center justify-between w-full mt-2 text-sm max-w-[850px] "
  >
    <div class="flex px-[2px] gap-4">
      <div class="flex items-center justify-center gap-[2px]">
        <q-checkbox
          v-model="internalRememberMe"
          class="remember_me"
        />
        <span class="text-[#003329] text-[20px] flex items-center">Remember Me</span>
      </div>
      <div class="flex items-center gap-[2px] justify-center">
        <q-checkbox
          v-model="internalRememberUser"
          class="remember_me"
        />
        <span class="text-[#003329] text-[20px]">Remember User Name</span>
      </div>
    </div>

    <span
      class="text-[#1A2BE5] cursor-pointer text-[20px] font-normal leading-normal font-[Arena_Uno] mr-2"
      @click="$emit('forgot')"
    >
      Forgot Password
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  rememberMe: Boolean,
  rememberUser: Boolean,
});

const emit = defineEmits([
  "update:rememberMe",
  "update:rememberUser",
  "forgot",
]);

const internalRememberMe = computed({
  get: () => props.rememberMe,
  set: (val) => emit("update:rememberMe", val),
});

const internalRememberUser = computed({
  get: () => props.rememberUser,
  set: (val) => emit("update:rememberUser", val),
});
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



