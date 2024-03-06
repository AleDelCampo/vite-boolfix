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

  <nav>

    APPLICATA MA CHE STILIZIAMO DOPO.
    <FilmFounder></FilmFounder>

  </nav>

</template>


<style lang="scss">

nav {
  width: 100%;
  height: 80px;
  background-color: burlywood;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
