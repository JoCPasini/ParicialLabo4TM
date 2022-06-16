<template>
  <h4>Lista Contact</h4>
  <ListaView :data="data" />
</template>

<script>
import ListaView from "./ListaView.vue";

export default {
  components: {
    ListaView,
  },

  methods: {
    async buscarData() {
      const url = "http://168.194.207.98:8081/api_banner/get_banners.php";
      const data = await fetch(url);
      const resp = await data.json();
      this.data = resp;
      console.log("this.data", this.data);
    },
  },

  data() {
    return {
      data: [],
    };
  },

  beforeMount() {
    this.buscarData();
  },
};
</script>

<style></style>
