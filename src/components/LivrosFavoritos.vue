<template>
  <b-row>
    <b-col>
      <b-form-select
        v-model.lazy="selecionado"
        :options="estaAVenda"
        @change="filtrarFavoritos(selecionado)"
      ></b-form-select>
    </b-col>
    <b-col>
      <b-card-group deck>
        <b-card
          v-for="livro in pegarLivrosFavoritos"
          :key="`fav_${livro.id}`"
          style="min-width: 14rem; max-width: 14rem"
          border-variant="primary"
          :header="`${livro.volumeInfo.title} ${livro.data}`"
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
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LivrosFavoritos",
  data() {
    return {
      selecionado: null,
      estaAVenda: [
        { value: "FOR_SALE", text: "Está a venda" },
        { value: "NOT_FOR_SALE", text: "Não está a venda" },
      ],
    };
  },
  computed: mapGetters(["pegarLivrosFavoritos"]),
  methods: mapActions(["filtrarFavoritos"]),
};
</script>

<style>
</style>