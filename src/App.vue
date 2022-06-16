<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./views/NavBar.vue";

export default {
  components: {
    NavBar,
  },

  methods: {
    saludar() {
      console.log("App running...");
    },
  },
  beforeMount() {
    this.saludar();
    console.log("WEEEY;");
  },
  data() {
    return {};
  },
};
</script>

<style>
h1 {
  background-color: aqua;
}
</style>
