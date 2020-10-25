<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import auth from '@/services/api/login';
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    HelloWorld
  },

}
</script>
