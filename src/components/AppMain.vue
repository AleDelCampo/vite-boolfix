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