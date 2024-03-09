<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  components: {
    AppCard
  },

  data() {
    return {
      store,
      selectedFilmId: null,
      ratedMovies: [],
      ratedSeries: [],
    }
  },

  created() {
    this.searchRatedMovies();
    this.searchRatedSeries();
  },

  methods: {
    async showSeasons(tvSeriesId) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvSeriesId}?api_key=03d6753f3d360fdeafb03f1042471a0a&append_to_response=seasons`);
        this.seasons = response.data.seasons;
        this.selectedFilmId = tvSeriesId;
      } catch (error) {
        console.error('Nessunna info sulla serie nel Database:', error);
      }
    },

    async showCast(filmId) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=03d6753f3d360fdeafb03f1042471a0a`);
        this.cast = response.data.cast.slice(0, 5);
        this.selectedFilmId = filmId;
      } catch (error) {
        console.error('Nessunna info sul Cast del film `${filmId}`:', error);
      }
    },

    searchRatedMovies() {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=03d6753f3d360fdeafb03f1042471a0a&language=en-US`)
        .then(res => {
          this.ratedMovies = res.data.results;
        })
    },

    searchRatedSeries() {
      axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=03d6753f3d360fdeafb03f1042471a0a&language=en-US`)
        .then(res => {
          this.ratedSeries = res.data.results;
        })
    },
  }
}
</script>


<template>
  <div id="container">
    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/U2Qp5pL3ovA" frameborder="0" allowfullscreen></iframe>

    <h1>RATED MOVIES:</h1>
    <div id="rated-movies" class="cards-container-rated">
    <AppCard class="cards-rated" :cards="ratedMovies" :cast="cast" :seasons="seasons" :selectedId="selectedFilmId" @show-cast="showCast" mediaType="movie"/>
    </div>
    

    <h1>RATED SERIES:</h1>
    <div id="rated-series" class="cards-container-rated">
    <AppCard class="cards-rated" :cards="ratedSeries" :cast="cast" :seasons="seasons" :selectedId="selectedFilmId" @show-seasons="showSeasons" mediaType="tv"/>
    </div>
    

    <h1>MOVIES:</h1>
    <AppCard :cards="store.films" :cast="cast" :seasons="seasons" :selectedId="selectedFilmId" @show-cast="showCast" mediaType="movie"/>

    <h1>SERIES:</h1>  
    <AppCard :cards="store.series" :cast="cast" :seasons="seasons" :selectedId="selectedFilmId" @show-seasons="showSeasons" mediaType="tv"/>
  </div>
</template>


<style lang="scss">

//#ID'S
#container {
  padding: 20px;
}

//::SEARCHBAR'S
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 12px;
}

::-webkit-scrollbar-track {
  border-radius: 12px; 
}

.cards-container-rated::-webkit-scrollbar {
  width: 100%;
}


.cards-container-rated::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 12px;
}

.cards-container-rated::-webkit-scrollbar-track-piece {
  border-radius: 12px;
}

//.CLASSES
.series-seasons {
  position: absolute;
  top: 60%;
  left: 60%;
  background-color: black;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 6px;
  z-index: 2;
  cursor: pointer;
  max-height: 140px;
  overflow-y: scroll;
}

.cast-names {
  position: absolute;
  top: 60%;
  left: 60%;
  background-color: black;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 6px;
  z-index: 2;
  cursor: pointer;
}

.fa-star {
  color: yellow;
}
</style>