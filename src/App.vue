<script>
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store.js';
import axios from 'axios';

export default {
  components: {
    Navbar,
    AppMain
  },

  data() {
    return {
      store,
    }
  },

  created() {

  axios.get
    ('https://api.themoviedb.org/3/movie/548?api_key=03d6753f3d360fdeafb03f1042471a0a')
    .then(res => {
    this.store.films = res
    console.log(res)
  })
},
}


</script>


<template>

  <Navbar></Navbar>
  
  <AppMain></AppMain>

</template>


<style lang="scss">
</style>
