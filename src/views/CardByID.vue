<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img
          :src="data.urlImageBanner"
          class="card-img-top"
          :alt="data.urlImageBanner"
        />
        <div class="card-body">
          <h5 class="card-title">{{ data.nombre }}</h5>
          <p class="card-text"><b>TextCaption:</b> {{ data.textCaption }}</p>
          <p class="card-text"><b>OrdenSlider:</b> {{ data.ordenSlider }}</p>
          <p class="card-text">{{ data.nombre }}</p>
        </div>
        <div class="card-footer">
          <a href="/"><button class="btn btn-primary">volver</button> </a>
          <!-- <a :href="'/formulario/' + data.id"
            ><button class="btn btn-success">Editar</button>
          </a> -->
          <td>
            <router-link
              :to="{ name: `formulario-id`, params: { id: data.id } }"
            >
              <button className="btn btn-primary">Modificar</button>
            </router-link>
          </td>
          <a :href="'/card/'"
            ><button class="btn btn-danger" @click="borrarBanner(data.id)">
              button
            </button>
          </a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: null,
  },
  methods: {
    async getByID(idParam) {
      const url = `http://168.194.207.98:8081/api_banner/get_banner.php?id=${idParam}`;
      const data = await fetch(url);
      const resp = await data.json();
      this.data = resp;
      console.log("this.data", this.data);
    },
    async borrarBanner(id) {
      alert(" DDDD Se borrará el banner con id", id);
      if (id) {
        const url = `http://168.194.207.98:8081/api_banner/delete_banner.php?id=${id}`;
        const resp = await fetch(url, { method: "DELETE" });
        alert(resp);
      }
    },
  },
  beforeMount() {
    console.log("idParam:", this.$route.params.id);
    const idParam = Number(this.$route.params.id);
    this.getByID(idParam);
  },

  data() {
    return {
      data: {},
    };
  },
};
</script>

<style>
img {
  max-width: 300px;
  max-height: 300px;
}
</style>
