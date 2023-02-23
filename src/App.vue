<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <nav class="m-5">
    <router-link to="/"><button class="btn btn-info">Accueil</button></router-link> |
    <router-link to="/produit"><button class="btn btn-success">Ma liste de produit</button></router-link> |
    <router-link to="/api"><button class="btn btn-warning">Départements</button></router-link> |
    <router-link to="/commune"><button class="btn btn-light">Communes</button></router-link>

  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
