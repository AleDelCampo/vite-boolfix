<script>
import FilmFounder from '../components/FilmFounder.vue';
import { store } from '../store.js';

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

  <h1>FILM:</h1>
  <div id="container">
    <div class="cards" v-for="film in store.films" :key="film.id">
      <h3>{{ film.title }}</h3>
      <img v-if="film.backdrop_path" :src="'https://image.tmdb.org/t/p/w300' + film.backdrop_path" alt="Label" />
      <img v-else class="if-img" src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg" alt="Label" />
      <h2>{{ film.original_title }}</h2>
      <img :src="imageFlag(film.original_language)" alt="Flag" />
      <p>{{ film.overview }}</p>
      <div class="star-rating">
        <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
      </div>
    </div>
  </div>

  <h1>SERIES:</h1>
  <div id="container">
    <div class="cards" v-for="tvSeries in store.series" :key="tvSeries.id">
      <h3>{{ tvSeries.name }}</h3>
      <img v-if="tvSeries.backdrop_path" :src="'https://image.tmdb.org/t/p/w300' + tvSeries.backdrop_path" alt="Label" />
      <img v-else class="if-img" src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg" alt="Label" />
      <h2>{{ tvSeries.original_name }}</h2>
      <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
      <p>{{ tvSeries.overview }}</p>
      <div class="star-rating">
        <span v-html="starsVote(transformVoteAverage(tvSeries.vote_average))"></span>
      </div>
    </div>
  </div>

</template>


<style lang="scss">

.cards {
  border: 2px solid black;
  width: 20%;
}

#container {
  color: black;
  display: flex;
  flex-direction: row;
  width: calc(100% / 6 * 6);
  padding: 40px;
  flex-wrap: wrap;
}

.if-img {
  width: 300px;
  height: 169px;
}

.star-rating {
  font-size: 24px;
}

h1 {
  color: black;
}
</style>