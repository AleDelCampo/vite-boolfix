<script>
import FilmFounder from '../components/FilmFounder.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  components: {
    FilmFounder
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    imageFlag(flag) {
      switch (flag) {
        case 'en':
          return '../public/gb.png';
        case 'fr':
          return '../public/mf.png';
        case 'es':
          return '../public/es.png';
        case 'it':
          return '../public/it.png';
        case 'cn':
          return '../public/cn.png';
        case 'ja':
          return '../public/jp.png';
        case 'de':
          return '../public/de.png';
        default:
          return '../public/mobile-logo.png';
      }
    },
    searchFilms() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=03d6753f3d360fdeafb03f1042471a0a&query=${this.searchTitle}`)
        .then(res => {
          this.store.films = res.data.results;
          console.log(res.data.results);
        })
    }
  }
}
</script>


<template>

  <div id="film-container">
    <div v-for="film in store.films" :key="film.id">
      <h3>{{ film.title }}</h3>
      <h2>{{ film.original_title }}</h2>
      <img :src="imageFlag(film.original_language)" alt="Flag" />
      <p>{{ film.overview }}</p>
      <span>{{ film.vote_average }}</span>
    </div>
  </div>

</template>


<style lang="scss">

#film-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: moccasin;
  border-radius: 24px;
  color: black;
}

</style>