<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/demobanner">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <router-link to="/"
                ><button className="btn btn-primary">Home</button>
              </router-link>
            </li>
            <li>
              <router-link to="/formulario">
                <button className="btn btn-success">Agregar Demmo</button>
              </router-link>
            </li>
            <li>
              <router-link to="/demobanner">
                <button className="btn btn-warning">Banners</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
