<script>
import { store } from '../store.js';
import axios from 'axios';

export default {

  data() {
    return {
    searchTitle: '',
    store,
    };
  },

  methods: {
    searchFilms() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=03d6753f3d360fdeafb03f1042471a0a&query=${this.searchTitle}`)
        .then(res => {
            this.store.films = res.data.results;
        })
    },

    searchTv() {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=03d6753f3d360fdeafb03f1042471a0a&query=${this.searchTitle}`)
        .then(res => {
            this.store.series = res.data.results;
        })
    },

    searchAll() {
      this.searchFilms();
      this.searchTv();
    }
  }
};
</script>


<template>

  <div id="search-bar">
    <input type="search" v-model="searchTitle" placeholder="Cerca">
    <button class="btn" @click="searchAll">Cerca</button>
  </div>

</template>

  
<style lang="scss">
  #search-bar {
    display: flex;
  
    input {
    padding: 6px 12px;
  }

    button {
    padding: 6px 12px;
    cursor: pointer;

  }
}

</style>