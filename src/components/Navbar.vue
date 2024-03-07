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
