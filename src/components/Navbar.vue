<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
        <b-nav-item><router-link to="/">Inicio</router-link></b-nav-item>
      <b-nav-item><router-link to="/livrosFavoritos">Livros favoritos</router-link></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
};
</script>

<style>
</style>