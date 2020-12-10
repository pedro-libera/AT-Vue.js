import axios from "axios";

const state = {
  livrosEncontrados: [],
  livrosFavoritos: [],
};

const getters = {
  pegarLivrosEncontrados: state => state.livrosEncontrados,
  pegarLivrosFavoritos: state => state.livrosFavoritos,
};

const actions = {
  pegarLivro({ commit }, nome) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${nome}`)
      .then((r) => {
        commit('pegarLivro', r.data.items);
      })
  },
  adicionarAosFavoritos({ commit }, livro) {
    commit('adicionarAosFavoritos', livro);
  },
  filtrarFavoritos({ commit }, selecionado) {
    commit('filtrarFavoritos', selecionado);
  },
  deletarDosFavoritos({ commit }, livro) {
    commit('deletarDosFavoritos', livro);
  }

}

const mutations = {
  pegarLivro: (state, data) => state.livrosEncontrados = data,
  adicionarAosFavoritos: (state, data) => {
    const index = state.livrosFavoritos.findIndex(t => t.id === data.id)
    if (index == -1) {
      state.livrosFavoritos.push(data)
    }
  },
  filtrarFavoritos: (state, data) => state.livrosFavoritos = state.livrosFavoritos.filter((l) => l.saleInfo.saleability === data),
  deletarDosFavoritos: (state, data) => state.livrosFavoritos = state.livrosFavoritos.filter(l => l.id !== data.id),
}

export default {
  state,
  actions,
  getters,
  mutations
};