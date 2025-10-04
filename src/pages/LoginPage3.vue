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
          class="rounded-2xl pb-20 flex flex-col items-center bg-transparent"
        >
          <q-card-section
            class="max-w-[975px] px-[6px] flex-col flex items-center justify-center "
          >
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-3xl xs:text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold"
            >
              Welcome Back
            </div>
            <div
              class="text-[#003329] text-center font-[Arena_Uno] text-[50px] xs:text-[30px] sm:text-[50px] md:text-[50px] lg:text-[70px] xl:text-[90px] font-extrabold"
            >
              Mr. Naseem Abdullah
            </div>
          </q-card-section>
          <!-- Inputs -->

          <CustomeSubmit text="Enter" @submit="handleLogin" />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomeSubmit from "../components/CustomeSubmit.vue";
</script>
