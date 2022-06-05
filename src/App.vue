<template>
  <theNavbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import theNavbar from "./components/theNavbar.vue";
export default {
  components: {
    theNavbar,
  },
};
</script>

<style>
@import url("./assets/style.css");
</style>
