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

  <div id="series-container">
    <div v-for="tvSeries in store.series" :key="tvSeries.id">
      <h3>{{ tvSeries.title }}</h3>
      <h2>{{ tvSeries.original_title }}</h2>
      <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
      <p>{{ tvSeries.overview }}</p>
      <span>{{ tvSeries.vote_average }}</span>
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
</style>