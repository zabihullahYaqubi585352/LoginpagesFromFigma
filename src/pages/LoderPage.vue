 <template>
  <q-page class="flex items-center justify-between bg-[#F9F5F1]">
    <div class="mx-auto relative py-64 w-full h-screen  ">
      <div
        class= "absolute top-1/2 left-1/2 flex gap-[50px] z-20 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="w-[100px] h-[100px] bg-[#ED1C24] left"></div>
        <div class="w-[100px] h-[100px] bg-[#ED1C24] right"></div>
      </div>

      <div
        class=" rotating justify-center absolute top-1/2 left-1/2 flex gap-[50px] z-10 rotate-90 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div class="w-[100px] h-[100px] bg-[#FD8903] top"></div>
        <div class="w-[100px] h-[100px] bg-[#FD8903] bottom"></div>
      </div>
    </div>
  </q-page>
</template>

<!--
<template>

      <div ref="printArea" class="receipt mx-auto">
        <div class="max-w-[400px] w-full flex items-center justify-between gap-2  py-6 " >
          <div class="w-full">------------------------------------------</div>
       <div class="w-full px-2 flex items-center justify-between">

        <span> {{card.account}}</span>
        <span>:حساب</span>
       </div>
       <div class="w-full px-2 flex items-center justify-between">
        <span>{{ card.amountAfn}}</span>
        <span>:ارز رسید</span>

       </div>
       <div class="w-full px-2 flex items-center justify-between">

        <span>{{ card.amountUsd }}</span>
        <span>:ارز برد</span>
       </div>
       <div class="w-full px-2 flex items-center justify-between">

        <span>  {{ card.description }}</span>
        <span>:توضیحات</span>
       </div>
        <div class="w-full px-2 flex items-center justify-between">

        <span>
          {{ card.date }}
        </span>
         <span>:تاریخ</span>
       </div>


        </div>
        <div class="w-full">------------------------------------------</div>


      </div>

<div class="flex items-center justify-center"> <q-btn label="چاپ" color="primary" class="mt-4" @click="printCard" /></div>

</template> -->

<!-- <script setup>
import { ref } from 'vue'
const card = ref({
  account: 'محمد رفیع حسنی',
  amountAfn: ' افغانی 10000 ',
  amountUsd: '150 دالر',
  description: ' در صورتیکه توضیحات داشت',
  date: '1404-----'
})

const printCard = () => {
  const content = printArea.value.outerHTML // use Vue ref
  const printWindow = window.open('', '', 'width=400,height=600')
  printWindow.document.write(`
    <html lang="fa" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <title>Print</title>
        <style>
          @page { size: 80mm auto; margin: 4mm; }
          body { margin:0; font-family: Tahoma, Arial, sans-serif; font-size:12px; color:#000; }
          .receipt { width:72mm; padding:6px 4px; }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
    printWindow.close()
  }, 200)
}

</script> -->


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
 <!-- <style>
    @page { size: 80mm auto; margin: 4mm; }
    body {
      margin: 0;
      font-family: Tahoma, Arial, sans-serif;
      font-size: 12px;
      color: #000;
    }
    .receipt {
      max-width: 72mm;
      padding: 6px 4px;
      width: 100%;

    }
    .text-right { text-align: right; margin-bottom: 4px; }
    .text-center { text-align: center; }
    .bold { font-weight: bold; }
    .separator { text-align: center; margin: 6px 0; }
    .small { font-size: 11px; text-align: center; margin-top: 4px; }
  </style> -->
