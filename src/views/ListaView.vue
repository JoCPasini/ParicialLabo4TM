<template>
  <h4>ListaView</h4>
  <div className="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">urlImageBanner</th>
          <th scope="col">textCaption</th>
          <th scope="col">Modificar</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Ver Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, id) in this.dataApp" :key="id">
          <th scope="row">{{ data.id }}</th>
          <td>{{ data.urlImageBanner }}</td>
          <td>{{ data.descripcionImagen }}</td>

          <td>
            <router-link
              :to="{ name: `formulario-id`, params: { id: data.id } }"
            >
              <button className="btn btn-primary">Modificar</button>
            </router-link>
          </td>

          <td>
            <button class="btn btn-danger" @click="borrarBanner(data.id)">
              Eliminar
            </button>
          </td>
          <td>
            <a :href="'/cardbyid/' + data.id"
              ><button class="btn btn-success">Ver Detalles</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object },
  },

  methods: {
    async borrarBanner(id) {
      alert("Se borrará el banner con id", id);
      if (id) {
        const url = `http://168.194.207.98:8081/api_banner/delete_banner.php?id=${id}`;
        const resp = await fetch(url, { method: "DELETE" });
        alert(resp);
      }
    },
    async buscarData() {
      const url = "http://168.194.207.98:8081/api_banner/get_banners.php";
      const data = await fetch(url);
      const resp = await data.json();
      this.dataApp = resp;
      console.log("this.data", this.dataApp);
    },
  },
  beforeMount() {
    this.buscarData();
  },
  data() {
    return {
      dataApp: [],
    };
  },
};
</script>

<style></style>
