<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  data() {
    return {
      searchTitle: '',
      store,
      genresFilms: [],
      selectedGenreFilms: '',
      genresSeries: [],
      selectedGenreSeries: '',
    };
  },

  created() {
    this.getMovieGenres();
    this.getSeriesGenres();
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
    },

    getMovieGenres() {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=03d6753f3d360fdeafb03f1042471a0a&language=en-US`)
        .then(res => {
          this.genresFilms = res.data.genres;
        })
    },

    filterFilmsByGenre(genreId) {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=03d6753f3d360fdeafb03f1042471a0a&with_genres=${genreId}`)
        .then(res => {
          this.store.films = res.data.results;
        })
    },

    getSeriesGenres() {
      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=03d6753f3d360fdeafb03f1042471a0a&language=en-US`)
        .then(res => {
          this.genresSeries = res.data.genres;
        })
    },

    filterSeriesByGenre(genreId) {
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=03d6753f3d360fdeafb03f1042471a0a&with_genres=${genreId}`)
        .then(res => {
          this.store.series = res.data.results;
        })
    },
  }
};
</script>


<template>

  <div id="search-bar">

    <input type="search" v-model="searchTitle" placeholder="Search a movie or series">

    <select v-model="selectedGenreFilms" @change="filterFilmsByGenre(selectedGenreFilms)">
      <option value="">Select a genre for films</option>
      <option v-for="genreFilms in genresFilms" :value="genreFilms.id" :key="genreFilms.id">{{ genreFilms.name }}
      </option>
    </select>

    <select v-model="selectedGenreSeries" @change="filterSeriesByGenre(selectedGenreSeries)">
      <option value="">Select a genre for series</option>
      <option v-for="genreSeries in genresSeries" :value="genreSeries.id" :key="genreSeries.id">{{ genreSeries.name }}
      </option>
    </select>

    <button class="btn" @click="searchAll"><i class="fa-solid fa-magnifying-glass"></i></button>

  </div>

</template>


<style lang="scss">

#search-bar {
  display: flex;

  i {
    color: black;
  }

  input {
    padding: 10px 12px;
    border: none;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-right: 2px solid #757575;
  }

  button {
    padding: 10px 12px;
    background-color: red;
    opacity: 0.8;
    border: none;
    cursor: pointer;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  select {
    background-color: red;
    opacity: 0.8;
    color: black;
    border: none;
    border-right: 2px solid #757575;
  }
}
</style>