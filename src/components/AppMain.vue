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

    transformVoteAverage(vote) {
      return Math.ceil(vote / 2);
    },

    starsVote(vote) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= vote) {
          stars += '<i class="fas fa-star"></i>';
        } else {
          stars += '<i class="far fa-star"></i>';
        }
      }
      return stars;
    },

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
  }
}
</script>


<template>

  <div id="film-container">
    <div v-for="film in store.films" :key="film.id">
      <h3>{{ film.title }}</h3>
      <img :src="'https://image.tmdb.org/t/p/w300' + film.backdrop_path" alt="Label" />
      <h2>{{ film.original_title }}</h2>
      <img :src="imageFlag(film.original_language)" alt="Flag" />
      <p>{{ film.overview }}</p>
      <div class="star-rating">
        <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
      </div>
    </div>
  </div>

  <div id="series-container">
    <div v-for="tvSeries in store.series" :key="tvSeries.id">
      <h3>{{ tvSeries.title }}</h3>
      <img :src="'https://image.tmdb.org/t/p/w300' + tvSeries.backdrop_path" alt="Label" />
      <h2>{{ tvSeries.original_title }}</h2>
      <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
      <p>{{ tvSeries.overview }}</p>
      <div class="star-rating">
        <span v-html="starsVote(transformVoteAverage(tvSeries.vote_average))"></span>
      </div>
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

#series-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: moccasin;
  border-radius: 24px;
  color: black;
}

.star-rating {
  font-size: 24px;
}
</style>