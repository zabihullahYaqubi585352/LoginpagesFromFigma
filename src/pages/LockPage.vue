<template>
  <div class="flex items-center w-full min-h-screen bg-[#FFF9F1]">
    <div class="grid grid-cols-12 px-4 w-full">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <q-card
          flat
          class="bg-transparent flex flex-col items-center justify-center gap-4"
        >
          <!-- Logo -->
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="476"
              height="403"
              viewBox="0 0 476 403"
              fill="none"
            >
              <path
                d="M195.915 0.00481984L156.952 38.945L195.915 77.8851L234.878 38.945L195.915 0.00481984Z"
                fill="#ED1C24"
              />
              <path
                d="M111.727 0L72.7636 38.9402L111.727 77.8803L150.69 38.9402L111.727 0Z"
                fill="#ED1C24"
              />
              <path
                d="M55.1022 11.4092H0V403H55.1022V11.4092Z"
                fill="#ED1C24"
              />
              <path
                d="M476 11.4092V403H84.1781V347.93H420.898V11.4092H476Z"
                fill="#ED1C24"
              />
              <path
                d="M252.542 11.4092V66.4789H336.72V263.794H139.28V150.607H168.364V234.736H307.644V95.5375H84.1781V318.864H391.822V11.4092H252.542ZM252.542 150.607V179.666H223.466V150.607H252.542Z"
                fill="#ED1C24"
              />
            </svg>
          </div>

          <div
            class="w-full max-w-[476px] h-[41px] flex justify-center items-center"
          >
            <div
              @click="$emit('submit')"
              class="flex items-center justify-center custom-button border border-[#FD8903] w-full h-full"
            >
              <div
                class="flex items-center justify-center text-center text-[#FD8903] text-lg mx-[-20px]"
              >
                {{ $t("Enter") }}
              </div>
              <div class="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="13"
                  viewBox="0 0 86 32"
                  fill="#FD8903"
                >
                  <path
                    d="M2 16H83M83 16L71.5 4.5V28L83 16Z"
                    stroke="orange"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
<style scoped>
.custom-button {
  border-radius: 9.744px;
  cursor: pointer;
}
</style>
