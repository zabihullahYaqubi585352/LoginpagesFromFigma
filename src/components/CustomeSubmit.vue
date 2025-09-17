<template>
  <div class="w-full max-w-[810px] rounded-[20px] h-[70px] ">
    <div

       class="arrow-box custom-button"
      @click="!disabled && $emit('submit')"
      :class="{ disabled, ready: !disabled }"
    >
      <div class="arrow left pr-6 ">Enter</div>
      <div class="  ml-15 flex items-center   ">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="32" viewBox="0 0 86 32" fill="none" class=" arrow right pl-6"  >
            <path d="M2 16H83M83 16L71.5 4.5V28L83 16Z" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>
  </div>


    </div>
  </div>



</template>

<script setup>
defineProps({
  disabled: { type: Boolean, default: false }
});
defineEmits(['submit']);
</script>
<style scoped>
/* When disabled, turn off hover/click animations */
.disabled {
  pointer-events: none;       /* block hover/click */
  opacity: 0.5;                /* optional visual */
}

.disabled .arrow.left,
.disabled .arrow.right {
  animation: none !important; /* cancel running animations */
  transform: translateY(-50%) translateX(0); /* reset center */
}

.custom-button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 0.5rem 1rem;
  background-color: #d9d9d9;
  color: white;
  font-family: 'Arena_Uno', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Hover state */
.custom-button:hover {
  background-color: #003329;
}

/* Clicked state */
.custom-button:active {
  background-color: #003329;
}

/* Arrows start centered */
.arrow {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(0);
}

/* --- Expand animations --- */
@keyframes expandLeft {
  0%   { left: 40%; transform: translate(-50%, -50%); }
  50%  { left: 30%; transform: translate(-50%, -50%); }
  100% { left: 20%; transform: translate(-50%, -50%); }
}

@keyframes expandRight {
  0%   { right: 40%; transform: translate(50%, -50%); }
  50%  { right: 30%; transform: translate(50%, -50%); }
  100% { right: 20%; transform: translate(50%, -50%); }
}

/* --- Collapse animations --- */
@keyframes collapseLeft {
  0%   { left: 20%; transform: translate(-50%, -50%); }
  50%  { left: 35%; transform: translate(-50%, -50%); }
  100% { left: 45%; transform: translate(-50%, -50%); }
}

@keyframes collapseRight {
  0%   { right: 20%; transform: translate(50%, -50%); }
  50%  { right: 35%; transform: translate(50%, -50%); }
  100% { right: 45%; transform: translate(50%, -50%); }
}

/* Apply animations */
.arrow-box:hover .arrow.left {
  animation: expandLeft 0.8s ease forwards;
}
.custom-button.ready {
  background-color: #003329; /* becomes red when ready */
}
.arrow-box:hover .arrow.right {
  animation: expandRight 0.8s ease forwards;
}
.arrow-box:not(:hover) .arrow.left {
  animation: collapseLeft 0.8s ease forwards;
}
.arrow-box:not(:hover) .arrow.right {
  animation: collapseRight 0.8s ease forwards;
}

/* Clicked/active state */



</style>
