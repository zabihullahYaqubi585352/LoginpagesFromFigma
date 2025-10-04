<template>
  <div class="flex items-center justify-between bg-[#F9F5F1]">
    <div class="mx-auto relative py-64 w-full h-screen">
      <div
        class="absolute top-1/2 left-1/2 flex gap-[50px] z-20 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="w-[100px] h-[100px] bg-[#ED1C24] left"></div>
        <div class="w-[100px] h-[100px] bg-[#ED1C24] right"></div>
      </div>

      <div
        class="rotating justify-center absolute top-1/2 left-1/2 flex gap-[50px] z-10 rotate-90 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="w-[100px] h-[100px] bg-[#FD8903] top"></div>
        <div class="w-[100px] h-[100px] bg-[#FD8903] bottom"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* left / right static diamonds */
.left {
  transform: rotate(45deg);
}
.right {
  transform: rotate(45deg);
}

/* top / bottom diamonds rotating on Y-axis */
.top {
  transform: rotate(45deg);
}

.bottom {
  transform: rotate(45deg);
}
@keyframes step-rotate {
  0% {
    transform: rotate(180deg);
  }
  25% {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(270deg);
  } /* hold */
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  } /* hold */
}

.rotating {
  animation: step-rotate 4s linear infinite;
}
</style>

