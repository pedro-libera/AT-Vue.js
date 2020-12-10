<template>
  <b-row>
    <b-row>
      <b-form-input
        type="text"
        id="text-search"
        v-model.lazy="search"
        placeholder="Busca ..."
        v-on:keyup.enter="onEnter"
      ></b-form-input>

      <b-card-group deck>
        <b-card
          v-for="livro in pegarLivrosEncontrados"
          :key="livro.id"
          style="min-width: 14rem; max-width: 14rem"
          border-variant="primary"
          :header="livro.volumeInfo.title"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <router-link
            tag="p"
            :to="{
              name: 'detalharLivro',
              params: { id: livro.id, livro: livro },
            }"
          >
            <b-img-lazy
              :src="
                livro.volumeInfo.imageLinks
                  ? livro.volumeInfo.imageLinks.smallThumbnail
                  : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
              "
              width="100%"
            ></b-img-lazy>
          </router-link>
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListaLivros",
  data() {
    return {
      search: "",
    };
  },
  computed: mapGetters(["pegarLivrosEncontrados"]),
  methods: {
    ...mapActions(["pegarLivro"]),
    onEnter: function () {
      this.pegarLivro(this.search.replaceAll(" ", "+"));
    },
  },
};
</script>

<style>
.card {
  margin: 20px;
}

p:hover {
  cursor: pointer;
}

.list {
  margin: 20px;
}
</style>