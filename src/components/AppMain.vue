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
  <div id="container">
    <h1>FILM:</h1>
    <div class="cards-container">
      <div class="cards" v-for="film in store.films" :key="film.id">
        <div class="card-image" :style="{ backgroundImage: film.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + film.backdrop_path + ')' : 'url(https://www.ilgustodellafrutta.it/wp-content/uploads/2019/04/cipolla-rossa.jpg)' }">
          <div class="overlay">
            <h3>{{ film.title }}</h3>
            <div class="details">
              <h2 class="title">{{ film.original_title }}</h2>
              <img :src="imageFlag(film.original_language)" alt="Flag" />
              <p class="overview">{{ film.overview }}</p>
              <div class="star-rating">
                <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <h1>SERIES:</h1>
    <div class="cards-container">
      <div class="cards" v-for="tvSeries in store.series" :key="tvSeries.id">
        <div class="card-image" :style="{ backgroundImage: tvSeries.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + tvSeries.backdrop_path + ')' : 'url(https://www.ilgustodellafrutta.it/wp-content/uploads/2019/04/cipolla-rossa.jpg)' }">
          <div class="overlay">
            <h3>{{ tvSeries.name }}</h3>
            <div class="details">
              <h2 class="title">{{ tvSeries.original_name }}</h2>
              <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
              <p class="overview">{{ tvSeries.overview }}</p>
              <div class="star-rating">
                <span v-html="starsVote(transformVoteAverage(tvSeries.vote_average))"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

#container {
  padding: 20px;
}

.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.cards {
  width: 19%;
  margin-bottom: 20px;
}

.card-image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
}

.card-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fa-star {
  color: yellow;
}

.card-image:hover .overlay {
  opacity: 1;
}

.card-image .details {
  padding: 20px;
  text-align: left;
}

.card-image .details h3 {
  margin-top: 0;
}

.star-rating {
  font-size: 24px;
}

.title {
  max-height: 80px;
  overflow: hidden;
}

.overview {
  max-height: 180px;
  overflow: hidden;
}
</style>  