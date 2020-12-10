import Vuex from "vuex";
import Vue from "vue";
import livro from "./modules/livro";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    livro,
  }
});