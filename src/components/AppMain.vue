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
      selectedFilmId: null,
      cast: [],
      seasons: [],
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
    <h1>RATED MOVIES::</h1>
    <div class="cards-container">
      <div class="cards" v-for="film in ratedMovies" :key="film.id">
        <div class="card-image"
          :style="{ backgroundImage: film.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + film.backdrop_path + ')' : 'url(https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?size=338&ext=jpg&ga=GA1.1.1292351815.1709769600&semt=ais)' }">
          <div class="overlay">
            <h3>{{ film.title }}</h3>
            <div class="details">
              <h2 class="title">{{ film.original_title }}</h2>
              <img :src="imageFlag(film.original_language)" alt="Flag" />
              <p class="overview">{{ film.overview }}</p>
              <div class="star-rating">
                <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
              </div>
              <button @click="showCast(film.id)">Mostra Cast</button>
              <div class="cast-names" v-if="selectedFilmId === film.id">
                <p v-for="actor in cast" :key="actor.id">{{ actor.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h1>RATED SERIES:</h1>
    <div class="cards-container">
      <div class="cards" v-for="series in ratedSeries" :key="series.id">
        <div class="card-image"
          :style="{ backgroundImage: series.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + series.backdrop_path + ')' : 'url(https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?size=338&ext=jpg&ga=GA1.1.1292351815.1709769600&semt=ais)' }">
          <div class="overlay">
            <h3>{{ series.name }}</h3>
            <div class="details">
              <h2 class="title">{{ series.original_name }}</h2>
              <img :src="imageFlag(series.original_language)" alt="Flag" />
              <p class="overview">{{ series.overview }}</p>
              <div class="star-rating">
                <span v-html="starsVote(transformVoteAverage(series.vote_average))"></span>
              </div>
              <button @click="showCast(series.id)">Mostra Cast</button>
              <div class="cast-names" v-if="selectedSeriesId === series.id">
                <p v-for="actor in cast" :key="actor.id">{{ actor.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1>FILM:</h1>
    <div class="cards-container">
      <div class="cards" v-for="film in store.films" :key="film.id">
        <div class="card-image"
          :style="{ backgroundImage: film.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + film.backdrop_path + ')' : 'url(https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?size=338&ext=jpg&ga=GA1.1.1292351815.1709769600&semt=ais)' }">
          <div class="overlay">
            <h3>{{ film.title }}</h3>
            <div class="details">
              <h2 class="title">{{ film.original_title }}</h2>
              <img :src="imageFlag(film.original_language)" alt="Flag" />
              <p class="overview">{{ film.overview }}</p>
              <div class="star-rating">
                <span v-html="starsVote(transformVoteAverage(film.vote_average))"></span>
              </div>
              <button @click="showCast(film.id)">Mostra Cast</button>
              <div class="cast-names" v-if="selectedFilmId === film.id">
                <p v-for="actor in cast" :key="actor.id">{{ actor.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <h1>SERIES:</h1>
    <div class="cards-container">
      <div class="cards" v-for="tvSeries in store.series" :key="tvSeries.id">
        <div class="card-image"
          :style="{ backgroundImage: tvSeries.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + tvSeries.backdrop_path + ')' : 'url(https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?size=338&ext=jpg&ga=GA1.1.1292351815.1709769600&semt=ais)' }">
          <div class="overlay">
            <h3>{{ tvSeries.name }}</h3>
            <div class="details">
              <h2 class="title">{{ tvSeries.original_name }}</h2>
              <img :src="imageFlag(tvSeries.original_language)" alt="Flag" />
              <p class="overview">{{ tvSeries.overview }}</p>
              <div class="star-rating">
                <span v-html="starsVote(transformVoteAverage(tvSeries.vote_average))"></span>
              </div>
              <button @click="showSeasons(tvSeries.id)">Mostra Stagioni</button>
              <div class="series-seasons" v-if="selectedFilmId === tvSeries.id">
                <div v-for="season in seasons" :key="season.season_number">
                  <p>Stagione {{ season.season_number }} - Episodi: {{ season.episode_count }}</p>
                </div>
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