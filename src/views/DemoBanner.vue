<template>
  <div id="kiko-slider">
    <ul class="slider">
      <li
        v-for="(data, id) in this.dataArr"
        :key="id"
        :v-if="dataArr !== null"
        :id="'slide' + data.id"
      >
        <h1>{{ data.textCaption }}</h1>
        <h3>{{ data.urlImageBanner }}</h3>
        <img :src="data.urlImageBanner" />
      </li>
    </ul>
    <ul class="menu">
      <li v-for="(data, id) in this.dataArr" :key="id" :v-if="dataArr !== null">
        <a :href="'#slide' + data.id"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    async buscarData() {
      const url = "http://168.194.207.98:8081/api_banner/get_banners.php";
      const dataArr = await fetch(url);
      const resp = await dataArr.json();
      this.dataArr = resp;
      if (this.data) {
        console.log("this.data", this.dataArr);
      }
    },
  },

  data() {
    return {
      dataArr: [],
    };
  },

  beforeMount() {
    this.buscarData();
  },
};
</script>

<style>
body {
  background-color: lightgrey;
}

#kiko-slider {
  font-family: sans-serif;
  margin: auto;
  background-color: white;
  max-width: 800px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}

#kiko-slider > ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

#kiko-slider > ul.slider {
  position: relative;
  max-width: 800px;
  width: 100%;
  height: 300px;
}

#kiko-slider > ul.slider h1 {
  position: absolute;
  background-color: rgba(255, 99, 71, 0.6);
  padding: 10px;
  left: 50%;
  top: 100px;
  transform: translate(-50%, -50%);
}

#kiko-slider > ul.slider h3 {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10px;
  left: 50%;
  top: 180px;
  transform: translate(-50%, -50%);
}

#kiko-slider > ul.slider li {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  width: inherit;
  height: inherit;
  transition: opacity 0.5s;
  background: #fff;
}

#kiko-slider > ul.slider li img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

#kiko-slider > ul.slider li:first-child {
  opacity: 1; /*Mostramos el primer <li>*/
}

#kiko-slider > ul.slider li:target {
  opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}

#kiko-slider > .menu {
  text-align: center;
  margin: 20px;
}

#kiko-slider > .menu li {
  display: inline-block;
  text-align: center;
}

#kiko-slider > .menu li a {
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: grey;
  padding: 10px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  border-radius: 100%;
}
</style>
