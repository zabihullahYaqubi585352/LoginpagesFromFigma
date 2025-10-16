<template>
  <q-page class="flex flex-center">
   <!-- <LoginPage /> -->
   <Login/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
// import LoginPage from '../pages/LoginPage.vue';
import Login from '../pages/login.vue'


export default defineComponent({
  name: 'IndexPage',
  components: {
    // LoginPage,
    Login

  }
});
</script>
