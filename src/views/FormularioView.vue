<template>
  <div id="form-input" class="container">
    <h4>Formulario</h4>
    <div class="form-group">
      <label for="instrumento">url imagen</label>
      <input
        type="text"
        id="urlImageBanner"
        v-model="urlImageBanner"
        required="requerido"
      />
    </div>

    <div class="form-group">
      <label for="textCaption">textCaption</label>
      <input
        type="text"
        id="textCaption"
        v-model="textCaption"
        required="requerido"
      />
    </div>
    <div class="form-group">
      <label for="descripcionImagen">descripcionImagen</label>
      <input
        type="text"
        id="descripcionImagen"
        v-model="descripcionImagen"
        required="requerido"
      />
    </div>

    <div class="form-group">
      <label for="ordenSlider">ordenSlider</label>
      <input
        type="number"
        id="ordenSlider"
        v-model.number="ordenSlider"
        required="requerido"
      />
    </div>

    <div class="form-group">
      <button class="btn btn-primary" @click="subirForm">Cargar Datos</button>
    </div>
    <div class="form-group">
      <a href="/">
        <button class="btn btn-secondary">Volver</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      urlImageBanner: null,
      textCaption: null,
      descripcionImagen: null,
      ordenSlider: null,
    };
  },

  methods: {
    async subirForm() {
      try {
        console.log("idParam:", this.$route.params.id);
        const idParam = Number(this.$route.params.id);
        const urlPost = "http://168.194.207.98:8081/api_banner/post_banner.php";
        const urlPut = "http://168.194.207.98:8081/api_banner/put_banner.php";

        if (idParam) {
          const demoBanner = {
            id: Number(idParam),
            urlImageBanner: this.urlImageBanner,
            textCaption: this.textCaption,
            descripcionImagen: this.descripcionImagen,
            ordenSlider: this.ordenSlider,
          };
          const resp = await fetch(urlPut, {
            method: "PUT",
            body: JSON.stringify(demoBanner),
          });
          this.statusResponse(resp.status);
          alert(resp.status);
        } else {
          const demoBanner = {
            urlImageBanner: this.urlImageBanner,
            textCaption: this.textCaption,
            descripcionImagen: this.descripcionImagen,
            ordenSlider: this.ordenSlider,
          };
          const resp = await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(demoBanner),
          });
          this.statusResponse(resp.status);
          alert(resp.status);
        }
      } catch (error) {
        alert(error);
      }
    },
    statusResponse(status) {
      if (status >= 200 && status <= 300) {
        alert("Éxito", status);
      } else {
        alert("Error al intentar cargar demoBanner");
      }
    },
  },
};
</script>

<style>
#form-input {
  align-items: center;
  align-content: center;
}
</style>
