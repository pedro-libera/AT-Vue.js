import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaLivros from './components/ListaLivros'
import DetalharLivro from './components/DetalharLivro'
import LivrosFavoritos from './components/LivrosFavoritos'
// import Joke from './components/Joke'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaLivros
        },
        {
            path: '/livros/:id',
            name: 'detalharLivro',
            component: DetalharLivro
        },
        {
            path: '/livrosfavoritos',
            name: 'livrosFavoritos',
            component: LivrosFavoritos
        }
        /*,{
            path: '/joke',
            name: 'joke',
            component: Joke
        },*/
    ]
});