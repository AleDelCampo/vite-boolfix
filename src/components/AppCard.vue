<script>

export default {

  props: {
    cards: Array,
    cast: Array,
    seasons: Array,
    selectedId: Number,
    mediaType: String
  },

  methods: {

    showCast(filmId) {
      this.$emit('show-cast', filmId);
    },

    showSeasons(tvSeriesId) {
      this.$emit('show-seasons', tvSeriesId);
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
    }
  }
}
</script>


<template>
  <div class="cards-container">
    <div v-if="cards" v-for="item in cards" :key="item.id" class="cards">
      <div class="card-image" :style="{ backgroundImage: item.backdrop_path ? 'url(https://image.tmdb.org/t/p/w300' + item.backdrop_path + ')' : 'url(https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?size=338&ext=jpg&ga=GA1.1.1292351815.1709769600&semt=ais)' }">
        <div class="overlay">
          <h3>{{ item.title || item.name }}</h3>
          <div class="details">
            <h2 class="title">{{ item.original_title || item.original_name }}</h2>
            <img :src="imageFlag(item.original_language)" alt="Flag" />
            <p class="overview">{{ item.overview }}</p>
            <div class="star-rating">
              <span v-html="starsVote(transformVoteAverage(item.vote_average))"></span>
            </div>
            <button v-if="mediaType === 'movie'" @click="showCast(item.id)">Mostra Cast</button>
            <button v-else @click="showSeasons(item.id)">Mostra Stagioni</button>
            <div class="cast-names" v-if="selectedId === item.id">
              <p v-for="actor in cast" :key="actor.id">{{ actor.name }}</p>
            </div>
            <div class="series-seasons" v-if="selectedId === item.id && mediaType === 'tv'">
              <div v-for="season in seasons" :key="season.season_number">
                <p>Stagione {{ season.season_number }} - Episodi: {{ season.episode_count }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

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
  height: 100%;
}

.card-image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.5s;
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

.card-image:hover {
  perspective: 1000px;
  transform: scale(1.05);
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

.cards-container-rated {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: scroll;
}

.cards-rated {
  margin-right: 10px;
  height: 100%;
  width: 1000%;
  gap: 20px;
  flex-wrap: nowrap;
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
  overflow-y: scroll;
}
</style>