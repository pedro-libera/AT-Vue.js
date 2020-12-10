<template>
  <b-row style="display: block">
    <b-row style="display: block">
      <h1>{{ livro.volumeInfo.title }}</h1>
    </b-row>
    <b-row>
      <b-col>
        <!-- Aqui dentro é o HTML, ou seja, as tags do bootstrap vc coloca aqui dentro -->
        <b-img-lazy
          :src="
            livro.volumeInfo.imageLinks
              ? livro.volumeInfo.imageLinks.thumbnail
              : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
          "
          width="300%"
        ></b-img-lazy>
        <!--
            Aqui vc coloca as infos que quiser puxar da api
            livro.caminho.caminho.etc...
        -->
        <b-button @click="adicionar(livro)">Adicionar aos favoritos</b-button>
        <b-button v-if="verificarSeExiste" @click="deletarDosFavoritos(livro)"
          >Remover dos favoritos</b-button
        >
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DetalharLivro",
  data() {
    return {
      id: this.$route.params.id,
      livro: this.$route.params.livro,
    };
  },
  computed: {
    ...mapGetters(["pegarLivrosFavoritos"]),
    verificarSeExiste() {
      return (
        this.pegarLivrosFavoritos.findIndex((t) => t.id === this.livro.id) !== -1
      );
    },
  },
  methods: {
    ...mapActions(["adicionarAosFavoritos", "deletarDosFavoritos"]),
    adicionar(livro) {
      let agora = new Date();
      livro.data = `${agora.getDate()}/${agora.getMonth()}/${agora.getFullYear()} - ${("0" + agora.getHours()).slice(-2)}:${("0" + agora.getMinutes()).slice(-2)}`
      this.adicionarAosFavoritos(livro);
    },
  },
};
</script>

<style>
</style>