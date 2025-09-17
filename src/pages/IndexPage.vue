<template>
  <q-page class="flex flex-center">
   <LoginPage />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import LoginPage from '../pages/LoginPage.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    LoginPage,

  }
});
</script>
