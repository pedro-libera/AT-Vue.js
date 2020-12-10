<template>
  <div>
    <Navbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

import Navbar from './components/Navbar'

export default {
  name: "app",
  components: {
    Navbar,
  }
};
</script>

<style>
</style>
